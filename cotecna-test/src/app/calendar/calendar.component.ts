import { Component, OnInit, Input } from '@angular/core';
import { WeatherResponse, Weather } from  '../services/weather-response';
import { WheatherServiceService } from './../services/wheather-service.service';

import * as moment from 'moment';

@Component({
  selector: 'appcalendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  selectedMonth:number;
  selectedYear:number;
  date;
  tempDays:WeatherResponse;

  public daysArr;
  constructor(private service: WheatherServiceService) { }

  ngOnInit() {
    this.selectedMonth= moment().month();;
    this.selectedYear = moment().year();
    this.fillCalendar();
     
  }

  public createCalendar(month) {
    let firstDay = moment(month).startOf('M');
    let lastDay = moment(month).endOf('M');
    let days = Array.apply(null, { length: month.daysInMonth() })
      .map(Number.call, Number)
      .map(n => {
        
        return moment(firstDay).add(n, 'd')
      });
   
    for (let n = 0; n < firstDay.weekday(); n++) {

        days.unshift(moment(firstDay).subtract((n+1),'d'));
    }
    
    let i=0;
    for (let n=lastDay.weekday()+1; n<7; n++ )
    {
       days.push(moment(lastDay).add(i++,'d'));
    }
    
    return days;
  }

  validateMessage(day){

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
  public isThisMonth(day)
  {
    if (!day) {
      return false;
    }
    return day.month()== this.selectedMonth && day.year()==this.selectedYear;
  }

  private fillCalendar(){
    this.date = moment().year(this.selectedYear).month(this.selectedMonth);
    let tempArray =this.createCalendar(this.date); 
    //this.daysArr = tempArray.map(function(item){return item.day;});
    this.daysArr = this.createCalendar(this.date); 
  }

}
