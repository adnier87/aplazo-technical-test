import { createAction, props } from "@ngrx/store";
import { ILocation } from "src/app/interfaces/api.interface";


export const FETCH_LOCATIONS = '[Locations] fetching';
export const FETCH_LOCATIONS_SUCCESS = '[Locations] successful fetching';
export const FETCH_LOCATIONS_FAILURE = '[Locations] failed fetching';

export const fetch = createAction(
    FETCH_LOCATIONS,
    props<{locations : ILocation[]}>()
)

export const fetchSuccess = createAction(
    FETCH_LOCATIONS_SUCCESS,
    props<any>()
)

export const fetchFailure = createAction(
    FETCH_LOCATIONS_FAILURE,
    props<{message : string}>()
)
