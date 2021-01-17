import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rlst-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  @Input() pokemonData;

  constructor() { }

  ngOnInit(): void {

  }

}
