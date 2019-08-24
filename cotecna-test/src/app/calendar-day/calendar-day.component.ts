import { WheatherServiceService } from './../services/wheather-service.service';
import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  styleUrls: ['./calendar-day.component.css']
})
export class CalendarDayComponent implements OnInit {
  @Input('selected-day') day;
  wheatherMessage;
  result;
  private response?:any;
  constructor(private service: WheatherServiceService) { }
  
  ngOnInit() {
    
   
    if (this.IsCurrentMonth()){
      this.service.getWheather().subscribe(r=>{
       this.response = r;
      });
      console.log("respnse=", this.response);
      this.wheatherMessage='';
      if(this.response)
          this.wheatherMessage = this.response.weather[0].description + ' (' + this.response.main.temp + ' ºC)';
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
