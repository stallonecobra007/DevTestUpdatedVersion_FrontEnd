import { Injectable } from '@angular/core';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalComponent } from './modal.component';
import { MatDialog } from '@angular/material';
import { StatisticsService } from '../statistics/statistics.service';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  modalRef: BsModalRef;
  statisticsType: string;
  computedVal: any;
  name: string;

  constructor(private modalService: BsModalService, public dialog: MatDialog,
              private statisticsService: StatisticsService) { }
  
  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent);
  }
}
