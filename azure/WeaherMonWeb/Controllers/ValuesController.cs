namespace WeaherMonWeb.Controllers
{
    using WeaherMonLib;
    using WeaherMonWeb.Models;
    using System.Web.Http;

    public class ValuesController : ApiController
    {
        // GET api/values
        public WeatherViewModel Get([FromUri] string city)
        {
            // TODO: Your web backend must not know about your db class, because in future you can change getting data from another service/db + for testing this method you have to design your class with dependencies via interfaces
            // so better to create something like IWeatherDataAccess and inside implementation of this interface use WeatherDB
            var lastRecords = WeatherDB.GetLastDataByCity(city);
            var weather = new WeatherViewModel();

            foreach (var rec in lastRecords)
            {
                // TODO: And you can put mapping logic from record to viewmodel inside this WeatherDataAccess class
                weather.Date = rec.MeasureDate.ToString("dd/MM/yyyy HH:mm:ss");
                weather.WeatherCondition = rec.WeatherDescription;
                weather.Temperature = rec.MeasureType == MeasureType.Temperature
                    ? rec.MeasureValue : weather.Temperature;
                weather.Pressure = rec.MeasureType == MeasureType.Pressure
                    ? rec.MeasureValue : weather.Pressure;
                weather.Humidity = rec.MeasureType == MeasureType.Humidity
                    ? rec.MeasureValue : weather.Humidity;
                weather.WeatherId = rec.MeasureType == MeasureType.WeatherCondition
                    ? rec.MeasureValue : weather.WeatherId;
            }

            return weather;
        }
    }
}
