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
		let attendees = [];
		let temp;

		for (let i of attendeeId){
			
			console.log(i);
		}
		return attendeeId;
	}
});