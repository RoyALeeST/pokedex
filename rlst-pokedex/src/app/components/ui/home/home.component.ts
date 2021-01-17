import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pokemonData: any;
  constructor() { }

  ngOnInit(): void {
  }

  notifyOfPokemonFound(pokemonData: any){
    this.pokemonData = pokemonData
  }

}
