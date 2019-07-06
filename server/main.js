import { Meteor } from "meteor/meteor";
import { Courses } from "../imports/collections/courses";
import _ from "lodash";
import { image, helpers } from "faker";

const shortid = require("shortid");

Meteor.startup(() => {
  // Check to see if data exists in the collection
  const numRecords = Courses.find({}).count();
  if (!numRecords) {
    // Generate data using lodash and faker
    Courses.insert(
      [
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
        { "type": "replacements", "dept": "MATH", "num": 221, "id": shortid.generate() },
        { "type": "replacements", "dept": "MATH", "num": 200, "id": shortid.generate() },
        { "type": "replacements", "dept": "DSCI", "num": 100, "id": shortid.generate() }
      ]
    );
  }


  Meteor.publish("courses", function () {
    return Courses.find({}, { limit: 20 });
  });
});
