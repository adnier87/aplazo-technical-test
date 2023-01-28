import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apollo } from 'apollo-angular';

import { GET_CHARACTERS } from '../utils/queries';
import { ICharactersResponse } from '../interfaces/api.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private apollo : Apollo) {}

  getCharacters(page : number) : Observable<ICharactersResponse> {
    return this.apollo.watchQuery<any>({
      query: GET_CHARACTERS,
      variables: {
        page
      }
    }).valueChanges
  }
}
