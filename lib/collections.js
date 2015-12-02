Games = new Mongo.Collection('games');

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
		autoValue: function(){ return this.userId },
		autoform: {
			omit: true
		}
	}
});

Games.attachSchema(Schemas.Game);