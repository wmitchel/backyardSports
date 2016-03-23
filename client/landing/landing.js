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