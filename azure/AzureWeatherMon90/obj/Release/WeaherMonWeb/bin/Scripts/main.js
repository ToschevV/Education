$(document).ready(function(){

    getWheatherByCity("Kazan");
    getWheatherByCity("Mosсow");

    function getWheatherByCity(city) {
        $.ajax({
            url: '/api/values/?city='+city,
            type: 'GET',
            datatype: 'json',
            success: function (data) {
                fillWheather(data, "#"+city);
            },
            error: function (error) {
                console.log(error);
            }
        });
    }

    function fillWheather(data, citySelector)
    {
        var conditionHtml = weatherCondition(data.WeatherId);
        $(citySelector + " .card-temp").text(data.Temperature);
        var htmlRes =
            '<p>' + data.Date + '</p>' +
            '<p> Humidity: ' + data.Humidity + '</p>' +
            '<p> Pressure: ' + data.Pressure + '</p>' +
            '<p> Weather condition : ' + data.WeatherCondition + '</p>';
        $(citySelector + " .card-info").append(htmlRes);
        $(citySelector + " .cloud-group").append(conditionHtml);
    }

    function weatherCondition(weatherconditionid)
    {
        var result;
        var rank = weatherconditionid.toString()[0];
        rank == "8" ? weatherconditionid : rank; 
        switch (rank)
        {
            case "2", "3", "5":
                result = ' <div class="rain-group">' +
                    '<span class="icon-cloud rain">' +
                    '</span ></div >';
                break;
            case "800":
                result = '<div class="sun-group">' +
                    '<span class="icon-cloud sun"></span>' +
                    '<span class="icon-cloud sunshine">' +
                    '</span ></div>';
                break;
        }
        return result;
    }

});