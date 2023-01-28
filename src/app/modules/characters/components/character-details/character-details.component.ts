import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Subject, takeUntil } from 'rxjs';
import { IAPIResponse, ICharacter, ICharacterResponse } from 'src/app/interfaces/api.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit, OnDestroy {
  private id! : string | null
  private unsubscriber : Subject<void> = new Subject();
  character! : ICharacter

  constructor(
    private route : ActivatedRoute,
    private api : ApiService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    if (this.id) {
      this.api.getCharacter(+this.id)
        .pipe(
          takeUntil(this.unsubscriber),
          map((response : IAPIResponse) => response.data)
        )
        .subscribe(response => this.character = (response as ICharacterResponse).character)
    }
  }

  ngOnDestroy(): void {
    this.unsubscriber.next()
    this.unsubscriber.complete()
  }
}
