import React, { Component } from "react";
import Progress from "./ProgressViews/ProgressTabs";
import CourseList from "./CourseList";
import Footer from "../layout/Footer";
import EmailSteve from "./EmailSteve";
import { Divider, Grid, Image, Segment } from 'semantic-ui-react'
import AddCourse from "./AddCourse";


class Dashboard extends Component {
  render() {
    return (
      <Segment>
        <p>
        <div className="dashboard container">
        <div className="jumbotron jumbotron-fluid">
          <EmailSteve />
          <div className="container">
            <h1 className="display-4">Welcome to your BCS Degree Navigator</h1>
            <p className="lead">
              Here is your progress in the BCS Degree thus far.
            </p>
          </div>
        </div>
        </div>
        </p>
    <Grid columns={2}>
      <Grid.Column>
            <AddCourse />
      </Grid.Column>
      <Grid.Column>
        

            <CourseList />

      </Grid.Column>
    </Grid>

    <Divider vertical></Divider>
          <Progress />
          <Footer />
  </Segment>
    );
  }
}

export default Dashboard;
