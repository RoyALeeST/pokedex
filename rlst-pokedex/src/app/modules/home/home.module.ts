import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
  // External
  import { RouterModule } from '@angular/router';
  import { FormsModule } from '@angular/forms';

  // Custom
  import { HomeRoutingModule } from '../../router/home/home-routing.module';

// Components
@NgModule({
  declarations: [  
    
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
  ]
})
export class HomeModule { }
