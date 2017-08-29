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
            var lastRecords = WeatherDB.GetLastDataByCity(city);
            var weather = new WeatherViewModel();

            foreach (var rec in lastRecords)
            {
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

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
