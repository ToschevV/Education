namespace WeaherMonWeb.Models
{
    /// <summary>
    /// View model for <see cref="WheatherRecord"/> class
    /// </summary>
    public class WeatherViewModel
    {
        /// <summary>
        /// Date of measure
        /// </summary>
        public string Date { get; set; }

        /// <summary>
        /// Temerature
        /// </summary>
        public double Temperature { get; set; }

        /// <summary>
        /// Pressure
        /// </summary>
        public double Pressure { get; set; }

        /// <summary>
        /// Humidity
        /// </summary>
        public double Humidity { get; set; }

        /// <summary>
        /// Weather id
        /// </summary>
        public double WeatherId { get; set; }

        /// <summary>
        /// Weather condition
        /// </summary>
        public string WeatherCondition { get; set; }
    }
}