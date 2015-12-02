Router.configure({ layoutTemplate: 'layout'});
Router.route('/', {name: "dashboard"});
Router.route('/new', {name: "newEvent"});
Router.route('/view', {name: "viewEvents"});