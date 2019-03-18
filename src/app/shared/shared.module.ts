import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsTemplateComponent } from '../stats-template/stats-template.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  
  MatCheckboxModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  MatButtonModule,
 } from '@angular/material';
 import { MatDialogModule } from '@angular/material/dialog';
 import { MatTooltipModule } from '@angular/material/tooltip';
 import { ModalComponent } from '../modal/modal.component';
 import { ModalModule } from 'ngx-bootstrap/modal';
 import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatDialogModule,
    MatTooltipModule,
    ModalModule,
    ModalModule.forRoot(),
    FormsModule,
  ],
  exports: [
    StatsTemplateComponent,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatDialogModule,
    MatTooltipModule,
    ModalComponent,
    FormsModule,
  ],
  declarations: [
    StatsTemplateComponent,
    ModalComponent,
  ],
  entryComponents: [
    ModalComponent,
  ]
})
export class SharedModule { }
