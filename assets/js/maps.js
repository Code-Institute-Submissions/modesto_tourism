var map;

function initMap() {

  // The map, centered at yosemite 
  // var map = new google.maps.Map(
  //     document.getElementById('map'), {zoom: 4, center: yosemite });

  
  
  // Create a new StyledMapType object, passing it an array of styles,
  // and the name to be displayed on the map type control.
  var styledMapType = new google.maps.StyledMapType(
    [{
        "elementType": "geometry",
        "stylers": [{
          "color": "#ebe3cd"
        }]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#523735"
        }]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#f5f1e6"
        }]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#c9b2a6"
        }]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#dcd2be"
        }]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#ae9e90"
        }]
      },
      {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [{
          "color": "#dfd2ae"
        }]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
          "color": "#dfd2ae"
        }]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#93817c"
        }]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#a5b076"
        }]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#447530"
        }]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [{
          "color": "#f5f1e6"
        }]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
          "color": "#fdfcf8"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [{
          "color": "#f8c967"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#e9bc62"
        }]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [{
          "color": "#e98d58"
        }]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#db8555"
        }]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#806b63"
        }]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [{
          "color": "#dfd2ae"
        }]
      },
      {
        "featureType": "transit.line",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#8f7d77"
        }]
      },
      {
        "featureType": "transit.line",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#ebe3cd"
        }]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [{
          "color": "#dfd2ae"
        }]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#b9d3c2"
        }]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#92998d"
        }]
      }
    ], {
      name: 'Styled Map'
    });

  // Create a map object, and include the MapTypeId to add
  // to the map type control.
  
  var map = new google.maps.Map(document.getElementById('map'), {
    
    center: {
      lat: 37.744919,  
      lng: -119.586342,
    },
    zoom: 5,
    
    
    mapTypeControlOptions: {

      scaleControl: true,
      // disables fullscreen
      fullscreenControl: false,
      // disables street view
      streetViewControl: false,
      // disables map controls
      mapTypeControl: false,
      // Zoom Controls
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.TOP_RIGHT,
      },
      mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
        'styled_map'
      ],

    }
    
  });

   // Info Windows
   var bounds = new google.maps.LatLngBounds();
   // Multiple markers location, latitude, and longitude
   var markers = [
    ['Yosemite, CA', 37.744919, -119.586342],
    ['Hollywood,CA', 34.092808, -118.328659],
    ['Santa Cruz,CA', 36.974117,-122.030792],
    ['Joshua Tree,CA',34.135, -116.3152],
    ['Death Valley,CA',36.5673146, -117.1395761],
    ['Redwood,CA',41.213181, -124.004631]
];
                    
// Info window content
var infoWindowContent = [
    ['<div class="info_content">' +
    '<h3>Yosemite National Park</h3>' +
    '<p>First protected in 1864, Yosemite National Park is best known for its waterfalls. </p>' + '</div>'],
    ['<div class="info_content">' +
    '<h3>Hollywood, California</h3>' +
    '<p>Hollywood is a neighborhood in the central region of Los Angeles, California.</p>' +
    '</div>'],
    ['<div class="info_content">' +
    '<h3>Santa Cruz, California</h3>' +
    '<p>Santa Cruz is known for its moderate climate, natural environment, coastline, redwood forests, alternative community lifestyles, and socially liberal leanings.</p>' +
    '</div>'],
    ['<div class="info_content">' +
    '<h3>Joshua Tree National Park</h3>' +
    '<p>Two distinct desert ecosystems, the Mojave and the Colorado, come together in Joshua Tree National Park.</p>' +
    '</div>'],
    ['<div class="info_content">' +
    '<h3>Death Valley National Park</h3>' +
    '<p>Death Valley National Park is an American national park that straddles the California—Nevada border, east of the Sierra Nevada.</p>' +
    '</div>'],
    ['<div class="info_content">' +
    '<h3>Redwood National Park</h3>' +
    '<p>Most people know Redwood as home to the tallest trees on Earth. For thousands of years people have lived in this verdant landscape.</p>' +
    '</div>']
];
    
// Add multiple markers to map
var infoWindow = new google.maps.InfoWindow(), marker, i;

// Place each marker on the map  
for( i = 0; i < markers.length; i++ ) {
    var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
    bounds.extend(position);
    marker = new google.maps.Marker({
        position: position,
        map: map,
        title: markers[i][0]
    });
    
    // Add info window to marker    
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
            infoWindow.setContent(infoWindowContent[i][0]);
            infoWindow.open(map, marker,);
        }
    })(marker, i));

  
  // Center the map to fit all markers on the screen
  map.fitBounds(bounds);
}

