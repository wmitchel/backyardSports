Template.eventDetail.helpers({
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
		let comments = Comments.find({gameId: detailSession});
		return comments;
	}
});

Template.eventDetail.events({
	'submit #addCommentForm' : function(e, t) {
		e.preventDefault();
		let foundUser = Meteor.users.findOne({_id: Meteor.userId()});
		let name = foundUser.username;
		let detailSession = Session.get("detailId");

		let comment = {
			gameId: detailSession,
			username: name,
			text: t.find('#commentText').value
		};
		let currentUserId = Meteor.userId();
		Meteor.call("newComment", comment, currentUserId);
	}
});