import { createAction, props } from "@ngrx/store";


const FETCH_EPISODES = '[Locations] fetching';
const FETCH_EPISODES_SUCCESS = '[Locations] successful fetching';
const FETCH_EPISODES_FAILURE = '[Locations] failed fetching';

export const fetch = createAction(
    FETCH_EPISODES,
    props<{page : number}>()
)

export const fetchSuccess = createAction(
    FETCH_EPISODES_SUCCESS,
    props<any>()
)

export const fetchFailure = createAction(
    FETCH_EPISODES_FAILURE,
    props<{message : string}>()
)
