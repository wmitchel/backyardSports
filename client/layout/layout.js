Template.layout.events({
	'click a': function(){
		Template.instance().$("#nav-button").click();
	},
	'click .logout': function(event){
		//event.preventDefalut();
		Meteor.logout();
		Router.go('landing');
	}
});