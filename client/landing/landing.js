Template.landing.onRendered(function() {
	Session.set({userPressedLogin: false});
	Session.set({userPressedRegister: false});
});

Template.landing.events({
	'click #loginSelector' : function(e) {
		Session.set({userPressedRegister: false});
		Session.set({userPressedLogin: true});
	},
	'click #registerSelector' : function(){
		Session.set({userPressedLogin: false});
		Session.set({userPressedRegister: true});
	},
	'submit #login-form' : function(e, t){
		e.preventDefault();
		// retrieve the input field values
		var username = t.find('#login-username').value , password = t.find('#login-password').value;

		Meteor.loginWithPassword(username, password, function(err){
			if (err){
				alert("Password may be incorrect");
				console.log(err);
			} else {
				Router.go("/view");
			}
			// The user has been logged in.
		});
	},
	'submit #register-form' : function(e, t) {
			e.preventDefault();

			var options = {
				username: t.find('#account-username').value,
				password: t.find('#account-password').value,
				profile: {
					fName: t.find('#fName').value,
					lName: t.find('#lName').value,
					city: t.find('#city').value
				}
			};

			Accounts.createUser(options, function(err){
					if (err) {
						// Inform the user that account creation failed
						alert("Account Creation Failed, Try Again.");
					} else {
						// Success. Account has been created and the user
						// has logged in successfully. 
						Router.go("/view");
					}

			});
	}
});

Template.landing.helpers({
	userPressedRegister: function(){
		let regPressed = Session.get("userPressedRegister");
		return regPressed;
	},
	userPressedLogin: function(){
		let logPressed = Session.get("userPressedLogin");
		return logPressed;
	}
})