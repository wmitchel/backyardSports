Template.viewEvents.helpers({
	events: function() {
		return Games.find();
	}
});

Template.viewEvents.events({
	 "click .join": function(e) {
		var buttonId = e.currentTarget.id;
		let temp = Meteor.users.findOne({_id: Meteor.userId()});
		let name = temp.username;
		console.log(temp.username);
		console.log(temp);

		Games.update( buttonId, { $addToSet : { attendees : name}} );
	},
	"click .details": function(e){
		var buttonId = e.currentTarget.id;
		Session.set("detailId", buttonId);
		Router.go('/eventDetails');
	}
});