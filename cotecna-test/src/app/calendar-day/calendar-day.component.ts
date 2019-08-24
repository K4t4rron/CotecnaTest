import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  styleUrls: ['./calendar-day.component.css']
})
export class CalendarDayComponent implements OnInit {
  @Input('selected-day') day;
  wheatherMessage='';
  
  constructor() { }
  
  ngOnInit() {
    
    console.log("MES A  MOSTRAR: ", this.day)
    if (this.IsCurrentMonth()){
      
      this.wheatherMessage = "calor";
    }

  }

  IsCurrentMonth()
  {
    if (!this.day) return false;
    let actualmonth = moment().month();
    let actualyear = moment().year();

    return ((this.day.month() === actualmonth) && (this.day.year() === actualyear) );
    
  }

}
