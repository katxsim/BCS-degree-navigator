import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import {userCourses} from "../collections/userCourses"

Meteor.methods({
    
 'updateUserOnAddCourse': function(user){
    userCourses.update({ "_id": user._id }, user);
},

'updateUserOnDeleteCourse': function(user, course){
    delete user.courses[course.dept + course.num]
    userCourses.update({ "_id": user._id }, user);
}
    
    });