import { Meteor } from "meteor/meteor";
import { userCourses } from "../imports/collections/userCourses";
import _ from "lodash";

const shortid = require("shortid");

Meteor.startup(() => {
  // console.log(process.env.MONGO_URL);
  // process.env.MONGO_URL = "mongodb://m001-student:m001-mongodb-basics@cluster0-n7b3j.mongodb.net/bcsdn?retryWrites=true&w=majority"
  // Check to see if data exists in the collection
  const numRecords = userCourses.find().count();
  const users = userCourses.find().fetch();

  if (numRecords == 0) {
<<<<<<< HEAD
    Users.insert({
      email: "test1@gmail.com",
      firstName: "Good",
      lastName: "Student",
      creditsEarned: 0,
=======
    userCourses.insert({
      "email": "test1@gmail.com",
      "firstName": "Good",
      "lastName": "Student",
      "creditsEarned": 0,
>>>>>>> 682c5fe0dedd1aaa9a5e05052a042336b984cb4e
      // "requirements": {
      //   "core":
      //   { // 
      //     CPSC: [
      //       { "num": 110, "status": "incomplete" },
      //       { "num": 121, "status": "incomplete" },
      //       { "num": 210, "status": "incomplete" },
      //       { "num": 221, "status": "incomplete" },
      //       { "num": 213, "status": "incomplete" },
      //       { "num": 310, "status": "incomplete" },
      //       { "num": 313, "status": "incomplete" },
      //       { "num": 320, "status": "incomplete" }
      //     ],
      //     "ENGL": "incomplete",
      //     "MATH": "incomplete",
      //     "STAT": "incomplete",
      //     "COMM": "incomplete",
      //     "counter": 0
      //   },
      //   "elective": [0, 0], // elective[0] is 300 < num <400 completed
      //   "bridging": { "CPSC": 0, "OTHER": 0 },
      //   "replacements": [] // list of min course levels that can be used to replace an exemption
      // },
<<<<<<< HEAD
      courses: {
        CPSC121: {
          type: "core",
          dept: "CPSC",
          num: 121,
          grade: 88,
          session: "2018W1"
        },
        CPSC210: {
          type: "core",
          dept: "CPSC",
          num: 210,
          grade: 88,
          session: "2018W1"
        },
        CPSC110: {
          type: "core",
          dept: "CPSC",
          num: 110,
          grade: 88,
          session: "2018W1"
        },
        CPSC221: {
          type: "core",
          dept: "CPSC",
          num: 221,
          grade: 88,
          session: "2018W1"
        },
        CPSC213: {
          type: "core",
          dept: "CPSC",
          num: 213,
          grade: 88,
          session: "2018W1"
        },
        CPSC310: {
          type: "core",
          dept: "CPSC",
          num: 310,
          grade: 88,
          session: "2018W1"
        },
        SCIE300: {
          type: "core",
          dept: "SCIE",
          num: 300,
          grade: 88,
          session: "2018W1"
        },
        CPSC316: {
          type: "electives",
          consumed: false,
          dept: "CPSC",
          num: 316,
          grade: 88,
          session: "2018W1"
        },
        CPSC319: {
          type: "electives",
          consumed: false,
          dept: "CPSC",
          num: 319,
          grade: 88,
          session: "2018W1"
        },
        CPSC436: {
          type: "electives",
          consumed: false,
          dept: "CPSC",
          num: 436,
          grade: 88,
          session: "2018W1"
        },
        STAT302: {
          type: "bridging",
          dept: "STAT",
          num: 302,
          grade: 88,
          session: "2018W1"
        },
        STAT305: {
          type: "bridging",
          dept: "STAT",
          num: 305,
          grade: 88,
          session: "2018W1"
        },
        STAT306: {
          type: "bridging",
          dept: "STAT",
          num: 306,
          grade: 88,
          session: "2018W1"
        },
        CPSC330: {
          type: "bridging",
          dept: "CPSC",
          num: 330,
          grade: 88,
          session: "2018W1"
        },
        ENGL112: {
          type: "exemptions",
          dept: "ENGL",
          num: 112,
          grade: 88,
          session: "2018W1"
        },
        STAT200: {
          type: "exemptions",
          dept: "STAT",
          num: 200,
          grade: 88,
          session: "2018W1"
        },
        MATH180: {
          type: "exemptions",
          dept: "MATH",
          num: 180,
          grade: 88,
          session: "2018W1"
        },
        MATH221: {
          type: "replacement",
          dept: "MATH",
          num: 221,
          grade: 88,
          session: "2018W1"
        },
        MATH200: {
          type: "replacement",
          dept: "MATH",
          num: 200,
          grade: 88,
          session: "2018W1"
        },
        DSCI100: {
          type: "replacement",
          dept: "DSCI",
          num: 100,
          grade: 88,
          session: "2018W1"
        }
=======
      "courses": {
        "CPSC110": { "type": "core", "dept": "CPSC", "num": 110 },
        "CPSC121": { "type": "core", "dept": "CPSC", "num": 121 },
        "CPSC210": { "type": "core", "dept": "CPSC", "num": 210 },
        "CPSC221": { "type": "core", "dept": "CPSC", "num": 221 },
        "CPSC213": { "type": "core", "dept": "CPSC", "num": 213 },
        "CPSC310": { "type": "core", "dept": "CPSC", "num": 310 },
        "SCIE300": { "type": "core", "dept": "SCIE", "num": 300 },
        "CPSC316": { "type": "electives", "dept": "CPSC", "num": 316 },
        "CPSC319": { "type": "electives", "dept": "CPSC", "num": 319 },
        "CPSC436": { "type": "electives", "dept": "CPSC", "num": 436 },
        "STAT302": { "type": "bridging", "dept": "STAT", "num": 302 },
        "STAT305": { "type": "bridging", "dept": "STAT", "num": 305 },
        "STAT306": { "type": "bridging", "dept": "STAT", "num": 306 },
        "CPSC330": { "type": "bridging", "dept": "CPSC", "num": 330 },
        "ENGL112": { "type": "exemptions", "dept": "ENGL", "num": 112 },
        "STAT200": { "type": "exemptions", "dept": "STAT", "num": 200 },
        "MATH180": { "type": "exemptions", "dept": "MATH", "num": 180 },
        "MATH221": { "type": "replacement", "dept": "MATH", "num": 221 },
        "MATH200": { "type": "replacement", "dept": "MATH", "num": 200 },
        "DSCI100": { "type": "replacement", "dept": "DSCI", "num": 100 }
>>>>>>> 682c5fe0dedd1aaa9a5e05052a042336b984cb4e
      } // end courses
    }); // end user; //)
  }

  // a comment

  // Meteor.publish("courses", function () {
  //   return Courses.find({});
  // });

<<<<<<< HEAD
  Meteor.publish("users", function() {
    // console.log(Users.find().fetch());
    return Users.find();
=======
  Meteor.publish("userCourses", function () {
    return userCourses.find();
>>>>>>> 682c5fe0dedd1aaa9a5e05052a042336b984cb4e
  });
});
