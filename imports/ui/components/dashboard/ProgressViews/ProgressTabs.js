import React, { Component } from "react";
import { Tab } from "semantic-ui-react";
import SummaryView from "./SummaryView";
import Progress2 from "./Progress2";
import Progress3 from "./Progress3";
import Timeline from "./Timeline";
import Grades from "./Grades";

const panes = [
  {
    menuItem: "Summary",
    render: () => (
      <Tab.Pane>
        <SummaryView />
      </Tab.Pane>
    )
  },
  {
    menuItem: "Course List",
    render: () => (
      <Tab.Pane>
        <Progress2 />
      </Tab.Pane>
    )
  },
  {
    menuItem: "Course List 2",
    render: () => (
      <Tab.Pane>
        <Progress3 />
      </Tab.Pane>
    )
  },
  {
    menuItem: "Timeline",
    render: () => (
      <Tab.Pane>
        <Timeline />
      </Tab.Pane>
    )
  },
  {
    menuItem: "Grades",
    render: () => (
      <Tab.Pane>
        <Grades />
      </Tab.Pane>
    )
  }
];

class Progress extends Component {
  render() {
    return <Tab panes={panes} />;
  }
}

export default Progress;
