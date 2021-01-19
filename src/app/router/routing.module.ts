import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Components

const routes: Routes = [
  { path: '', loadChildren: () => import('../modules/home/home.module').then(m => m.HomeModule)},
  { path: 'attack', loadChildren: () => import('../modules/attack/attack.module').then(m => m.AttackModule)},

  { path: '**', redirectTo: '/404', pathMatch: 'full'},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
