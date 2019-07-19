import React, { Component } from "react";
import { Tab } from "semantic-ui-react";
import Progress1 from "./Progress1";
import Progress2 from "./Progress2";
import Progress3 from "./Progress3";

const panes = [
  { menuItem: "1", pane: <Progress1 /> },
  { menuItem: "2", pane: <Progress2 /> },
  { menuItem: "3", pane: <Progress3 /> }
];

class Progress extends Component {
  render() {
    return <Tab panes={panes} renderActiveOnly={false} />;
  }
}

export default Progress;
