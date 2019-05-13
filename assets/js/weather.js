const baseURL = "api.openweathermap.org/data/2.5/weather?q=Modesto&units=imperial&APPID=e5907fb3d33363041fad1e9d19229350";

function getData(type, cb) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };

    xhr.open("GET", baseURL + type + "/");
    xhr.send();
}

function writeToDocument(type) {
    var el = document.getElementById("data");
    el.innerHTML = "";

    getData(type, function(data) {
        data = data.results;

        data.forEach(function(item) {
            el.innerHTML += "<p>" + item.name + "</p>";
        });
    });
}


$().getJSON
{
      "api.openweathermap.org/data/2.5/weather?q=Modesto&units=imperial&APPID=e5907fb3d33363041fad1e9d19229350",

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