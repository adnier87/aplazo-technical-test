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
  characters : ICharacter[] = []

  constructor(
    private api : ApiService
  ) {}

  ngOnInit(): void {
    this.api.getCharacters(1)
      .pipe(
        takeUntil(this.unsubscriber),
        map((result : ICharactersResponse) => result.data)
      )
      .subscribe((response : IResultData) => this.characters = response.characters.results)
  }

  hasCharacters() : boolean {
    return !_.isEmpty(this.characters)
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}
