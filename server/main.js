import { Meteor } from "meteor/meteor";
// import { userCourses } from "../imports/collections/userCourses";
import _ from "lodash";
import '../imports/api/methods';

const shortid = require("shortid");

Meteor.startup(() => {
  // console.log(process.env.MONGO_URL);
  // process.env.MONGO_URL = "mongodb://m001-student:m001-mongodb-basics@cluster0-n7b3j.mongodb.net/bcsdn?retryWrites=true&w=majority"
  // Check to see if data exists in the collection
  // const numRecords = users.find().count();
  // const users = users.find().fetch();
  if (Meteor.users == undefined) {
    Meteor.users.insert({
      "name": "test account",
      "password": "hashed",
      "email": " how do I sign in?"
    })
  }

  // if (numRecords == 0) {
  //   users.insert({
  //     email: "test1@gmail.com",
  //     firstName: "Good",
  //     lastName: "Student",
  //     creditsEarned: 0,
  //     // "requirements": {
  //     //   "core":
  //     //   { //
  //     //     CPSC: [
  //     //       { "num": 110, "status": "incomplete" },
  //     //       { "num": 121, "status": "incomplete" },
  //     //       { "num": 210, "status": "incomplete" },
  //     //       { "num": 221, "status": "incomplete" },
  //     //       { "num": 213, "status": "incomplete" },
  //     //       { "num": 310, "status": "incomplete" },
  //     //       { "num": 313, "status": "incomplete" },
  //     //       { "num": 320, "status": "incomplete" }
  //     //     ],
  //     //     "ENGL": "incomplete",
  //     //     "MATH": "incomplete",
  //     //     "STAT": "incomplete",
  //     //     "COMM": "incomplete",
  //     //     "counter": 0
  //     //   },
  //     //   "elective": [0, 0], // elective[0] is 300 < num <400 completed
  //     //   "bridging": { "CPSC": 0, "OTHER": 0 },
  //     //   "replacements": [] // list of min course levels that can be used to replace an exemption
  //     // },
  //     courses: {
  //       CPSC121: {
  //         type: "core",
  //         dept: "CPSC",
  //         num: 121,
  //         grade: 88,
  //         session: "2017W2"
  //       },
  //       CPSC210: {
  //         type: "core",
  //         dept: "CPSC",
  //         num: 210,
  //         grade: 72,
  //         session: "2017W2"
  //       },
  //       CPSC110: {
  //         type: "core",
  //         dept: "CPSC",
  //         num: 110,
  //         grade: 91,
  //         session: "2017W1"
  //       },
  //       CPSC221: {
  //         type: "core",
  //         dept: "CPSC",
  //         num: 221,
  //         grade: 67,
  //         session: "2018W1"
  //       },
  //       CPSC213: {
  //         type: "core",
  //         dept: "CPSC",
  //         num: 213,
  //         grade: 83,
  //         session: "2018W1"
  //       },
  //       CPSC310: {
  //         type: "core",
  //         dept: "CPSC",
  //         num: 310,
  //         grade: 86,
  //         session: "2018W2"
  //       },
  //       SCIE300: {
  //         type: "core",
  //         dept: "SCIE",
  //         num: 300,
  //         grade: 75,
  //         session: "2018W1"
  //       },
  //       CPSC316: {
  //         type: "electives",
  //         consumed: false,
  //         dept: "CPSC",
  //         num: 316,
  //         grade: 71,
  //         session: "2018W1"
  //       },
  //       CPSC319: {
  //         type: "electives",
  //         consumed: false,
  //         dept: "CPSC",
  //         num: 319,
  //         grade: 79,
  //         session: "2018W1"
  //       },
  //       CPSC436: {
  //         type: "electives",
  //         consumed: false,
  //         dept: "CPSC",
  //         num: 436,
  //         grade: 84,
  //         session: "2019S"
  //       },
  //       STAT302: {
  //         type: "bridging",
  //         dept: "STAT",
  //         num: 302,
  //         grade: 86,
  //         session: "2018W1"
  //       },
  //       STAT305: {
  //         type: "bridging",
  //         dept: "STAT",
  //         num: 305,
  //         grade: 63,
  //         session: "2018W1"
  //       },
  //       STAT306: {
  //         type: "bridging",
  //         dept: "STAT",
  //         num: 306,
  //         grade: 77,
  //         session: "2018W1"
  //       },
  //       CPSC330: {
  //         type: "bridging",
  //         dept: "CPSC",
  //         num: 330,
  //         grade: 76,
  //         session: "2018W1"
  //       },
  //       ENGL112: {
  //         type: "exemptions",
  //         dept: "ENGL",
  //         num: 112,
  //         grade: 92,
  //         session: "2018W1"
  //       },
  //       STAT200: {
  //         type: "exemptions",
  //         dept: "STAT",
  //         num: 200,
  //         grade: 84,
  //         session: "2018W1"
  //       },
  //       MATH180: {
  //         type: "exemptions",
  //         dept: "MATH",
  //         num: 180,
  //         grade: 70,
  //         session: "2017W1"
  //       },
  //       MATH221: {
  //         type: "replacement",
  //         dept: "MATH",
  //         num: 221,
  //         grade: 68,
  //         session: "2018W1"
  //       },
  //       MATH200: {
  //         type: "replacement",
  //         dept: "MATH",
  //         num: 200,
  //         grade: 63,
  //         session: "2018W1"
  //       },
  //       DSCI100: {
  //         type: "replacement",
  //         dept: "DSCI",
  //         num: 100,
  //         grade: 90,
  //         session: "2018W1"
  //       }
  //     } // end courses
  //   }); // end user; //)
  // }

  Meteor.publish("users", function () {
    if (!Meteor.users.findOne({ "_id": this.userId }).hasOwnProperty("courses")) {
      Meteor.users.update(this.userId, {
        $set: {
          courses: {}
        }
      })
    }
    return Meteor.users.find({ "_id": this.userId })
  });
});