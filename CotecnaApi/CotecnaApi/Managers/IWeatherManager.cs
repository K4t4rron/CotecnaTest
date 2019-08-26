using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CotecnaApi.Managers
{
    public interface IWeatherManager
    {
        Task<WeatherResponse> GetWeather();
    }
}
