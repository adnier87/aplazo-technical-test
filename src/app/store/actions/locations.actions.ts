import { createAction, props } from "@ngrx/store";


const FETCH_LOCATIONS = '[Locations] fetching';
const FETCH_LOCATIONS_SUCCESS = '[Locations] successful fetching';
const FETCH_LOCATIONS_FAILURE = '[Locations] failed fetching';

export const fetch = createAction(
    FETCH_LOCATIONS,
    props<{page : number}>()
)

export const fetchSuccess = createAction(
    FETCH_LOCATIONS_SUCCESS,
    props<any>()
)

export const fetchFailure = createAction(
    FETCH_LOCATIONS_FAILURE,
    props<{message : string}>()
)
