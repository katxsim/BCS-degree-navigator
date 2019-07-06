import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { createContainer } from "meteor/react-meteor-data";
import { Courses } from "../../../../imports/collections/courses";
import { Course } from "./Temp";

const PER_PAGE = 20;

class CourseList extends Component {
  componentWillMount() {
    this.page = 2;
  }

  handleButtonClick() {
    Meteor.subscribe("courses", PER_PAGE * (this.page + 1));
    this.page += 1;
  }
  render() {
    // props.courses => an array of course objects
    return (
      <div>
        <div className="course-list">
          {this.props.courses.map(course => (
            <Course key={course._id} course={course} />
          ))}
        </div>
        <button
          onClick={this.handleButtonClick.bind(this)}
          className="btn btn-primary"
        >
          Load More...
        </button>
      </div>
    );
  }
}

export default createContainer(() => {
  // Set up subscription
  Meteor.subscribe("courses", PER_PAGE);
  // Return an object as props
  return { courses: Courses.find({}).fetch() };
}, CourseList);
