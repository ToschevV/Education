namespace WeaherMonLib
{
    public static class Config
    {
        /// <summary>
        /// API key of wheather service
        /// </summary>
        public static string OpenWeatherMapAPIKey = "88597cb7a556c191905de0f52f23d7d6";

        /// <summary>
        /// Azure storage connection string
        /// </summary>
        public static string DBConnectionString = "DefaultEndpointsProtocol=https;AccountName=weathermon90;AccountKey=AjtUj/oxqRX0Es83Gqo/enjWRVqiXpuYVc0lRcZoH1GPz9iUYd/RfUfmIdNt4xGzsHWwPzggbA4pDV+q4XJSAw==;EndpointSuffix=core.windows.net";

        /// <summary>
        /// Database table name
        /// </summary>
        public static string TableName = "WeatherRecord";
    }
}
