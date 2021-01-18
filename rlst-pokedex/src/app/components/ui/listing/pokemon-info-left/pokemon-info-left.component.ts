import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'rlst-pokemon-info-left',
  templateUrl: './pokemon-info-left.component.html',
  styleUrls: ['./pokemon-info-left.component.scss']
})
export class PokemonInfoLeftComponent implements OnInit, OnDestroy {

  moves:any[] = []
  subscription: Subscription;

  constructor(private searchService: SearchService) {
    this.subscription = this.searchService.newPokemonSearched$.subscribe(
      (pokemonData)=>{
        this.moves = pokemonData.moves
      },
    )
   }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
