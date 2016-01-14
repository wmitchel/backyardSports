Template.newEvent.onRendered(function() {
		this.$('.datetimepicker').datetimepicker();
});

Template.newEvent.events({

	'submit #newEventForm' : function(e, t) {
		e.preventDefault();
		let temp = Meteor.users.findOne({_id: Meteor.userId()});
		let name = temp.username;

		var options = {
			title: t.find('#eventTitle').value,
			date: t.find('#eventDate').value,
			summary: t.find('#eventSummary').value,
			attendees: [name],
			sport: t.find('#eventSport').value
		};

		Meteor.call("newEvent", options);
		Router.go('viewEvents');
	}
});

Template.newEvent.helpers({
	options: function() {
		var options = [
				{label: "Soccer", value: "Soccer"},
				{label: "Baseball", value: "Baseball"},
				{label: "Tennis", value: "Tennis"},
				{label: "Hockey", value: "Hockey"},
				{label: "Curling", value: "Curling"},
				{label: "Other", value: "Other"}
			];
		return options;
	}
});