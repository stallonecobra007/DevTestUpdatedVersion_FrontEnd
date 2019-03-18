import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MeanModule } from '../mean/mean.module';
import { MedianModule } from '../median/median.module';
import { ModeModule } from '../mode/mode.module';
import { HomeModule } from '../home/home.module';

const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch: 'full' },
  { path:'**', redirectTo:'home', pathMatch: 'full' }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    MeanModule,
    MedianModule,
    ModeModule,
    HomeModule,
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModuleTest { }
