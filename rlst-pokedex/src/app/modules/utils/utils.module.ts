import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { PokemonListComponent } from '../../components/ui/utils/listing/pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from '../../components/ui/utils/listing/pokemon-list/pokemon-card/pokemon-card.component';

// Components
@NgModule({
    declarations: [  
        PokemonListComponent,
        PokemonCardComponent,
    ],
    imports: [
      CommonModule,
      RouterModule,
      FormsModule,
    ],
    exports: [
      PokemonListComponent,
      PokemonCardComponent,
    ]
  })
  export class UtilsModule { }
  