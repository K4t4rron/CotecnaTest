import { WheatherServiceService } from './../services/wheather-service.service';
import { Component, OnInit, Input } from '@angular/core';
import { WeatherResponse, Weather } from  '../services/weather-response';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  styleUrls: ['./calendar-day.component.css']
})
export class CalendarDayComponent implements OnInit {
  @Input('selected-day') day;
  wheatherMessage: string;
  
  constructor(private service: WheatherServiceService) { }
  
  ngOnInit() {
    if (this.IsCurrentMonth()){
      this.loadWeather();
    }
  }

  private loadWeather(){
    return this.service.getWheather().subscribe((data:WeatherResponse) =>{
     this.wheatherMessage = data.weather[0].description + ' (' + data.main.temp  + ' ºC)';
     
    })
  }

  private IsCurrentMonth()
  {
    if (!this.day) return false;
    let actualmonth = moment().month();
    let actualyear = moment().year();

    return ((this.day.month() === actualmonth) && (this.day.year() === actualyear) );
 
  }
}
