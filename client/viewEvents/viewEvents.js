Template.viewEvents.helpers({
	events: function() {
		let date = new Date();
		let games = Games.find({"date" : { $gte : date } });
		return games;
	}
});

Template.viewEvents.events({
	 "click .join": function(e) {
		var buttonId = e.currentTarget.id;
		Meteor.call("joinEvent", buttonId);
	},
	"click .details": function(e){
		var buttonId = e.currentTarget.id;
		Session.set("detailId", buttonId);
		Router.go('/eventDetails');
	}
});

Template.registerHelper('formatDate', function(date) {
	return moment(date).format('MM-DD-YYYY');
})