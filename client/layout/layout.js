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

Template.nav.helpers({
    'notifications': function(){
        console.log("three");
        let foundUser = Meteor.users.findOne({_id: Meteor.userId()});
        let name = foundUser.username;
        console.log("four");
        return Notifications.find({ $and: [ { recieverUsername: name }, { read: false } ] });
    },
    'numNotifications': function(){
        console.log("One");
        let foundUser = Meteor.users.findOne({_id: Meteor.userId()});
        let name = foundUser.username;
        let numNotif = Notifications.find({ $and: [ { recieverUsername: name }, { read: false } ] }).count();
        console.log(numNotif);
        console.log("Two");
        if (isNaN(numNotif)){
            return "Not a number";
        } else {
            return numNotif;
        }
    },
    'viewingEventNotif': function() {
        return Session.get('viewingEventNotif');
    }
});

Template.nav.onCreated(function(){
    let foundUser = Meteor.users.findOne({_id: Meteor.userId()});
    let name = foundUser.username;
    this.subscribe("notifications", name);
});

Template.nav.events({
    'click #clearNotifications': function() {
        let foundUser = Meteor.users.findOne({_id: Meteor.userId()});
        let name = foundUser.username;
        Meteor.call("removeNotifications", name);
    },
    "click .notifPath": function(e){
        var buttonId = e.currentTarget.id;
        Session.set("detailId", buttonId);
        Session.set('viewingEventNotif', true);
    }
});