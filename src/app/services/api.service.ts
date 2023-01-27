import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apollo } from 'apollo-angular';

import { GET_CHARACTERS } from '../utils/queries';
import { CharactersResponse } from '../interfaces/api.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private apollo : Apollo) {}

  getCharacters(page : number) : Observable<CharactersResponse> {
    return this.apollo.watchQuery<any>({
      query: GET_CHARACTERS,
      variables: {
        page
      }
    }).valueChanges
  }
}
