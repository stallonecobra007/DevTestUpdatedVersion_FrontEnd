import { Component, OnInit } from '@angular/core';
import { StatisticsService } from './statistics.service';

@Component({
  selector: 'statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  // values: string = "1, 2, 3, 4, 5, 6, 7, 8, 13, 13";

  constructor(private statsService: StatisticsService) { }

  ngOnInit() {
    // this.statsService.getMode(this.values).subscribe(
    //   data => console.log(data)
    // );
  }

}
