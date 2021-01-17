import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'rlst-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() searchEventEmitter = new EventEmitter<any>();
  pokemonName:String;

  constructor(private searchService: SearchService) {

   }

  ngOnInit(): void {
  }

  searchPokemon() {
    console.log(this.pokemonName)
    this.searchService.searchPokemon(this.pokemonName).subscribe(
      (foundPokemonData)=>{
        console.log(foundPokemonData);
        this.searchEventEmitter.emit(foundPokemonData);
      },
      (error)=>{
        console.error(error)
      },
    )
  }

}
