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
    if (this.IsCurrentMonth()){
      this.wheatherMessage = this.day;
    }

  }

  IsCurrentMonth()
  {
     return moment().isSame(this.day, 'month');
  }

}
