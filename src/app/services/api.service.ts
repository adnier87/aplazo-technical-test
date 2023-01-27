import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { GET_CHARACTERS } from '../utils/queries';
import { CharactersResponse } from '../interfaces/api.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl : string = 'https://rickandmortyapi.com'

  constructor(private httpClient : HttpClient) { }

  getCharacters(page : number) : Observable<CharactersResponse> {
    return this.httpClient.post<CharactersResponse>(
      this.baseUrl, {
        GET_CHARACTERS,
        variables: {
          page
        }
      }
    )
  }
}
