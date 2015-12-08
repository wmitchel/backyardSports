Template.userEvents.helpers({
	events: function() {
		//var buttonId = e.currentTarget.id;
		//Session.set("joinId", buttonId);

		//var query = "{ " + buttonId + ": "
		var inGames = Games.find({ "attendees" : Meteor.userId() });
		// for (var i = 0; i < inGames.length; i++) {
		// 	var temp = Meteor.users.find({_id : inGames.attendees[i]});
		// 	console.log(temp);
		// 	console.log("test");
		// 	inGames.attendees[i] = temp.username;

		// };
		return inGames;

		//Router.go('/updateDevice');
	},
	othersAttending: function() {
		var inGames = Games.find({ "attendees" : Meteor.userId() });

	}
});

Template.userEvents.events({
	 "click .leave": function(e) {
		var buttonId = e.currentTarget.id;
		var attendee = Meteor.userId();
		Games.update({_id: buttonId}, {$pull : {attendees : attendee}});
		//var inGames = Games.find({ "attendeed" : buttonId });
	}
});

