import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'rlst-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  pokemonName:String;

  constructor(private searchService: SearchService) {

   }

  ngOnInit(): void {
  }

  searchPokemon() {
    this.searchService.searchPokemon(this.pokemonName)
    .subscribe(
      ()=>{},
      (error)=>{
        console.error(error)
      },
    )
  }

}
