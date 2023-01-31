import { createReducer, on, Action } from '@ngrx/store'
import { IAPIResponse } from "src/app/interfaces/api.interface";
import { fetchCharacters, fetchCharactersFailure, fetchCharactersSuccess } from '../actions/characters.actions';

export interface CharactersState {
    characters? : IAPIResponse | {};
    errorMessage? : any;
    isLoading? : boolean;
    isSuccessful? : boolean;
    isFailed? : boolean;
}

const initialState : CharactersState = {
    characters : {},
    isLoading : false,
    isFailed : false,
    isSuccessful : false,
}

const fetchCharactersReducer = createReducer(
    initialState,
    on(fetchCharacters, (state) => ({...state, isLoading : true})),
    on(fetchCharactersSuccess, (state, characters) => ({
        ...state,
        characters,
        isLoading : false,
        isSuccessful : true,
        isFailed : false
    })),
    on(fetchCharactersFailure, (state, message) => ({
        ...state,
        errorMessage : message,
        characters : {},
        isLoading : false,
        isSuccessful : false,
        isFailed : true
    }))
)

export const reducer = (state : CharactersState | undefined, action : Action) => fetchCharactersReducer(state, action);
