import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  urlPokemon = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) { }

  getPokeList(): Observable<any> {
    return this.http.get<any>(this.urlPokemon + '?limit=100000&offset=0').pipe(
      tap(res => res),
      tap(res => {
        res.results.map((resPokemon: any) => {
          this.getPokemonStatus(resPokemon.url).subscribe(
            res => resPokemon.status = res
          )
        })
      })
    )
  }

  getPokemonStatus(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(
      map(res => res)
    )
  }
}