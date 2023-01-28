import { Component, OnInit, OnDestroy } from '@angular/core';
import * as _ from 'lodash';
import { Subject, map } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ICharactersResponse, ICharacter, IResultData } from 'src/app/interfaces/api.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss']
})
export class CharactersPageComponent implements OnInit, OnDestroy {
  private unsubscriber : Subject<void> = new Subject();
  next : number | null = 1;
  characters : ICharacter[] = []

  constructor(
    private api : ApiService
  ) {}

  ngOnInit(): void {
    this.fetchCharacters(this.next as number)
  }

  private fetchCharacters(page : number) : void {
    this.api.getCharacters(page)
      .pipe(
        takeUntil(this.unsubscriber),
        map((result : ICharactersResponse) => result.data)
      )
      .subscribe((response : IResultData) => {
        this.characters = this.characters.concat(response.characters.results);
        this.next = response.characters.info.next
      })
  }

  hasCharacters() : boolean {
    return !_.isEmpty(this.characters)
  }

  loadMore() : void {
    if (this.next)
      this.fetchCharacters(this.next)
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}
