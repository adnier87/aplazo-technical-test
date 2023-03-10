import { createAction, props } from "@ngrx/store";


const FETCH_CHARACTERS = '[Characters] fetching';
const FETCH_CHARACTERS_SUCCESS = '[Characters] successful fetching';
const FETCH_CHARACTERS_FAILURE = '[Characters] failed fetching';
const FETCH_CHARACTER = '[Character] fetching';
const FETCH_CHARACTER_SUCCESS = '[Character] successful fetching';
const FETCH_CHARACTER_FAILURE = '[Character] failed fetching';

export const fetchCharacters = createAction(
    FETCH_CHARACTERS,
    props<{page : number}>()
)

export const fetchCharactersSuccess = createAction(
    FETCH_CHARACTERS_SUCCESS,
    props<any>()
)

export const fetchCharactersFailure = createAction(
    FETCH_CHARACTERS_FAILURE,
    props<{message : string}>()
)

export const fetchCharacter = createAction(
    FETCH_CHARACTER,
    props<{id : number}>()
)

export const fetchCharacterSuccess = createAction(
    FETCH_CHARACTER_SUCCESS,
    props<any>()
)

export const fetchCharacterFailure = createAction(
    FETCH_CHARACTER_FAILURE,
    props<{message : string}>()
)
