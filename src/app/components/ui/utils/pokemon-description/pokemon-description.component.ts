import { Component, OnInit } from '@angular/core';
import { resourceUsage } from 'process';
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

        let result = pokedexEntry.flavor_text_entries.find(entry => {          
          if(entry.language.name == "en"){
            console.log(entry.flavor_text)
            return true;
          }
        })
        this.pokedexEntry = result.flavor_text;

      })
      // this.pokedexEntry = pokemonData
    })
  }

  ngOnInit(): void {
  }

}
