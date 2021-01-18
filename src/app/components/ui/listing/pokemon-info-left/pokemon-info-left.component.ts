import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchService } from 'src/app/services/search/search.service';
import {Router} from '@angular/router';

@Component({
  selector: 'rlst-pokemon-info-left',
  templateUrl: './pokemon-info-left.component.html',
  styleUrls: ['./pokemon-info-left.component.scss']
})
export class PokemonInfoLeftComponent implements OnInit, OnDestroy {

  moves:any[] = []
  subscription: Subscription;

  constructor(private searchService: SearchService, private router: Router) {
    this.subscription = this.searchService.newPokemonSearched$.subscribe(
      (pokemonData)=>{
        this.moves = pokemonData.moves
        console.log(this.moves)

      },
    )
   }

   public navigateToAttackInfo(url: String){
     let splittedUrl = url.split("/");
      let moveID = splittedUrl[splittedUrl.length - 2];
    console.log(moveID)
    this.router.navigateByUrl("/attack/" + moveID + '/desc');

   }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
