Template.layout.events({
	'click .navbar-collapse > .navbar-nav > li > a': function(){
		Template.instance().$("#nav-button").click();
		console.log("Test");
	}
});

Accounts.ui.config({
	passwordSignupFields: "USERNAME_ONLY"
});