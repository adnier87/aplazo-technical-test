import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apollo } from 'apollo-angular';

import { GET_CHARACTER, GET_CHARACTERS, GET_EPISODES, GET_LOCATIONS } from '../utils/queries';
import { IAPIResponse } from '../interfaces/api.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private apollo : Apollo) {}

  getCharacters(page : number) : Observable<IAPIResponse> {
    return this.apollo.watchQuery<any>({
      query: GET_CHARACTERS,
      variables: {
        page
      }
    }).valueChanges
  }

  getCharacter(id : number) : Observable<IAPIResponse> {
    return this.apollo.watchQuery<any>({
      query: GET_CHARACTER,
      variables: {
        id
      }
    }).valueChanges
  }

  getLocations(page : number) : Observable<IAPIResponse> {
    return this.apollo.watchQuery<any>({
      query: GET_LOCATIONS,
      variables: {
        page
      }
    }).valueChanges
  }

  getEpisodes(page : number) : Observable<IAPIResponse> {
    return this.apollo.watchQuery<any>({
      query: GET_EPISODES,
      variables: {
        page
      }
    }).valueChanges
  }
}
