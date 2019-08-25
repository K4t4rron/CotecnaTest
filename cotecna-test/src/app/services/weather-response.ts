export class WeatherResponse{
      
      list:dayWeather[];
}
export class dayWeather{
      dt:any;
      dt_txt: string;
      weather:Weather;
      main:Main;

}
export class Weather 
{
      id: number;
      main: string;
      description: string;
      icon: string;
}
export class Main {
      temp:number;
}
