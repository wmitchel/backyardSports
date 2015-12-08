Template.login.events({
	'submit #login-form' : function(e, t){
		e.preventDefault();
		// retrieve the input field values
		var username = t.find('#login-username').value , password = t.find('#login-password').value;

		// Trim and validate your fields here.... 

		// If validation passes, supply the appropriate fields to the
		// Meteor.loginWithPassword() function.
		Meteor.loginWithPassword(username, password, function(err){
			if (err){
				alert(err.reason);
				//console.log(err);
			} else{
				Router.go("/");
			}
		// The user has been logged in.
		});
	}
});