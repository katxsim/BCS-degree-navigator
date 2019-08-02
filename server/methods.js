import { Meteor } from 'meteor/meteor';
import { userCourses } from '../imports/collections/userCourses';

Meteor.methods({
    // EFFECTS: gets itinerary
    updateUser: function (user) {
        userCourses.update({ "_id": user._id }, user);
        console.log("I'm here")
    }
});