import React from "react";
import { Meteor } from "meteor/meteor";
import { createContainer } from "meteor/react-meteor-data";
import { Courses } from "../../imports/collections/courses";

const CourseList = props => {
  // props.courses => an array of course objects

  return (
    <div>
      <div className="course-list">Course List</div>
    </div>
  );
};

export default createContainer(() => {
  // Set up subscription
  Meteor.subscribe("courses");
  // Return an object as props
  return { courses: Courses.find({}).fetch() };
}, CourseList);
