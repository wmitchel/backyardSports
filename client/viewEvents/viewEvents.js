Template.viewEvents.onRendered( function() {

	var elements = $(document).find(".btn-join");
	var index = 0;
	console.log(elements);


		$(".btn-join").click(function(){
			var buttonId = $(this).attr('id');
			console.log(buttonId);
			Games.update({_id: buttonId},{ $push: { attendees: Meteor.userId()}});
		});
});



Template.viewEvents.helpers({
	events: function() {
		return Games.find();
	}
});



// mongo addToSet Command



Template.viewEvents.events({
	 //'click .btn.join': function(event) {
	 	//let currentUser = $(".btn.join").;
		//Get event ID
		//this.propertyID
		//Update
		//var currentUser = Meteor.userID();
		//Games.upsert({id: buttonId},{ $push: { attendees: currentUser}});
		// var array = Games.find({_id: buttonId}).attendees;
		// console.log(array);
		// array.push(Meteor.userId());
		// Games.update
	//}
});