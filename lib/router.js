Router.onBeforeAction(function() {
	if (! Meteor.userId()) {
		this.render('landing');
	} else {
		this.next();
	}
});

Router.configure({ layoutTemplate: 'main'});
Router.route('/', {name: "landing"});
Router.route('/new', {name: "newEvent"});
Router.route('/view', {name: "viewEvents"});
Router.route('/update', {name: "update"});

Router.route('/userEvents', {name: "userEvents"});
Router.route('/eventDetails', {name: "eventDetail"});

Router.route('/login', {name: "login"});
Router.route('/register', {name: "register"});

Router.route('/places', function(){
	this.render('places');
});