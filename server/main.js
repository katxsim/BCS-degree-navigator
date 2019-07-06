import { Meteor } from "meteor/meteor";
import { Courses } from "../imports/collections/courses";
import { Users } from "../imports/collections/users";
import _ from "lodash";
import { image, helpers } from "faker";

const shortid = require("shortid");

Meteor.startup(() => {
  // Check to see if data exists in the collection
  const numRecords = Courses.find({}).count();

  if (!numRecords) {
    // Generate courses 
    Courses.insert({ "type": "core", "dept": "CPSC", "num": 110, "grade": 99, "_id": shortid.generate() }),
      Courses.insert({ "type": "core", "dept": "CPSC", "num": 210, "grade": 99, "_id": shortid.generate() }),
      Courses.insert({ "type": "core", "dept": "ENGL", "num": 110, "grade": 99, "_id": shortid.generate() }),
      Courses.insert({ "type": "core", "dept": "MATH", "num": 200, "grade": 99, "_id": shortid.generate() }),
      Courses.insert({ "type": "bridging", "dept": "STAT", "num": 302, "grade": 99, "_id": shortid.generate() }),
      Courses.insert({ "type": "bridging", "dept": "STAT", "num": 305, "grade": 99, "_id": shortid.generate() }),
      Courses.insert({ "type": "bridging", "dept": "STAT", "num": 306, "grade": 99, "_id": shortid.generate() }),
      Courses.insert({ "type": "exemptions", "dept": "ENGL", "num": 110, "grade": 99, "_id": shortid.generate() }),
      Courses.insert({ "type": "exemptions", "dept": "STAT", "num": 200, "grade": 99, "_id": shortid.generate() }),
      Courses.insert({ "type": "exemptions", "dept": "MATH", "num": 180, "grade": 99, "_id": shortid.generate() }),
      Courses.insert({ "type": "replacements", "dept": "MATH", "num": 221, "grade": 99, "_id": shortid.generate() }),
      Courses.insert({ "type": "replacements", "dept": "MATH", "num": 200, "grade": 99, "_id": shortid.generate() }),
      Courses.insert({ "type": "replacements", "dept": "DSCI", "num": 100, "grade": 99, "_id": shortid.generate() })
  }

  Users.insert({ "email" : "hi@gmail.com", "password" : "hi", "firstName" : "Joe", "lastName" : "Blow"})


  Meteor.publish("courses", function () {
    return Courses.find({});
  });

  Meteor.publish("users", function() {
    return Users.find({});
  });

});
