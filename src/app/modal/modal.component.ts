import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { StatisticsService } from '../statistics/statistics.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  modalRef: BsModalRef;
  statsType$: Observable<string>;
  result$: Observable<any>;

  constructor(private statisticsService: StatisticsService) { }

  ngOnInit() {
    this.statsType$ = this.statisticsService.updatedStatType$;
    this.result$ = this.statisticsService.updatedComputeValues$;
  }
}
