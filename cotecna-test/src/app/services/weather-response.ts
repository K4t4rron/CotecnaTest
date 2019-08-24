export class WeatherResponse{
      
      main: {
        temp: number,
        pressure: number,
        humidity: number,
        temp_min: number,
        temp_max: number
      }
      weather : Weather[];

}

export class Weather 
{
      id: number;
      main: string;
      description: string;
      icon: string;
}
