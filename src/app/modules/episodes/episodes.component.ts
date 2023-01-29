import { Component } from '@angular/core';
import * as _ from 'lodash';
import { Subject, takeUntil, map } from 'rxjs'
import { IAPIResponse, ICharacter, IEpisode, IEpisodesResponse } from 'src/app/interfaces/api.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent {

  private unsubcriber : Subject<void> = new Subject();
  nextPage : number | null = 1;
  episodes : IEpisode[] = [];
  characters : ICharacter[] = [];
  episodeName : string = '';

  constructor(private api : ApiService) {}

  ngOnInit(): void {
    this.fetchEpisodes(this.nextPage as number)
  }

  fetchEpisodes(page : number) : void {
    this.api.getEpisodes(page)
      .pipe(
        takeUntil(this.unsubcriber),
        map((response : IAPIResponse) => (response.data as IEpisodesResponse).episodes) 
      )
      .subscribe(response => {
        this.nextPage = response.info.next
        this.episodes = this.episodes.concat(response.results)
      })
  }

  showCharacters(id : string) : void {
    const episode = this.episodes.find(e => e.id === id);
    const { name = '', episode : episodeTitle = '' } = episode || {};
    this.episodeName = `${episodeTitle}: ${name}`;
    this.characters = episode?.characters || [];
  }

  hasEpisodes() : boolean {
    return !_.isEmpty(this.episodes)
  }
  
  loadMore() : void {
    if (this.nextPage) {
      this.fetchEpisodes(this.nextPage)
    }
  }
  
  ngOnDestroy(): void {
    this.unsubcriber.next()
    this.unsubcriber.complete()
  }
}
