Template.layout.events({
	'click .navbar-collapse > .navbar-nav > li > a': function(){
		Template.instance().$("#nav-button").click();
	},
	'click .logout': function(event){
		//event.preventDefalut();
		Meteor.logout();
		Router.go('landing');
	}
});