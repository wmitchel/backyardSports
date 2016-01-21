Meteor.methods({
	joinEvent: function(buttonId) {
		if (! Meteor.userId()) {
			throw new Meteor.Error("not-authorized");
		};
		let foundUser = Meteor.users.findOne({_id: Meteor.userId()});
		let name = foundUser.username;
		Games.update( buttonId, { $addToSet : { attendees : name}} );
	},
	newEvent: function(options) {
		if (! Meteor.userId()) {
			throw new Meteor.Error("not-authorized");
		};
		Games.insert(options);
	},
	leaveEvent: function(buttonId) {
		if (! Meteor.userId()) {
			throw new Meteor.Error("not-authorized");
		};
		let attendee = Meteor.userId();
		let foundUser = Meteor.users.findOne({_id: Meteor.userId()});
		let name = foundUser.username;
		Games.update({_id: buttonId}, {$pull : {attendees : name}});
	},
	newComment: function(comment) {
		Comments.insert(comment);
	}
});