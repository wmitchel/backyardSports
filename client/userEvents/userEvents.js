Template.userEvents.helpers({
	events: function() {
		let temp = Meteor.users.findOne({_id: Meteor.userId()});
		let name = temp.username;

		var inGames = Games.find( { $or: [{ "attendees" : Meteor.userId() }, { "attendees" : name} ] });
		return inGames;
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
	},
	"click .details": function(e){
		var buttonId = e.currentTarget.id;
		Session.set("detailId", buttonId);
		Router.go('/eventDetails');
	}
});

