Template.register.events({
	'submit #register-form' : function(e, t) {
		e.preventDefault();

		var options = {
			username: t.find('#account-username').value,
			password: t.find('#account-password').value,
			profile: {
				fName: t.find('#fName').value,
				lName: t.find('#lName').value
			}
		};

		Accounts.createUser(options, function(err){
				if (err) {
					// Inform the user that account creation failed
					console.log("Account Creation Failed");
					alert("Account Creation Failed, Try Again.");
				} else {
					// Success. Account has been created and the user
					// has logged in successfully. 
					Router.go("/view");
				}

			});

		//Router.go("/view");
	}
});