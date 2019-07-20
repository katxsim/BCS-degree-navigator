import React, { Component } from "react";
import { Tab } from "semantic-ui-react";
import Progress1 from "./Progress1";
import Progress2 from "./Progress2";
import Progress3 from "./Progress3";
// import { Users } from "../../../../collection/users"

const panes = [
  {
    menuItem: "1",
    render: () => (
      <Tab.Pane>
        <Progress1 />
      </Tab.Pane>
    )
  },
  {
    menuItem: "2",
    render: () => (
      <Tab.Pane>
        <Progress2 />
      </Tab.Pane>
    )
  },
  {
    menuItem: "3",
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

