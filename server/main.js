import { Meteor } from "meteor/meteor";
import { Courses } from "../imports/collections/courses";
import _ from "lodash";
import { image, helpers } from "faker";

const path = require("path");

const shortid = require("shortid");

Meteor.startup(() => {
  // Check to see if data exists in the collection
  const numRecords = Courses.find({}).count();
  if (!numRecords) {
    // Generate courses
    Courses.insert({
      type: "core",
      dept: "CPSC",
      num: 110,
      grade: 99,
      _id: shortid.generate()
    }),
      Courses.insert({
        type: "core",
        dept: "CPSC",
        num: 210,
        grade: 99,
        _id: shortid.generate()
      }),
      Courses.insert({
        type: "core",
        dept: "ENGL",
        num: 110,
        grade: 99,
        _id: shortid.generate()
      }),
      Courses.insert({
        type: "core",
        dept: "MATH",
        num: 200,
        grade: 99,
        _id: shortid.generate()
      }),
      Courses.insert({
        type: "bridging",
        dept: "STAT",
        num: 302,
        grade: 99,
        _id: shortid.generate()
      }),
      Courses.insert({
        type: "bridging",
        dept: "STAT",
        num: 305,
        grade: 99,
        _id: shortid.generate()
      }),
      Courses.insert({
        type: "bridging",
        dept: "STAT",
        num: 306,
        grade: 99,
        _id: shortid.generate()
      }),
      Courses.insert({
        type: "exemptions",
        dept: "ENGL",
        num: 110,
        grade: 99,
        _id: shortid.generate()
      }),
      Courses.insert({
        type: "exemptions",
        dept: "STAT",
        num: 200,
        grade: 99,
        _id: shortid.generate()
      }),
      Courses.insert({
        type: "exemptions",
        dept: "MATH",
        num: 180,
        grade: 99,
        _id: shortid.generate()
      }),
      Courses.insert({
        type: "replacements",
        dept: "MATH",
        num: 221,
        grade: 99,
        _id: shortid.generate()
      }),
      Courses.insert({
        type: "replacements",
        dept: "MATH",
        num: 200,
        grade: 99,
        _id: shortid.generate()
      }),
      Courses.insert({
        type: "replacements",
        dept: "DSCI",
        num: 100,
        grade: 99,
        _id: shortid.generate()
      });
  }

  Meteor.publish("courses", function() {
    return Courses.find({});
  });

  if (ProcessingInstruction.env.NODE_ENV === "production") {
    // Set static folder
    app.use(express.static("client/build"));

    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
  }
});
