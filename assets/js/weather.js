      function weatherData(data) {
          var apiCall = "api.openweathermap.org/data/2.5/weather?q=Modesto&units=imperial&APPID=e5907fb3d33363041fad1e9d19229350";
          console.log(apiCall);
          var icon = "https://openweathermap.org/img/w" + data.weather[0].icon + ".png";
          var temp = Math.floor(data.main.temp);
          var weather = data.weather[0].main;
          $(".icon").attr("src", icon);
          $(".weather").append(weather);
          $(".temp").append(temp);
      }

      //      $.getJSON(apiCall, weatherCallback);
      //      var apiCall = "api.openweathermap.org/data/2.5/weather?q=Modesto&units=imperial&APPID=e5907fb3d33363041fad1e9d19229350";
      //       function weatherCallback(weatherData){
      //           var cityName = weatherData.name;
      //           var country = weatherData.sys.country;
      //           var description = weatherData.weather[0].description;
      //           var icon = "https://openweathermap.org/img/w" + data.weather[0].icon + ".png";
      //           $(".weatherResponse").append ("The weather in " + cityName + " " + country + "is currently" + description + icon);
      //       };

      // // "api.openweathermap.org/data/2.5/weather?q=Modesto&units=imperial&APPID=e5907fb3d33363041fad1e9d19229350",

      // function(data){
      //     console.log(data);
      //     var icon = "https://openweathermap.org/img/w" + data.weather[0].icon + ".png";
      //     var temp = Math.floor(data.main.temp);
      //     var weather = data.weather[0].main;

      //     $(".icon").attr("src", icon);
      //     $(".weather").append(weather);
      //     $(".temp").append(temp);
      // }