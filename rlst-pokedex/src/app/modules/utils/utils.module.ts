import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { PokemonListComponent } from '../../components/ui/utils/listing/pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from '../../components/ui/utils/listing/pokemon-list/pokemon-card/pokemon-card.component';
import { PokemonInfoLeftComponent } from '../../components/ui/listing/pokemon-info-left/pokemon-info-left.component';
import { PokemonInfoRightComponent } from '../../components/ui/listing/pokemon-info-right/pokemon-info-right.component';

// Components
@NgModule({
    declarations: [  
        PokemonListComponent,
        PokemonCardComponent,
        PokemonInfoLeftComponent,
        PokemonInfoRightComponent,
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
  