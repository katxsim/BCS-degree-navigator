import { Meteor } from "meteor/meteor";
import { Courses } from "../imports/collections/courses";
import { Users } from "../imports/collections/users";
import _ from "lodash";

const shortid = require("shortid");

Meteor.startup(() => {

  // console.log(process.env.MONGO_URL);
  // process.env.MONGO_URL = "mongodb://m001-student:m001-mongodb-basics@cluster0-n7b3j.mongodb.net/bcsdn?retryWrites=true&w=majority"
  // Check to see if data exists in the collection
  const numRecords = Users.find().count();
  const users = Users.find().fetch();

  console.log("number of users: " + numRecords);

  if (numRecords == 0) {
    Users.insert({
      "email": "test1@gmail.com",
      "firstName": "Good",
      "lastName": "Student",
      "creditsEarned": 0,
      "requirements": {
        "core":
        {
          CPSC: [
            { "num": 110, "status": "incomplete" },
            { "num": 121, "status": "incomplete" },
            { "num": 210, "status": "incomplete" },
            { "num": 221, "status": "incomplete" },
            { "num": 213, "status": "incomplete" },
            { "num": 310, "status": "incomplete" },
            { "num": 313, "status": "incomplete" },
            { "num": 320, "status": "incomplete" }
          ],
          "ENGL": "incomplete",
          "MATH": "incomplete",
          "STAT": "incomplete",
          "COMM": "incomplete",
          "counter": 0
        },
        "elective": [0, 0], // elective[0] is 300 < num <400 completed
        "bridging": { "CPSC": 0, "OTHER": 0 },
        "replacements": [100, 100, 200] // list of min course levels that can be used to replace an exemption
      },
      "courses": [
        { "type": "core", "dept": "CPSC", "num": 110 },
        { "type": "core", "dept": "CPSC", "num": 121 },
        { "type": "core", "dept": "CPSC", "num": 210 },
        { "type": "core", "dept": "CPSC", "num": 221 },
        { "type": "core", "dept": "CPSC", "num": 213 },
        { "type": "core", "dept": "CPSC", "num": 310 },
        { "type": "core", "dept": "SCIE", "num": 300 },
        { "type": "electives", "consumed": false, "dept": "CPSC", "num": 316 },
        { "type": "electives", "consumed": false, "dept": "CPSC", "num": 319 },
        { "type": "electives", "consumed": false, "dept": "CPSC", "num": 436 },
        { "type": "bridging", "dept": "STAT", "num": 302 },
        { "type": "bridging", "dept": "STAT", "num": 305 },
        { "type": "bridging", "dept": "STAT", "num": 306 },
        { "type": "bridging", "dept": "CPSC", "num": 330 },
        { "type": "exemptions", "dept": "ENGL", "num": 110 },
        { "type": "exemptions", "dept": "STAT", "num": 200 },
        { "type": "exemptions", "dept": "MATH", "num": 180 },
        { "type": "replacement", "dept": "MATH", "num": 221 },
        { "type": "replacement", "dept": "MATH", "num": 200 },
        { "type": "replacement", "dept": "DSCI", "num": 100 }
      ] // end courses
    }) // end user; //)
  }

  Meteor.publish("courses", function () {
    return Courses.find({});
  });

  Meteor.publish("users", function () {
    // console.log(Users.find().fetch());
    return Users.find();
  });
});
