import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
  // External
  import { RouterModule } from '@angular/router';
  import { FormsModule } from '@angular/forms';

  // Custom
  import { AttackRoutingModule } from '../../router/attack/attack-routing.module';
  import { AttackComponent } from '../../components/ui/attack/attack.component';
  import { AttackDescriptionComponent } from '../../components/ui/attack/attack-description/attack-description.component';
  import { UtilsModule } from '../utils/utils.module';

// Components
@NgModule({
  declarations: [  
    AttackComponent,
    AttackDescriptionComponent,
  ],
  imports: [
    AttackRoutingModule,
    CommonModule,
    FormsModule,
    RouterModule,
    UtilsModule,
  ],
  exports: [
    AttackComponent,
    AttackDescriptionComponent,
  ]
})
export class AttackModule { }
