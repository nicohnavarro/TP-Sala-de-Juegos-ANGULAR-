
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseURL= "https://pokeapi.co/api/v2/"

  constructor(private http: HttpClient) { }

  public getPokemonById(id:number):Observable<any>{
    return this.http.get<any>(`${this.baseURL}pokemon/${id}`);
  }
}


