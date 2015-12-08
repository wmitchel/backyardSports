Template.newEvent.onRendered(function() {
		this.$('.datetimepicker').datetimepicker();

});

// Template.newEvent.events({

// 	'click #submitEvent': function() {
// 		let user = Meteor.userId();
// 		Games.upsert({_id: buttonId},{ $push: { attendees: Meteor.userId()}})

// 	}

// });