import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'rlst-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit, OnDestroy {

  pokemonData: any;
  subscription: Subscription;

  constructor(private searchService: SearchService) {
    this.subscription = this.searchService.newPokemonSearched$.subscribe((pokemonData)=>{
      this.pokemonData = pokemonData;
    })
   }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
