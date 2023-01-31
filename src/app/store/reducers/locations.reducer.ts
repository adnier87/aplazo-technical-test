import { createReducer, on, Action } from '@ngrx/store'
import { IAPIResponse } from "src/app/interfaces/api.interface";
import { fetch, fetchFailure, fetchSuccess } from '../actions/locations.actions';

export interface LocationsState {
    locations? : IAPIResponse | {};
    errorMessage? : any;
    isLoading? : boolean;
    isSuccessful? : boolean;
    isFailed? : boolean;
}

const initialState : LocationsState = {
    locations : {},
    isLoading : false,
    isFailed : false,
    isSuccessful : false,
}

const fetchLocationsReducer = createReducer(
    initialState,
    on(fetch, (state) => ({...state, isLoading : true})),
    on(fetchSuccess, (state, locations) => ({
        ...state,
        locations,
        isLoading : false,
        isSuccessful : true,
        isFailed : false
    })),
    on(fetchFailure, (state, message) => ({
        ...state,
        errorMessage : message,
        locations : {},
        isLoading : false,
        isSuccessful : false,
        isFailed : true
    }))
)

export const reducer = (state : LocationsState | undefined, action : Action) => fetchLocationsReducer(state, action);
