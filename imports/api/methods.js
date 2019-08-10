import { Meteor } from 'meteor/meteor';

Meteor.methods({

    'updateUser': function (user) {

        // if not logged in
        if (!Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
            alert("You need to sign in or sign up!")
        }

        // if not having any courses yet
        if (!Meteor.users.findOne({ "_id": this.userId }).hasOwnProperty("courses")) {
            Meteor.users.update(this.userId, {
                $set: {
                    courses: {}
                }
            })
        }

        Meteor.users.update({ "_id": user._id }, user);
    }
});