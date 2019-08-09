import React, { Component } from "react";
import { Tab } from "semantic-ui-react";
import SummaryView from "./SummaryView";
import Progress from "./Progress";
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
    menuItem: "Progress",
    render: () => (
      <Tab.Pane>
        <Progress />
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

class ProgressTabs extends Component {
  render() {
    return <Tab panes={panes} />;
  }
}

export default ProgressTabs;
