using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CotecnaApi.Managers;
using Microsoft.AspNetCore.Mvc;

namespace CotecnaApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WeatherController : ControllerBase
    {
        private IWeatherManager _manager;
        public WeatherController(IWeatherManager weatherManager)
        {
            _manager = weatherManager;
        }
        // GET api/values
        [HttpGet]
        public async Task<ActionResult<WeatherResponse>> Get()
        {
            return await _manager.GetWeather();
        }

        [HttpGet]
        [Route("{date}")]
        public async Task<JsonResult> GetWeatherDay(string date)
        {

            DateTime dateValue;
           
            if (DateTime.TryParse(date, out dateValue))
            {
                var weather =  await _manager.GetWeather();

                var result = weather.list.FirstOrDefault(x => DateTime.Parse(x.dt_txt).ToShortDateString() == dateValue.ToShortDateString());
                if (result != null)
                {
                    string response = $"{result.weather[0].description} ({Math.Round(result.main.temp)} ºC)";
                    return new JsonResult(response);
                }
                return new JsonResult(string.Empty);

            }
            else
            {
                return new JsonResult(string.Empty);
            }



        }


    }
}
