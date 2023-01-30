import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { ICharactersResponse } from 'src/app/interfaces/api.interface';
import { ApiService } from 'src/app/services/api.service';
import {
    fetchCharacter,
    fetchCharacterFailure,
    fetchCharacters,
    fetchCharactersFailure,
    fetchCharactersSuccess,
    fetchCharacterSuccess
} from '../actions/characters.actions';

@Injectable()
export class CharactersEffects {
    constructor(
        private actions : Actions,
        private apiService : ApiService
    ) {}

    getCharacters = createEffect(() =>
        this.actions.pipe(
            ofType(fetchCharacters),
            mergeMap(action =>
                this.apiService.getCharacters(action.page).pipe(
                    map(response => {
                        console.log('fetch characters response::: ', response)
                        return fetchCharactersSuccess({ ...(response.data as ICharactersResponse).characters })
                    }),
                    catchError((error : any) => of(fetchCharactersFailure(error)))
                )
            )
        )
    )

    getCharacter = createEffect(() =>
        this.actions.pipe(
            ofType(fetchCharacter),
            mergeMap(action =>
                this.apiService.getCharacters(action.id).pipe(
                    map(response => {
                        console.log('fetch characters response::: ', response)
                        return fetchCharacterSuccess({ response })
                    }),
                    catchError((error : any) => of(fetchCharacterFailure(error)))
                )
            )
        )
    )
}
