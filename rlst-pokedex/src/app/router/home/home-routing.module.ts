import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../../components/ui/home/home.component';
import { SearchBarComponent } from '../../components/ui/home/search-bar/search-bar.component';

import { UtilsModule } from '../../modules/utils/utils.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
];

@NgModule({
  declarations: [
    HomeComponent,
    SearchBarComponent,
  ],
  imports: [
    CommonModule,
    UtilsModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ],
})
export class HomeRoutingModule { }
