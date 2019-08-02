import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { userCourses } from "../collections/userCourses"

Meteor.methods({

    'updateUser': function (user) {
        if (!Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }
        userCourses.update({ "_id": user._id }, user);
    }

});