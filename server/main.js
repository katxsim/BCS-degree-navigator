import { Meteor } from "meteor/meteor";
import _ from "lodash";
import '../imports/api/methods';

Meteor.startup(() => {

  if (Meteor.users == undefined) {
    Meteor.users.insert({
      "name": "test account",
      "password": "hashed",
      "email": " how do I sign in?"
    })
  }

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