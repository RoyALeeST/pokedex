import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'rlst-pokemon-description',
  templateUrl: './pokemon-description.component.html',
  styleUrls: ['./pokemon-description.component.scss']
})
export class PokemonDescriptionComponent implements OnInit {

  subscription: Subscription;
  pokedexEntry: String = null;

  constructor(private searchService: SearchService) { 
    this.subscription = this.searchService.newPokemonSearched$.subscribe((pokemonData) => {
      this.searchService.searchPokemonPokedexEntry(pokemonData.id).subscribe((pokedexEntry)=>{
        this.pokedexEntry = pokedexEntry.flavor_text_entries[0].flavor_text;
        console.log(pokedexEntry.flavor_text_entries[0].flavor_text)
      })
      // this.pokedexEntry = pokemonData
    })
  }

  ngOnInit(): void {
  }

}
