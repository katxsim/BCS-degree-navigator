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

  console.log(users)
  console.log(numRecords);

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
            { "num": 110, status: "incomplete" },
            { "num": "121", "status": "incomplete" },
            { "num": "210", "status": "incomplete" },
            { "num": "221", "status": "incomplete" },
            { "num": "213", "status": "incomplete" },
            { "num": "310", "status": "incomplete" },
            { "num": "313", "status": "incomplete" },
            { "num": "320", "status": "incomplete" }
          ],
          "ENGL": "incomplete",
          "MATH": "incomplete",
          "STAT": "incomplete",
          "COMM": "incomplete"
        },
        "elective": [0, 0], // elective[0] is 300 < num <400 completed
        "bridging": { "CPSC": 0, "OTHER": 0 },
        "replacements": [100, 100, 200] // list of min course levels that can be used to replace an exemption
      },
      "courses": [
        { "type": "core", "dept": "CPSC", "num": 110, "id": shortid.generate() },
        { "type": "core", "dept": "CPSC", "num": 210, "id": shortid.generate() },
        { "type": "core", "dept": "ENGL", "num": 110, "id": shortid.generate() },
        { "type": "core", "dept": "MATH", "num": 200, "id": shortid.generate() },
        { "type": "bridging", "dept": "STAT", "num": 302, "id": shortid.generate() },
        { "type": "bridging", "dept": "STAT", "num": 305, "id": shortid.generate() },
        { "type": "bridging", "dept": "STAT", "num": 306, "id": shortid.generate() },
        { "type": "exemptions", "dept": "ENGL", "num": 110, "id": shortid.generate() },
        { "type": "exemptions", "dept": "STAT", "num": 200, "id": shortid.generate() },
        { "type": "exemptions", "dept": "MATH", "num": 180, "id": shortid.generate() },
        { "type": "replacement", "dept": "MATH", "num": 221, "id": shortid.generate() },
        { "type": "replacement", "dept": "MATH", "num": 200, "id": shortid.generate() },
        { "type": "replacement", "dept": "DSCI", "num": 100, "id": shortid.generate() }
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
