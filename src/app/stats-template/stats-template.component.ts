import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { ModalService } from '../modal/modal.service';
import { StatisticsService } from '../statistics/statistics.service';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'stats-template',
  templateUrl: './stats-template.component.html',
  styleUrls: ['./stats-template.component.css']
})
export class StatsTemplateComponent implements OnInit {

  statisticType: string;
  toolTipInfo: string;
  valueType: any;
  userValues: string;

  constructor(private statsServce: StatisticsService, private route: ActivatedRoute,
              public dialog: MatDialog, private modalService: ModalService ) { }

  ngOnInit() {
    this.route.url.subscribe(url => 
      {
        this.statisticType = url[0].path;
        this.toolTipInfo = 'Computing the ' + this.statisticType;
      });   
  }

  openDialog(){
    this.getStatistic();
  }

  onEnter(){
    this.getStatistic();
    
  }

  getStatistic(){
    this.statsServce.statisticsType = this.statisticType;

    this.statsServce.getStatistic(this.userValues).subscribe(
      data => {this.valueType = data;
        this.statsServce.statisticsType = this.valueType;
        this.statsServce.computedVal = data;
        this.statsServce.addStatistic(this.userValues, this.valueType).subscribe(
          data => data
        );

      }
    );  
    this.modalService.openDialog();
  }
}


