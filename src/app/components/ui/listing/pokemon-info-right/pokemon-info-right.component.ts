import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchService } from 'src/app/services/search/search.service';
import {NgbProgressbarConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'rlst-pokemon-info-right',
  templateUrl: './pokemon-info-right.component.html',
  styleUrls: ['./pokemon-info-right.component.scss'],
  providers: [NgbProgressbarConfig] // add the NgbProgressbarConfig to the component providers

})
export class PokemonInfoRightComponent implements OnInit, OnDestroy {

  stats: any[] = []
  subscription: Subscription;

  constructor(private searchService: SearchService,
                      config: NgbProgressbarConfig) {
    this.searchService.newPokemonSearched$.subscribe((pokemonData)=>{
      this.stats = pokemonData.stats;
    })

    config.max = 255;
    config.striped = true;
    config.animated = true;
    config.type = 'success';
    config.height = '20px';
   }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
