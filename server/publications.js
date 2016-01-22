Meteor.publish('upcomingGames', function(today){
	return Games.find({"date" : { $gte : today }});
});

Meteor.publish('userGames', function(id){
	return Games.find({ "attendees" : id});
});

// Meteor.publish('gameDetail', function(id){
// 	let gameDetail = [
// 		Games.findOne({_id: id}),
// 		Comments.find({gameId: id})
// 	];
// 	if ( gameDetail ) {
// 		return gameDetail;
// 	};
// });

Meteor.publish("comments", function(id) {
	return Comments.find({gameId: id});
})