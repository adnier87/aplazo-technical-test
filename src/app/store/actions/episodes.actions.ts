import { createAction, props } from "@ngrx/store";
import { IEpisode } from "src/app/interfaces/api.interface";


export const FETCH_EPISODES = '[Locations] fetching';
export const FETCH_EPISODES_SUCCESS = '[Locations] successful fetching';
export const FETCH_EPISODES_FAILURE = '[Locations] failed fetching';

export const fetch = createAction(
    FETCH_EPISODES,
    props<{episodes : IEpisode[]}>()
)

export const fetchSuccess = createAction(
    FETCH_EPISODES_SUCCESS,
    props<any>()
)

export const fetchFailure = createAction(
    FETCH_EPISODES_FAILURE,
    props<{message : string}>()
)
