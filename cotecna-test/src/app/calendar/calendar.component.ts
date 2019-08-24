import { Component, OnInit, Input } from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  selectedMonth:number;
  selectedYear:number;
  date;
  public daysArr;
  constructor() { }

  ngOnInit() {
    this.selectedMonth= moment().month();;
    this.selectedYear = moment().year();
    this.fillCalendar();
  }

  public createCalendar(month) {
    let firstDay = moment(month).startOf('M');
    let days = Array.apply(null, { length: month.daysInMonth() })
      .map(Number.call, Number)
      .map(n => {
        return moment(firstDay).add(n, 'd');
      });

    for (let n = 0; n < firstDay.weekday(); n++) {
      days.unshift(null);
    }
    return days;
  }

  public nextMonth() {
    this.date.add(1, 'M');
    this.daysArr = this.createCalendar(this.date);
  }

  public previousMonth() {
    this.date.subtract(1, 'M');
    this.daysArr = this.createCalendar(this.date);
  }

  
  onMonthChange(event){
    this.selectedMonth= event.target.value;
    this.fillCalendar();
    
  }

  onYearChange(event){
    this.selectedYear = event.target.value;
    this.fillCalendar();
    
  }

  public todayCheck(day) {
    if (!day) {
      return false;
    }
    return moment().format('L') === day.format('L');
  }

  private fillCalendar(){
    this.date = moment().year(this.selectedYear).month(this.selectedMonth);
    this.daysArr = this.createCalendar(this.date);
  }

}
