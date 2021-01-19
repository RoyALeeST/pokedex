import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  readonly POKE_BASE_URL = "https://pokeapi.co/api/v2/";
  // eventemitter for pokemon found
  private newPokemonSearched = new Subject<any>();
  newPokemonSearched$ = this.newPokemonSearched.asObservable();

  // eventemitter for pokemon POKEDEX ENTRY found
  private newPokemonPokedexEntrySearched = new Subject<any>();
  newPokemonPokedexEntrySearched$ = this.newPokemonPokedexEntrySearched.asObservable();

  constructor(private http: HttpClient) { }

  searchPokemon(pokemonName: String): Observable<any> {
    return this.http.get<any>(this.POKE_BASE_URL + "pokemon/" + pokemonName)  
    .pipe(
      tap(response => {
        this.newPokemonSearched.next(response);
        this.searchPokemonPokedexEntry(response.id);
      }),
      catchError(this.handleError)
    )
  }

  searchPokemonPokedexEntry(pokemonID: number): Observable<any> {
    return this.http.get<any>(this.POKE_BASE_URL + "pokemon-species/" + pokemonID)  
    .pipe(
      tap(response => {
        this.newPokemonPokedexEntrySearched.next(response);
      }),
      catchError(this.handleError)
    )
  }

  searchPokemonMovexEntry(moveID: string): Observable<any> {
    return this.http.get<any>(this.POKE_BASE_URL + "move/" + moveID);
  }

    
  // Error handling 
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
}
