using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.WindowsAzure;
using Microsoft.WindowsAzure.Diagnostics;
using Microsoft.WindowsAzure.ServiceRuntime;
using Microsoft.WindowsAzure.Storage;
using Microsoft.Azure;
using OpenWeatherMap;
using WeaherMonLib;
using WeaherMonLib.Models;

namespace WeatherMonWorker
{
    public class WorkerRole : RoleEntryPoint
    {
        private readonly CancellationTokenSource cancellationTokenSource = new CancellationTokenSource();
        private readonly ManualResetEvent runCompleteEvent = new ManualResetEvent(false);
        private OpenWeatherMapClient weatherClient;
        private List<string> cities;
        private int numMinutes = 10;

        public override void Run()
        {
            Trace.TraceInformation("WeatherMonWorker is running");

            try
            {
                this.RunAsync(this.cancellationTokenSource.Token).Wait();
            }
            finally
            {
                this.runCompleteEvent.Set();
            }
        }

        public override bool OnStart()
        {
            // Set the maximum number of concurrent connections
            ServicePointManager.DefaultConnectionLimit = 12;
            cities = new List<string>();
            cities.Add(CloudConfigurationManager.GetSetting("Kazan"));
            cities.Add(CloudConfigurationManager.GetSetting("Mosсow"));
            weatherClient = new OpenWeatherMapClient(Config.OpenWeatherMapAPIKey);
            numMinutes = int.Parse(CloudConfigurationManager.GetSetting("NumMinutes"));

            // For information on handling configuration changes
            // see the MSDN topic at https://go.microsoft.com/fwlink/?LinkId=166357.

            bool result = base.OnStart();

            Trace.TraceInformation("WeatherMonWorker has been started");
            Trace.TraceInformation("Polling interval {0} mins", numMinutes);

            return result;
        }

        public override void OnStop()
        {
            Trace.TraceInformation("WeatherMonWorker is stopping");

            this.cancellationTokenSource.Cancel();
            this.runCompleteEvent.WaitOne();

            base.OnStop();

            Trace.TraceInformation("WeatherMonWorker has stopped");
        }

        private async Task RunAsync(CancellationToken cancellationToken)
        {
            while (!cancellationToken.IsCancellationRequested)
            {
                foreach (var city in cities)
                {
                    var weather = await weatherClient.CurrentWeather.GetByName(city, MetricSystem.Metric);
                    WeatherDB.CreateRecord(MeasureType.Temperature, weather.Temperature.Value, new WeatherModel { City = city, WeatherDescription = weather.Weather.Value });
                    WeatherDB.CreateRecord(MeasureType.Pressure, weather.Pressure.Value, new WeatherModel { City = city, WeatherDescription = weather.Weather.Value });
                    WeatherDB.CreateRecord(MeasureType.Humidity, weather.Humidity.Value, new WeatherModel { City = city, WeatherDescription = weather.Weather.Value });
                    WeatherDB.CreateRecord(MeasureType.WeatherCondition, weather.Weather.Number, new WeatherModel { City = city, WeatherDescription = weather.Weather.Value });
                }
                await Task.Delay(1000 * 60 * numMinutes);
            }
        }
    }
}
