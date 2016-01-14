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
	}
});