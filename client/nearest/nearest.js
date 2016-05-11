Template.nearest.onCreated(function(){
    Meteor.call('geocode');
    let date = moment().toDate();
    this.subscribe('upcomingGames', date);
    // Meteor.call('geocode');
});

Template.nearest.helpers({
    closestEvents: function() {
        if (Session.get('longitude') && Session.get('latitude')){
            let lng = Session.get('longitude');
            let lat = Session.get('latitude');
            let games = Games.find({
                location: {
                    $near: {
                        $geometry: {
                            type: "Point",
                            coordinates: [lng, lat]
                        },
                        $maxDistance: 1000
                    }
                }
            }).fetch();
            console.log(Session.get('longitude') + " Session Longitude Nearest");
            console.log(games);
            // let games = Meteor.call('gamesList', lat, lng);
            console.log(games);

            return games;
        }
    },
    viewingEvent: function() {
		return Session.get('viewingEvent');
	}
});

Template.nearest.events({
	"click .details": function(e){
        console.log("clicked nearest details");
		var buttonId = e.currentTarget.id;
		Session.set("detailId", buttonId);
		Session.set('viewingEvent', true);
	}
});

// db.games.find({location: {$near: {$geometry: {type: "Point",coordinates: [-72.9485199, 41.337582100000006]},$maxDistance: 1000}}})

// -72.9485199
