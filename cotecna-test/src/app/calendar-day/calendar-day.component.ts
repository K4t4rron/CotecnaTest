import { WheatherServiceService } from './../services/wheather-service.service';
import { Component, OnInit, Input } from '@angular/core';
import { WeatherResponse, Weather } from  '../services/weather-response';
import * as moment from 'moment';

@Component({
  selector: 'appcalendarday',
  templateUrl: './calendar-day.component.html',
  styleUrls: ['./calendar-day.component.css']
})
export class CalendarDayComponent implements OnInit {
  @Input('selected-day') day;
  wheatherMessage: string;
  result:WeatherResponse;
  
  constructor(private service: WheatherServiceService) { }
  
  ngOnInit() {
    if (this.isNextFiveDays(this.day)){
      
      this.loadWeatherApi();
    }
  }

  private loadWeather(){
    return this.service.getWheather().subscribe((data:WeatherResponse) =>{
    //console.log(data.list.map(function(item){return moment(item.dt_txt);}));
    let value = data.list.find(x=>moment(x.dt_txt).format('L') === this.day.format('L'))
    this.wheatherMessage='';
    if(value)       
     this.wheatherMessage = value.weather[0].description + ' (' + Math.round(value.main.temp) + 'ºC)';
     
    })
  }

  private loadWeatherApi(){
    
    return this.service.getWheatherApi(this.day.format('YYYY-MM-DD')).subscribe((data:string) =>{
    //console.log(data.list.map(function(item){return moment(item.dt_txt);}));
    console.log("HOLA",data);
     this.wheatherMessage = data;
    })
  }

  

  public isNextFiveDays(day){
    if(!day) return false;
    return moment(day.startOf('d')).isBetween(moment().startOf('day'), moment().add(4,'d').endOf('day').add(-1),null,'[]');
  }
}
