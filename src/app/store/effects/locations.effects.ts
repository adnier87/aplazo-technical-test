import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, mergeMap, map, of } from 'rxjs';
import { ILocationsResponse } from 'src/app/interfaces/api.interface';
import { ApiService } from 'src/app/services/api.service';
import { fetch, fetchFailure, fetchSuccess } from '../actions/locations.actions';

@Injectable()
export class LocationsEffects {
    constructor(
        private actions : Actions,
        private apiService : ApiService
    ) {}

    getLocations = createEffect(() =>
        this.actions.pipe(
            ofType(fetch),
            mergeMap(action => {
                return this.apiService.getLocations(action.page).pipe(
                    map(response => {
                        console.log('fetch locations response::: ', response)
                        return fetchSuccess({ ...(response.data as ILocationsResponse).locations })
                    }),
                    catchError((error : any) => of(fetchFailure(error)))
                )
            })
        )
    )
}
