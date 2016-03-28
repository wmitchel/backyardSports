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
	newComment: function(comment, commenter) {
		Comments.insert(comment);
        let notif = {};
        notif.typeOf = 1;
        notif.commenterId = comment.username;
        notif.gameId = comment.gameId;
        notif.commenterId = commenter;
        Meteor.call('newNotification', notif);
	},
    newNotification: function(notif) {
        switch (notif.typeOf) {
            case 1:
                console.log("Comment");
                Meteor.call('newCommentNotification', notif);
                break;
            case 2:
                console.log("Player Joined");
                break;
            case 3:
                console.log("Game Created Near You With Your Interests Starting withing next day.");
                //Maybe check user's google calendar to see if schedule is free to play game.
                break;
            default:
                console.log("No Options");
                break;
        }
    },
    newCommentNotification: function (notif) {
        let sendingOut = Games.findOne({_id: notif.gameId});
        let currentUserId = Meteor.users.findOne({_id: Meteor.userId()});
        let currentUsername = currentUserId.username;
        if (sendingOut.attendees.length > 1) {
            let attendees = sendingOut.attendees;
            for (let person in attendees) {
                if (attendees[person] != currentUsername) {
                    let notification = {};
                    notification.commenterId = notif.commenterId;
                    notification.gameId = notif.gameId;
                    notification.message = notif.commenterId + " left a comment on a game you are in.";
                    notification.recieverUsername = attendees[person];
                    notification.read = false;
                    Notifications.insert(notification);
                }
            }
        }
    }
});