import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import {userCourses} from "../collections/userCourses"

Meteor.methods({
    addENGL112(course) {
        Courses.insert({
            "type": "core",
            "dept": "ENGL",
            "num": 112
            });
    },
    addCPSC121(course) {
    courses["CPSC121"] = {
        "type": "core",
        "dept": "CPSC",
        "num": 121,
    }
    },
    
    'addCPSC213': function(user){
        userCourses.update({ "_id": user._id }, user);
    }
    
    
    });