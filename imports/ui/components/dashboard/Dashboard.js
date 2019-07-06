import React, { Component } from "react";
import Form from "./Form";
import CourseList from "./CourseList";
import Results from "./Results";
import TempList from "./TempList";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Welcome, Joe</h1>
            <p className="lead">
              Here is your progress in the BCS Degree thus far.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m6 l4">
            <Form />
          </div>
          <div className="col s12 m6 l4">
            <CourseList />
          </div>
          <div className="col s12 m12 l4">
            <Results />
            <img
              className="img2"
              src="https://brand3.sites.olt.ubc.ca/files/2018/09/5NarrowLogo_ex_768.png"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
