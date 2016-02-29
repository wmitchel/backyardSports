Meteor.startup(function(){
	Tracker.autorun(function(){
		if (navigator.geolocation){
			navigator.geolocation.getCurrentPosition(function(position){
				Session.set('longitude', position.coords.longitude);
				Session.set('latitude', position.coords.latitude);
				console.log(position.coords.longitude + ", " + position.coords.latitude);
			});
		} else {
			console.log("Still waiting on your location");
		}
	});
});