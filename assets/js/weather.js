window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];  window.myWidgetParam.push({id: 15,cityid: '5373900',appid: 'e5907fb3d33363041fad1e9d19229350',units: 'imperial',containerid: 'openweathermap-widget-15',  });  (function() {var script = document.createElement('script');script.async = true;script.charset = "utf-8";script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(script, s);  })();

// changes div class from right to center
$('.widget-right', 'weather-right--type1').toggleClass('widget-right', 'weather-right--type1');
