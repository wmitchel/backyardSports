Template.viewEvents.helpers({
	events: function() {
		return Games.find();
	}
});



// mongo addToSet Command



Template.viewEvents.events({
	 "click .join": function(e) {
		var buttonId = e.currentTarget.id;
		//Session.set("joinId", buttonId);

		//var query = "{ " + buttonId + ": "
		Games.update( buttonId, { $addToSet : { attendees : Meteor.userId() }} );


		//Router.go('/updateDevice');
	}
});