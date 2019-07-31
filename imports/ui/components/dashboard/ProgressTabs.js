import React, { Component } from "react";
import { Tab } from "semantic-ui-react";
import Progress1 from "./SummaryView";
import Progress2 from "./Progress2";
import Progress3 from "./Progress3";
import Progress4 from "./Progress4";
import Progress5 from "./Progress5";

const panes = [
  {
    menuItem: "Summary",
    render: () => (
      <Tab.Pane>
        <Progress1 />
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
        <Progress4 />
      </Tab.Pane>
    )
  },
  {
    menuItem: "Grades",
    render: () => (
      <Tab.Pane>
        <Progress5 />
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
