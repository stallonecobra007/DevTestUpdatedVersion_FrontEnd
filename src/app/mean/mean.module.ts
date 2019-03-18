import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { MeanComponent } from './mean.component';

const routes: Routes = [
  { path:'mean', component: MeanComponent },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
  ],
  exports: [
    RouterModule,
  ],
  declarations: [
    MeanComponent,
  ]
})
export class MeanModule { }
