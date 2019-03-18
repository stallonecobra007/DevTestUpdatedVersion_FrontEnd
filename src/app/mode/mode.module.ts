import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router'
import { ModeComponent } from './mode.component';

const routes: Routes = [
  { path:'mode', component: ModeComponent },
]

@NgModule({
  imports: [
    //CommonModule
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    RouterModule,
  ],
  declarations: [
    ModeComponent
  ]
})
export class ModeModule { }
