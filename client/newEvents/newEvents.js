Template.newEvent.onRendered(function() {
		this.$('.datetimepicker').datetimepicker();
});

Template.newEvent.events({

	'submit #newEventForm' : function(e, t) {
		e.preventDefault();

		var options = {
			title: t.find('#eventTitle').value,
			date: t.find('#eventDate').value,
			summary: t.find('#eventSummary').value,
			attendees: [Meteor.userId()],
			sport: t.find('#eventSport').value
		};

		Games.insert(options);
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