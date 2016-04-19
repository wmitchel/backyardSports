Games = new Mongo.Collection('games');
Comments = new Mongo.Collection('comments');
Notifications = new Mongo.Collection('notifications');

var Schemas = {};
Schemas.Game = new SimpleSchema({
	title: {
		type: String,
		label: "Title",
		max: 200
	},
	date: {
		type: Date,
		label: "Day of the Event"
	},
	summary: {
		type: String,
		label: "Brief summary",
		optional: true,
		max: 1000
	},
	createdAt: {
	    type: Date,
	    denyUpdate: true,
		autoValue: function() {
		  if (this.isInsert) {
		    return new Date;
		  } else if (this.isUpsert) {
		    return {$setOnInsert: new Date};
		  } else {
		    this.unset();  // Prevent user from supplying their own value
		  }
		}
	},
	owner: { //Meteor UserID
		type: String,
		denyUpdate: true,
		autoValue: function() {
			if ( this.isInsert ) {
				return Meteor.userId();
			}
		}
	},
	attendees: {
		type: [ String ],
		label: "User IDs attending",
		minCount: 0,
		optional: true
	},
	sport: {
		type: String,
	},
	formattedAddress: {
		type: String,
		optional: true
	},
    location: {
        type: String,
        label: "Google Places ID",
        optional:true
    }
});

Games.attachSchema(Schemas.Game);

Meteor.users.deny({
  update: function() {
    return true;
  }
});
