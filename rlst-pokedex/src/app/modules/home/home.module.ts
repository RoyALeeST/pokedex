import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
  // External
  import { RouterModule } from '@angular/router';
  import { FormsModule } from '@angular/forms';

  // Custom
  import { HomeRoutingModule } from '../../router/home/home-routing.module';
  import { HomeComponent } from '../../components/ui/home/home.component';
  import { SearchBarComponent } from '../../components/ui/home/search-bar/search-bar.component';
  import { UtilsModule } from '../../modules/utils/utils.module';

// Components
@NgModule({
  declarations: [  
    HomeComponent,
    SearchBarComponent,
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    FormsModule,
    RouterModule,
    UtilsModule,
  ],
  exports: [
    HomeComponent,
    SearchBarComponent,
  ]
})
export class HomeModule { }
