Template.login.events({
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
	}
});