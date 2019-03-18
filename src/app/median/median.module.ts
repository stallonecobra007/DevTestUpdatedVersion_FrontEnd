import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router'
import { MedianComponent } from './median.component';

const routes: Routes = [
  { path:'median', component: MedianComponent },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    RouterModule,
  ],
  declarations: [
    MedianComponent,
  ]
})
export class MedianModule { }
