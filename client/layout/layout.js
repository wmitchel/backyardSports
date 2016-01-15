Template.layout.events({
	'click a': function(){
		if ($(window).width() < 768) {
			Template.instance().$("#nav-button").click();
		};
	},
	'click .logout': function(event){
		//event.preventDefalut();
		Meteor.logout();
		Router.go('landing');
	}
});