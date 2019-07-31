import _ from "lodash";
import React, { Component } from "react";
import { Icon, Table } from "semantic-ui-react";

const tableData = [
  { course: "CPSC 110", grade: 91, session: "2018W1" },
  { course: "CPSC 121", grade: 79, session: "2018W1" },
  { course: "MATH 180", grade: 73, session: "2018W1" },
  { course: "CPSC 210", grade: 84, session: "2018W2" },
  { course: "CPSC 213", grade: 80, session: "2018W2" }
];

class Progress5 extends Component {
  state = {
    column: null,
    data: tableData,
    direction: null
  };

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
    const { column, data, direction } = this.state;

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
            {_.map(data, ({ course, grade, session }) => (
              <Table.Row key={course}>
                <Table.Cell>{course}</Table.Cell>
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

export default Progress5;
