import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'rlst-pokemon-info-left',
  templateUrl: './pokemon-info-left.component.html',
  styleUrls: ['./pokemon-info-left.component.scss']
})
export class PokemonInfoLeftComponent implements OnInit {
  moves:any[] = []
  constructor(private searchService: SearchService) {
    this.searchService.newPokemonSearched$.subscribe(
      (pokemonData)=>{
        this.moves = pokemonData.moves
      },
    )
   }

  ngOnInit(): void {
  }

}
