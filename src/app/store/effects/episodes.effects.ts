import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, mergeMap, map, of } from 'rxjs';
import { IEpisodesResponse } from 'src/app/interfaces/api.interface';
import { ApiService } from 'src/app/services/api.service';
import { fetch, fetchFailure, fetchSuccess } from '../actions/episodes.actions';

@Injectable()
export class EpisodesEffects {
    constructor(
        private actions : Actions,
        private apiService : ApiService
    ) {}

    getLocations = createEffect(() =>
        this.actions.pipe(
            ofType(fetch),
            mergeMap(action =>
                this.apiService.getEpisodes(action.page).pipe(
                    map(response => {
                        console.log('fetch episodes response::: ', response)
                        return fetchSuccess({ ...(response.data as IEpisodesResponse).episodes })
                    }),
                    catchError((error : any) => of(fetchFailure(error)))
                )
            )
        )
    )
}
