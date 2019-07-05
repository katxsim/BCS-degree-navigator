import { Meteor } from "meteor/meteor";
import { Courses } from "../imports/collections/courses";
import _ from "lodash";
import { image, helpers } from "faker";

Meteor.startup(() => {
  // Check to see if data exists in the collection
  const numRecords = Courses.find({}).count();
  if (!numRecords) {
    // Generate data using lodash and faker
    _.times(5000, () => {
      const { name, email, phone } = helpers.createCard();
      // const name = helpers.createCard().name;
      // const email = helpers.createCard().email;
      // const phone = helpers.createCard().phone;

      Courses.insert({
        name,
        email,
        phone,
        // name: name,
        // email: email,
        // phone: phone
        avatar: image.avatar()
      });
    });
  }

  Meteor.publish("courses", function() {
    return Courses.find({}, { limit: 20 });
  });
});
