    var map;

    //Stores markers in an array
    var markers = [];

    // ====================Object Data of Locations to Show on the Map====================
    var locations = [{
          // Restaurants
          country: 'US',
          type: 'Restaurant',
          name: 'Barkin Dog Grill',
          lat: 37.640971,
          lng: -120.998767,
          iconCustom: './assets/images/restaurant-icon.png'
        },
        {
          country: 'US',
          type: 'Restaurant',
          name: 'Bauhaus 209',
          lat: 37.640730,
          lng: -121.002430,
          iconCustom: './assets/images/restaurant-icon.png'
        },
        {
          country: 'US',
          type: 'Restaurant',
          name: 'BJs Restaurant & Brewhouse',
          lat: 37.251190,
          lng: -121.863730,
          iconCustom: './assets/images/restaurant-icon.png'
        },
        {
          country: 'US',
          type: 'Restaurant',
          name: 'Firkin & Fox',
          lat: 37.6404658,
          lng: -121.000407,
          iconCustom: './assets/images/restaurant-icon.png'
        },


        // Accommodations
        {
          country: 'US',
          type: 'Hotel',
          name: 'Apex Inn',
          lat: 37.6385712,
          lng: -120.9577713,
          iconCustom: './assets/images/hotel-icon.png'
        },
        {
          country: 'US',
          type: 'Hotel',
          name: 'Best Western Palm Court Inn',
          lat: 37.6651025,
          lng: -121.0298634,
          iconCustom: './assets/images/hotel-icon.png'
        },
        {
          country: 'US',
          type: 'Hotel',
          name: 'Clarion Hotel And Conference Center',
          lat: 37.6692112,
          lng: -121.0365617,
          iconCustom: './assets/images/hotel-icon.png'
        },
        {
          country: 'US',
          type: 'Hotel',
          name: 'Double Tree Hotel Modesto',
          lat: 37.6417343,
          lng: -121.0050007,
          iconCustom: './assets/images/hotel-icon.png'
        },

        // Attractions
        {
          country: 'US',
          type: 'Attractions',
          name: 'Vintage Fair Mall',
          lat: 37.688736,
          lng: -121.054026,
          iconCustom: './assets/images/tourist-attraction-icon.png'
        },
        {
          country: 'US',
          type: 'Attractions',
          name: 'Castle Air Museum',
          lat: 37.3648313,
          lng: -120.5800975,
          iconCustom: './assets/images/tourist-attraction-icon.png'
        },

        {
          country: 'US',
          type: 'Attractions',
          name: 'McHenry Mansion',
          lat: 37.6436578,
          lng: -120.9967008,
          iconCustom: './assets/images/tourist-attraction-icon.png'
        },

        {
          country: 'US',
          type: 'Attractions',
          name: 'Lucas Plaza Statue',
          lat: 37.6454414,
          lng: -120.9956372,
          iconCustom: './assets/images/tourist-attraction-icon.png'
        },

        // Styles Map
         [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ebe3cd"
              }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#523735"
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#f5f1e6"
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#c9b2a6"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#dcd2be"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#ae9e90"
              }
            ]
          },
          {
            "featureType": "landscape.natural",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dfd2ae"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dfd2ae"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#93817c"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#a5b076"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#447530"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f5f1e6"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#fdfcf8"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f8c967"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#e9bc62"
              }
            ]
          },
          {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e98d58"
              }
            ]
          },
          {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#db8555"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#806b63"
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dfd2ae"
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#8f7d77"
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#ebe3cd"
              }
            ]
          },
          {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dfd2ae"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#b9d3c2"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#92998d"
              }
            ]
          }
        ],

        // Initiates Map
        function initMap() {
          var map = new google.maps.Map(document.getElementById('map'), {
            center: {
              lat: 37.639095,
              lng: -120.996880,
            },
            zoom: 13,
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
              position: google.maps.ControlPosition.TOP_RIGHT
            },

          });

          var card = document.getElementById('pac-card');
          var input = document.getElementById('pac-input');
          var types = document.getElementById('type-selector');
          var strictBounds = document.getElementById('strict-bounds-selector');

          map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(card);

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
            anchorPoint: new google.maps.Point(0, -29)
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
          // setupClickListener('changetype-geocode', ['geocode']);

          document.getElementById('use-strict-bounds')
            .addEventListener('click', function () {
              console.log('Checkbox clicked! New state=' + this.checked);
              autocomplete.setOptions({
                strictBounds: this.checked
              });
            });  
          }];