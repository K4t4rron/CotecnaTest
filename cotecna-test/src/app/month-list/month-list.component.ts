import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-month-list',
  templateUrl: './month-list.component.html',
  styleUrls: ['./month-list.component.css']
})
export class MonthListComponent implements OnInit {
  @Output() change = new EventEmitter();

  constructor() { }
  selectedMonth 
  ngOnInit() {
    this.selectedMonth = moment().month() + 1 ;
  }
  onChange() {
    this.change.emit(this.selectedMonth);;
  }

}
