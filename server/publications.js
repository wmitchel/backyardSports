Meteor.publish('upcomingGames', function(today){
	return Games.find({"date" : { $gte : today }});
});

Meteor.publish('userGames', function(id){
	return Games.find({ "attendees" : id});
});

Meteor.publish("comments", function(id) {
	return Comments.find({gameId: id});
});

Meteor.publish("notifications", function(id) {
   return Notifications.find({recieverUsername: id});
});

Meteor.publish("allGames", function(){
    return Games.find();
});
