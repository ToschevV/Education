namespace WeaherMonLib
{
    using Microsoft.WindowsAzure.Storage.Table;
    using System;
    using WeaherMonLib.Models;

    /// <summary>
    /// Types of measurement
    /// </summary>
    public enum MeasureType { Temperature, Humidity, Pressure, WeatherCondition }

    public class WeatherRecord : TableEntity
    {
        /// <summary>
        /// When measure was done
        /// </summary>
        public DateTime MeasureDate { get; set; }

        /// <summary>
        /// City
        /// </summary>
        public string City { get; set; }

        /// <summary>
        /// Weather condition description
        /// </summary>
        public string WeatherDescription { get; set; }

        /// <summary>
        /// Store reading type as integer
        /// </summary>
        public int IntMeasureType { get; set; }

        /// <summary>
        /// Converting measure type in enum and vice verse
        /// </summary>
        public MeasureType MeasureType
        {
            get { return (MeasureType)IntMeasureType; }
            set { IntMeasureType = (int)value; }
        }

        /// <summary>
        /// Value of current measure type
        /// </summary>
        public double MeasureValue { get; set; }

        /// <summary>
        /// Initialize a new instance of <see cref="WeatherRecord"/> class
        /// </summary>
        public WeatherRecord() { }

        /// <summary>
        /// Initialize a new instanct of <see cref="WeatherRecord" class/>
        /// </summary>
        /// <param name="measureDate">Date of measurement</param>
        /// <param name="measureValue">The value of measurement</param>
        /// <param name="type">Type of measurement</param>
        /// <param name="ciy">City to show</param>
        public WeatherRecord(DateTime measureDate, double measureValue, MeasureType type, WeatherModel model)
        {
            this.MeasureDate = measureDate;
            this.MeasureValue = measureValue;
            this.MeasureType = type;
            this.City = model.City;
            this.WeatherDescription = model.WeatherDescription;

            //Set partition where our data will be stored
            PartitionKey = string.Format("{0}.{1}", measureDate.Year, measureDate.Month);
            RowKey = string.Format("{0}-{1}:{2}.{3}.{4}.{5}:{6}", model.City, type, measureDate.Year, measureDate.Month, measureDate.Day, measureDate.Hour, measureDate.Minute);
        }


    }
}
