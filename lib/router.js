Router.configure({ layoutTemplate: 'layout'});
Router.route('/', {name: "landing"});
Router.route('/new', {name: "newEvent"});
Router.route('/view', {name: "viewEvents"});