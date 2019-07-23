import React, { Component } from "react";
import { Tab } from "semantic-ui-react";
import Progress1 from "./Progress1";
import Progress2 from "./Progress2";
import Progress3 from "./Progress3";


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
    menuItem: "Grades",
    render: () => (
      <Tab.Pane>
        <Progress3 />
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

