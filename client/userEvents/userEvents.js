Template.userEvents.onCreated(function(){
	let name = Meteor.user().username;
	this.subscribe('userGames', name);
});

Template.userEvents.helpers({
	events: function() {
		let name = Meteor.user().username;
		var inGames = Games.find( { $or: [{ "attendees" : Meteor.userId() }, { "attendees" : name} ] }, {sort: {'date' : -1}});
		return inGames;
	},
	viewingEvent: function() {
		return Session.get('viewingEvent');
	}
});

Template.userEvents.events({
	"click .details": function(e){
		var buttonId = e.currentTarget.id;
		Session.set("detailId", buttonId);
		Session.set('viewingEvent', true);
	}
});

