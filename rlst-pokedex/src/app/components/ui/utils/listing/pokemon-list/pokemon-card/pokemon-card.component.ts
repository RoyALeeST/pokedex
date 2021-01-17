import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rlst-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemonData: any;
  @Input() shiny: boolean;


  constructor() { }

  ngOnInit(): void {
  }


}
