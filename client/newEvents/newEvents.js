Template.newEvent.onRendered(function() {
		this.$('.datetimepicker').datetimepicker();

        var placeSearch, autocomplete;

        function initAutocomplete() {
            // Create the autocomplete object, restricting the search to geographical
            // location types.
            autocomplete = new google.maps.places.Autocomplete(
                /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')));

                // When the user selects an address from the dropdown, populate the address
                // fields in the form.
                autocomplete.addListener('place_changed', fillInAddress);
            }

            function fillInAddress() {
                // Get the place details from the autocomplete object.
                var place = autocomplete.getPlace();
                place = document.getElementById("autocomplete").value;
                searchAddress(place);
            }

            // Bias the autocomplete object to the user's geographical location,
            // as supplied by the browser's 'navigator.geolocation' object.
            // function geolocate() {
            //     if (navigator.geolocation) {
            //         navigator.geolocation.getCurrentPosition(function(position) {
            //             var geolocation = {
            //                 lat: position.coords.latitude,
            //                 lng: position.coords.longitude
            //             };
            //             var circle = new google.maps.Circle({
            //                 center: geolocation,
            //                 radius: position.coords.accuracy
            //             });
            //             autocomplete.setBounds(circle.getBounds());
            //         });
            //     }
            // }

            function searchAddress(addressInput) {
                  var geocoder = new google.maps.Geocoder();
                  geocoder.geocode({address: addressInput}, function(results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                      console.log(results);
                    } else {
                        //Warning Message
                        alert("The geocode was not successful for the following reason: " + status);
                    }
                })
            }

            $("#newEventForm").validate();
            initAutocomplete();
});

Template.newEvent.events({
	'submit #newEventForm' : function(e, t) {
		e.preventDefault();
		let temp = Meteor.users.findOne({_id: Meteor.userId()});
		let name = temp.username;

		var options = {
			title: t.find('#eventTitle').value,
			date: t.find('#eventDate').value,
			summary: t.find('#eventSummary').value,
			attendees: [name],
			sport: t.find('#eventSport').value,
            formattedAddress: t.find('#autocomplete').value
		};

		Meteor.call("newEvent", options);
		Router.go('viewEvents');
	}
});

Template.newEvent.helpers({
	options: function() {
		var options = [
				{label: "Soccer", value: "Soccer"},
				{label: "Baseball", value: "Baseball"},
				{label: "Basketball", value: "Basketball"},
				{label: "Football", value: "Football"},
				{label: "Tennis", value: "Tennis"},
				{label: "Hockey", value: "Hockey"},
				{label: "Volleyball", value: "Volleyball"},
				{label: "Lacrosse", value: "Lacrosse"},
				{label: "Cricket", value: "Cricket"},
				{label: "Curling", value: "Curling"},
				{label: "OtherBall", value: "OtherBall"}
			];
		return options;
	}
});
