Template.nearest.onCreated(function(){
    Meteor.call('geocode');
    let date = moment().toDate();
    this.subscribe('upcomingGames', date);
    // Meteor.call('geocode');
});

Template.nearest.helpers({
    closestEvents: function() {
        if (Session.get('longitude') && Session.get('latitude')){
            let games = Games.find({
                address: {
                    $near: {
                        $geometry: {
                            type: "Point",
                            coordinates: [Session.get('longitude'), Session.get('latitude')]
                        },
                        $maxDistance: 1000
                    }
                }
            }).fetch();
            console.log(Session.get('longitude'));
            console.log(games[0]);
            console.log("Games Posted");
            console.log(Games.find().fetch());
            return games;
        }
    }
});
