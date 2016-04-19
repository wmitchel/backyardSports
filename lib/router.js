Router.onBeforeAction(function() {
	if (! Meteor.userId()) {
		this.render('landing');
	} else {
		this.next();
	}
});

Router.configure({ layoutTemplate: 'main'});
Router.route('/', {name: "landing"});
Router.route('/new', {
	name: "newEvent",
	waitOn: function(){
		return [IRLibLoader.load('https://maps.googleapis.com/maps/api/js?key=AIzaSyAdjUAfeYiDtl8loiGxNcYwL4LD4CcSbdk&libraries=places')];
	}
});
Router.route('/view', {name: "viewEvents"});
Router.route('/update', {name: "update"});

Router.route('/userEvents', {name: "userEvents"});
Router.route('/eventDetails', {name: "eventDetail"});

Router.route('/login', {name: "login"});
Router.route('/register', {name: "register"});

Router.route('/places', {
	name: "places",
	waitOn: function(){
		return [IRLibLoader.load('https://maps.googleapis.com/maps/api/js?key=AIzaSyAdjUAfeYiDtl8loiGxNcYwL4LD4CcSbdk&libraries=places')];
	}
	//}function(){
	// this.render('places');
});