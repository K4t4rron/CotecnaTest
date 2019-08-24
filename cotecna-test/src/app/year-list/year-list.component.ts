import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-year-list',
  templateUrl: './year-list.component.html',
  styleUrls: ['./year-list.component.css']
})
export class YearListComponent implements OnInit {
  @Output() change = new EventEmitter();
  public yearsArr;
  selectedYear;
  constructor() {
    let selectedYear = moment().year();
   }

  ngOnInit() {
    this.selectedYear = moment().year();
    this.yearsArr =this.fillYears(this.selectedYear - 3);
  }

  private fillYears(year:number){
    return Array(6).fill(null).map((item,index)=> year ++ );
  }

}
