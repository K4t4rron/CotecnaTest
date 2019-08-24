import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherResponse, Weather } from  './weather-response';

@Injectable({
  providedIn: 'root'
})
export class WheatherServiceService {
  private url ="http://api.openweathermap.org/data/2.5/weather?q=Barcelona,es&units=metric&APPID=0eb550209edec90a152b164d8ad2df33";
  constructor(private http: HttpClient) { }

  getWheather(){
    return this.http.get<WeatherResponse>(this.url);
  }
}
