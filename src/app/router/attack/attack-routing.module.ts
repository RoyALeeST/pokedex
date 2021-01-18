import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AttackComponent } from '../../components/ui/attack/attack.component';

const routes: Routes = [
  { path: ':id/desc', component: AttackComponent },
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ],
})
export class AttackRoutingModule { }
