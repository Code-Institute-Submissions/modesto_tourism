var city = "Modesto";

$().getJSON
{
     "api.openweathermap.org/data/2.5/weather?q="
     + city +
     "&units=imperial&APPID=e5907fb3d33363041fad1e9d19229350",

    function(data){
        console.log(data);
        var icon = "https://openweathermap.org/img/w" + data.weather[0].icon + ".png";
        var temp = Math.floor(data.main.temp);
        var weather = data.weather[0].main;

        $(".icon").attr("src", icon);
        $(".weather").append(weather);
        $(".temp").append(temp);
    }
};