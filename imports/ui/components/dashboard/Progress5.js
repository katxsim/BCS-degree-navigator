import _ from "lodash";
import React, { Component } from "react";
import { Icon, Table } from "semantic-ui-react";
import { Users } from "../../../collections/users";
import { createContainer } from "meteor/react-meteor-data";

// const tableData = [
//   { course: "CPSC 110", grade: 91, session: "2018W1" },
//   { course: "CPSC 121", grade: 79, session: "2018W1" },
//   { course: "MATH 180", grade: 73, session: "2018W1" },
//   { course: "CPSC 210", grade: 84, session: "2018W2" },
//   { course: "CPSC 213", grade: 80, session: "2018W2" }
// ];

class Progress5 extends Component {
  state = {
    column: null,
    data: null,
    direction: null
  };

  componentDidMount() {
    console.log("got here 1");
    if (this.props.user) {
      console.log("got here 2");
      console.log(this.props.user.courses);
      this.setState({
        data: this.props.user.courses
      });
    }
  }

  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state;

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: "ascending"
      });

      return;
    }

    this.setState({
      data: data.reverse(),
      direction: direction === "ascending" ? "descending" : "ascending"
    });
  };

  render() {
    console.log(this.state);
    const { column, data, direction } = this.state;
    console.log(data);

    return (
      <div className="ui bottom attached segment active tab">
        <div>
          <h1>GPA: 83%</h1>
        </div>
        <Table sortable celled fixed>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell
                sorted={column === "course" ? direction : null}
                onClick={this.handleSort("course")}
              >
                Course
              </Table.HeaderCell>

              <Table.HeaderCell
                sorted={column === "grade" ? direction : null}
                onClick={this.handleSort("grade")}
              >
                Grade
              </Table.HeaderCell>

              <Table.HeaderCell
                sorted={column === "session" ? direction : null}
                onClick={this.handleSort("session")}
              >
                Session
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {_.map(data, ({ dept, num, grade, session }) => (
              <Table.Row key={dept + " " + num}>
                <Table.Cell>{dept + " " + num}</Table.Cell>
                <Table.Cell>{grade}</Table.Cell>
                <Table.Cell>{session}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default createContainer(() => {
  // Set up subscription
  Meteor.subscribe("users");
  // Return an object as props
  return {
    user: Users.find({ email: "test1@gmail.com" }).fetch()[0]
  };
}, Progress5);
