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
        $(citySelector + " .card-temp").text(data.Temperature);
        var htmlRes =
            '<p>' + data.Date + '</p>' +
            '<p> Humidity: ' + data.Humidity + '</p>' +
            '<p> Pressure: ' + data.Pressure + '</p>';
        $(citySelector + " .card-info").append(htmlRes);
    }

});