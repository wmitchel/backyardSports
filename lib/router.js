Router.configure({ layoutTemplate: 'layout'});
Router.route('/', {name: "dashboard"});
Router.route('/new', {name: "newEvent"});
Router.route('/view', {name: "viewEvents"});
Router.route('/update', {name: "update"});

Router.route('/userEvents', {name: "userEvents"});

Router.route('/login', {name: "login"});
Router.route('/register', {name: "register"});