// Set zoom level
// var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
//     this.setZoom(14);
//     google.maps.event.removeListener(boundsListener);
// });


// Load initialize function
// google.maps.event.addDomListener(window, 'load', initMap);
       
  // // The location of yosemite 
  // var yosemite  = {lat: 37.744919, lng:  -119.586342};
  // // The marker, positioned at yosemite 
  // var marker = new google.maps.Marker({position: yosemite , map: map,title: "Yosemite"});
    
  //    // The location of hollywood
  // var hollywood   = {lat: 34.092808, lng:  -118.328659};
  // // The marker, positioned at hollywood 
  // var marker = new google.maps.Marker({position: hollywood , map: map,title: "Hollywood"});
  
  //  // The location of santa cruz
  // var santacruz  = {lat: 36.974117, lng: -122.030792};
  // // The marker, positioned at santa cruz 
  // var marker = new google.maps.Marker({position: santacruz , map: map,title: "Santa Cruz"});
  
  //  // The location of joshua tree
  // var joshuatree  = {lat: 34.135, lng:-116.3152};
  // // The marker, positioned at joshua tree 
  // var marker = new google.maps.Marker({position: joshuatree , map: map, title: "Joshua Tree"});
  
  //  // The location of Death Valley
  // var DeathValley  = {lat: 36.5673146, lng:  -117.1395761};
  // // The marker, positioned at Death Valley 
  // var marker = new google.maps.Marker({position: DeathValley , map: map, title: "Death Valley"});
  
  //  // The location of Red Wood
  // var RedWood  = {lat: 41.213181, lng:  -124.004631};
  // // The marker, positioned at Red Wood 
  // var marker = new google.maps.Marker({position: RedWood , map: map, title: "Red Wood"});


  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');
  // Set Search to bottom
  
  // Autocomplete
  var card = document.getElementById('pac-card');
  var input = document.getElementById('pac-input');
  var types = document.getElementById('type-selector');
  var strictBounds = document.getElementById('strict-bounds-selector');

  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);

  var autocomplete = new google.maps.places.Autocomplete(input);

  // Bind the map's bounds (viewport) property to the autocomplete object,
  // so that the autocomplete requests use the current map bounds for the
  // bounds option in the request.
  autocomplete.bindTo('bounds', map);

  // Set the data fields to return when the user selects a place.
  autocomplete.setFields(
    ['address_components', 'geometry', 'icon', 'name']);

  var infowindow = new google.maps.InfoWindow();
  var infowindowContent = document.getElementById('infowindow-content');
  infowindow.setContent(infowindowContent);
  var marker = new google.maps.Marker({
    map: map,
    anchorPoint: new google.maps.Point(0, -29),
  });

  autocomplete.addListener('place_changed', function () {
    infowindow.close();
    marker.setVisible(false);
    var place = autocomplete.getPlace();
    if (!place.geometry) {
      // User entered the name of a Place that was not suggested and
      // pressed the Enter key, or the Place Details request failed.
      window.alert("No details available for input: '" + place.name + "'");
      return;
    }

    // If the place has a geometry, then present it on a map.
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17); // Why 17? Because it looks good.
    }
    marker.setPosition(place.geometry.location);
    marker.setVisible(true);

    var address = '';
    if (place.address_components) {
      address = [
        (place.address_components[0] && place.address_components[0].short_name || ''),
        (place.address_components[1] && place.address_components[1].short_name || ''),
        (place.address_components[2] && place.address_components[2].short_name || '')
      ].join(' ');
    }

    infowindowContent.children['place-icon'].src = place.icon;
    infowindowContent.children['place-name'].textContent = place.name;
    infowindowContent.children['place-address'].textContent = address;
    infowindow.open(map, marker);
  });

  // Sets a listener on a radio button to change the filter type on Places
  // Autocomplete.
  function setupClickListener(id, types) {
    var radioButton = document.getElementById(id);
    radioButton.addEventListener('click', function () {
      autocomplete.setTypes(types);
    });
  }

  setupClickListener('changetype-all', []);
  setupClickListener('changetype-address', ['address']);
  setupClickListener('changetype-establishment', ['establishment']);
  setupClickListener('changetype-geocode', ['geocode']);

  document.getElementById('use-strict-bounds')
    .addEventListener('click', function () {
      console.log('Checkbox clicked! New state=' + this.checked);
      autocomplete.setOptions({
        strictBounds: this.checked
      });
    });
}