import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { fetch, fetchFailure, fetchSuccess } from '../actions/episodes.actions';

@Injectable()
export class CharactersEffects {
    constructor(
        private actions : Actions,
        private apiService : ApiService
    ) {}

    getLocations = createEffect(() =>
        this.actions.pipe(
            ofType(fetch),
            exhaustMap(action =>
                this.apiService.getCharacters(action.page).pipe(
                    map(response => {
                        console.log('fetch characters response::: ', response)
                        return fetchSuccess({ response })
                    }),
                    catchError((error : any) => of(fetchFailure(error)))
                )
            )
        )
    )
}
