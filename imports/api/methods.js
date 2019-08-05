import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
// import { userCourses } from "../collections/userCourses"

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

        // else update! 
        Meteor.users.update({ "_id": user._id }, user);
    }

    // "addCoursesField": function (user) {
    //     if (!Meteor.userId()) {
    //         throw new Meteor.Error('not-authorized');
    //     }
    //     Meteor.users.update(user._id, {
    //         $set: {
    //             courses: []
    //         }
    //     });
    // }
});