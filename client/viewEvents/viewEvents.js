Template.viewEvents.onCreated(function(){
	let date = new Date();
	this.subscribe('upcomingGames', date);
});

Template.viewEvents.helpers({
	events: function() {
		let games = Games.find({}, {sort: {'date' : -1}});
		return games;
	},
	viewingEvent: function() {
		return Session.get('viewingEvent');
	}
});

Template.viewEvents.events({
	"click .details": function(e){
		var buttonId = e.currentTarget.id;
		Session.set("detailId", buttonId);
		Session.set('viewingEvent', true);
	}
});

Template.registerHelper('formatDate', function(date) {
	return moment(date).format('ddd-MM-DD');
});

Template.registerHelper('formatDetail', function(date) {
	return moment(date).format('llll');
});

Template.dialog.helpers({
	userInEvent: function() {
		let detailSession = Session.get("detailId");
		let game = Games.findOne({_id: detailSession});
		let name = Meteor.user().username;
		if ($.inArray(name, game.attendees) > -1){
			return true;
		} else {
			return false;
		};
	},
	currentEvent: function() {
		let detailSession = Session.get("detailId");
		let events = Games.findOne({_id: detailSession});
		return events;
	},
	attendees: function() {
		let detailSession = Session.get("detailId");
		let events = Games.findOne({_id: detailSession});
		let attendeeId = events.attendees;

		return attendeeId;
	},
	comments: function() {
		let detailSession = Session.get("detailId");
		let comments = Comments.find({gameId: detailSession}, {sort: {'created' : -1}});
		return comments;
	}
});

Template.dialog.events({
	'submit #addCommentForm' : function(e, t) {
		e.preventDefault();
		//let foundUser = Meteor.users.findOne({_id: Meteor.userId()});
		let name = Meteor.user().username;
		let detailSession = Session.get("detailId");
		let today = new Date();

		let comment = {
			gameId: detailSession,
			username: name,
			text: t.find('#commentText').value,
			created: today
		};
		Meteor.call("newComment", comment);
	},
	'click .closeDialog': function(event, template){
		Session.set('viewingEvent', null);
	},
	"click .join": function(e) {
		var buttonId = e.currentTarget.id;
		Meteor.call("joinEvent", buttonId);
	},
	"click .leave": function(e) {
		let buttonId = e.currentTarget.id;
		Meteor.call("leaveEvent", buttonId);
	}
});

Template.dialog.onCreated(function(){
	let id = Session.get("detailId");
	// this.subscribe('gameDetail', id);
	this.subscribe('comments', id);
});