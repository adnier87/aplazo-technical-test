import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, createFeatureSelector, createSelector } from '@ngrx/store';
import * as _ from 'lodash';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ICharacter } from 'src/app/interfaces/api.interface';
import { fetchCharacters, fetchCharactersSuccess } from 'src/app/store/actions/characters.actions';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss']
})
export class CharactersPageComponent implements OnInit, OnDestroy {
  private unsubscriber : Subject<void> = new Subject();
  next : number | null = 1;
  characters : ICharacter[] = []
  temp : any

  constructor(
    private store : Store
  ) {
    store.select(createSelector(
      createFeatureSelector('characters'),
      fetchCharactersSuccess
    )).pipe(
      takeUntil(this.unsubscriber)
    ).subscribe(data => {
      if (!data.isLoading) {
        this.next = data?.characters?.info ? data.characters.info.next : 1
        this.characters = this.characters.concat(data?.characters?.results || [])
      }
    })
  }

  ngOnInit(): void {
    this.fetchCharacters(this.next as number)
  }

  private fetchCharacters(page : number) : void {
    this.store.dispatch(fetchCharacters({ page }))
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
