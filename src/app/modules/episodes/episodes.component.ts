import { Component } from '@angular/core';
import { Store, createFeatureSelector, createSelector } from '@ngrx/store';
import * as _ from 'lodash';
import { Subject, takeUntil, map } from 'rxjs';

import { IAPIResponse, ICharacter, IEpisode, IEpisodesResponse } from 'src/app/interfaces/api.interface';
import { fetch, fetchSuccess } from 'src/app/store/actions/episodes.actions';

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

  constructor(private store : Store) {
    this.store.select(createSelector(
      createFeatureSelector('episodes'),
      fetchSuccess
    )).pipe(
      takeUntil(this.unsubcriber)
    ).subscribe(data => {
      if (!data.isLoading) {
        this.nextPage = data?.episodes?.info ? data.episodes.info.next : 1
        this.episodes = this.episodes.concat(data?.episodes?.results || [])
      }
    })
  }

  ngOnInit(): void {
    this.fetchEpisodes(this.nextPage as number)
  }

  fetchEpisodes(page : number) : void {
    this.store.dispatch(fetch({page}))
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
