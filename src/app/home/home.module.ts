import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path:'home', component: HomeComponent },
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
    HomeComponent,
  ]
})
export class HomeModule { }
