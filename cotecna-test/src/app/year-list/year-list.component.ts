import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-year-list',
  templateUrl: './year-list.component.html',
  styleUrls: ['./year-list.component.css']
})
export class YearListComponent implements OnInit {
  public yearsArr;
  constructor() {
    
   }

  ngOnInit() {
    this.yearsArr = this.fillYears(moment().year()-3);
  }

  private fillYears(year){
    return Array(6).fill(null).map((item,index)=> year ++ );
  }

}
