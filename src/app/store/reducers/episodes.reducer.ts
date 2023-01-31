import { createReducer, on, Action } from '@ngrx/store'
import { IAPIResponse } from "src/app/interfaces/api.interface";
import { fetch, fetchFailure, fetchSuccess } from '../actions/episodes.actions';

export interface EpisodesState {
    episodes? : IAPIResponse | {};
    errorMessage? : any;
    isLoading? : boolean;
    isSuccessful? : boolean;
    isFailed? : boolean;
}

const initialState : EpisodesState = {
    episodes : {},
    isLoading : false,
    isFailed : false,
    isSuccessful : false,
}

const fetchEpisodesReducer = createReducer(
    initialState,
    on(fetch, (state) => ({...state, isLoading : true})),
    on(fetchSuccess, (state, episodes) => ({
        ...state,
        episodes,
        isLoading : false,
        isSuccessful : true,
        isFailed : false
    })),
    on(fetchFailure, (state, message) => ({
        ...state,
        errorMessage : message,
        episodes : {},
        isLoading : false,
        isSuccessful : false,
        isFailed : true
    }))
)

export const reducer = (state : EpisodesState | undefined, action : Action) => fetchEpisodesReducer(state, action);
