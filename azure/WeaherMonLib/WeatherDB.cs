namespace WeaherMonLib
{
    using Microsoft.WindowsAzure.Storage;
    using Microsoft.WindowsAzure.Storage.Table;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using WeaherMonLib.Models;

    public static class WeatherDB
    {
        static CloudStorageAccount CloudStorageAccount;
        static CloudTableClient CloudTable;
        public static CloudTable Table;

        public static DateTime CurrentDateTime
        {
            get { return TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, TimeZoneInfo.CreateCustomTimeZone("Msk", TimeSpan.FromHours(3), "Msk", "Msk")); }
        }

        /// <summary>
        /// Initialize a new instance of <see cref="WeatherDB"/> class
        /// </summary>
        static WeatherDB()
        {
            CloudStorageAccount = CloudStorageAccount.Parse(Config.DBConnectionString);
            CloudTable = CloudStorageAccount.CreateCloudTableClient();
            Table = CloudTable.GetTableReference(Config.TableName);
            Table.CreateIfNotExists();
        }

        /// <summary>
        /// Create record in Database
        /// </summary>
        /// <param name="type">Type of measure</param>
        /// <param name="measureValue">Value of measure</param>
        /// <param name="city">City of measure</param>
        public static async void CreateRecord(MeasureType type, double measureValue, WeatherModel model)
        {
            var record = new WeatherRecord(CurrentDateTime, measureValue, type, model);
            await Table.ExecuteAsync(TableOperation.Insert(record));
        }

        /// <summary>
        /// Get all data from database
        /// </summary>
        /// <returns>Array of weather records</returns>
        public static IEnumerable<WeatherRecord> GetData()
        {
            return WeatherDB.Table.ExecuteQuery(new TableQuery<WeatherRecord>());
        }

        /// <summary>
        /// Get last data by city
        /// </summary>
        /// <param name="city">The city</param>
        /// <returns>Array of weather records</returns>
        public static IEnumerable<WeatherRecord> GetLastDataByCity(string city)
        {
            var data = WeatherDB.Table.CreateQuery<WeatherRecord>()
                .Where(x => x.MeasureDate > DateTime.Now.AddMinutes(-10)
                    && x.City == city).ToList();
            return data
            .Select(x=>x)
            .OrderByDescending(x=>x.MeasureDate)
            .Take(4);
        }

        /// <summary>
        /// Get data within last 10 minutes
        /// </summary>
        /// <param name="type">Measure type</param>
        /// <param name="city">The city</param>
        /// <returns>Array of weather records</returns>
        public static WeatherRecord[] GetCurrentMeasureByCity(MeasureType type, string city)
        {
            var data = WeatherDB.Table.CreateQuery<WeatherRecord>()
                .Where(x => x.MeasureDate > DateTime.Now.AddMinutes(-10)
                    && x.MeasureType == type
                    && x.City == city).ToList();
            return data.OrderByDescending(y => y.MeasureDate)
                .ToArray();
        }
    }
}
