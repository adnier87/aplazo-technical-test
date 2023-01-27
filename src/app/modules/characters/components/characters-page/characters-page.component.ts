import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs'
import { takeUntil } from 'rxjs/operators'
import { ICharactersResponse } from 'src/app/interfaces/api.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss']
})
export class CharactersPageComponent implements OnInit, OnDestroy {
  private unsubscriber : Subject<void> = new Subject();

  constructor(
    private api : ApiService
  ) {}

  ngOnInit(): void {
    this.api.getCharacters(1)
      .pipe(
        takeUntil(this.unsubscriber),
        map((result : ICharactersResponse) => result.data)
      )
      .subscribe()
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}
