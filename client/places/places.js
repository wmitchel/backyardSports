Template.places.onRendered(function(){
  //We use Tracker to re-render map
  //when a new marker is added
   Tracker.autorun(function(){
          initializeMap();
   });
});


//Global Function to initialize the map
initializeMap = function() {

	if (Session.get('longitude') && Session.get('latitude')){
		var map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: Session.get('latitude'), lng: Session.get('longitude')},
			zoom: 15,
		});
		var infoWindow = new google.maps.InfoWindow({map: map});
		var service = new google.maps.places.PlacesService(map);
		//console.log("Nice Prep work");
	} else {
		var map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: -34.397, lng: 150.644},
			zoom: 6
		});
		var infoWindow = new google.maps.InfoWindow({map: map});
		var service = new google.maps.places.PlacesService(map);

	  // Try HTML5 geolocation.
	  if (navigator.geolocation) {
	  	navigator.geolocation.getCurrentPosition(function(position) {
	  		var pos = {
	  			lat: position.coords.latitude,
	  			lng: position.coords.longitude
	  		};

	  		infoWindow.setPosition(pos);
	  		infoWindow.setContent('Location found.');
	  		map.setCenter(pos);
	  		Session.set('longitude', position.coords.longitude);
	  		Session.set('latitude', position.coords.longitude);
	  	}, function() {
	  		handleLocationError(true, infoWindow, map.getCenter());
	  	});
	  } else {
	    // Browser doesn't support Geolocation
	    handleLocationError(false, infoWindow, map.getCenter());
	  }
	};
};


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
	infoWindow.setPosition(pos);
	infoWindow.setContent(browserHasGeolocation ?
		'Error: The Geolocation service failed.' :
		'Error: Your browser doesn\'t support geolocation.');

};
