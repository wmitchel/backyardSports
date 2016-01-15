Games = new Mongo.Collection('games');
//Comments = new Mongo.Collection('comments');

var Schemas = {};
Schemas.Game = new SimpleSchema({
	title: {
		type: String,
		label: "Title",
		max: 200
	},
	date: {
		type: Date,
		label: "Day of the Event",
		autoform: {
			afFieldInput: {
				type: "bootstrap-datetimepicker"
			}
		}
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
		},
		autoform: {
			omit: true
		}
	},
	owner: { //Meteor UserID
		type: String,
		denyUpdate: true,
		autoValue: function() {
			if ( this.isInsert ) {
				return Meteor.userId();
			}
		},
		autoform: {
			omit: true
		}
	},

	attendees: {
		type: [ String ],
		label: "User IDs attending",
		minCount: 0,
		optional: true,
		autoform: {
		omit: true
		}
	},
	sport: {
		type: String,
	}
});

Games.attachSchema(Schemas.Game);

Meteor.users.deny({
  update: function() {
    return true;
  }
});