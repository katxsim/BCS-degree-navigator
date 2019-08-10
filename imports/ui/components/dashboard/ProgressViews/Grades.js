import _ from "lodash";
import React, { Component } from "react";
import { Icon, Table } from "semantic-ui-react";
import { createContainer } from "meteor/react-meteor-data";

class Grades extends Component {
  state = {
    column: null,
    data: null,
    direction: null
  };

  componentDidMount() {
    if (this.props.user) {
      this.setState({
        data: this.props.user.courses
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.user !== undefined) {
      if (this.props.user !== prevProps.user) {
        this.setState({
          data: this.props.user.courses
        });
      }
    } else if (this.props.user !== prevProps.user) {
      this.setState({
        data: {}
      });
    }
  }

  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state;

    if (column !== clickedColumn) {
      if (clickedColumn === "course") {
        this.setState({
          column: clickedColumn,
          data: _.sortBy(Object.values(this.props.user.courses), [
            "dept",
            "num"
          ]),
          direction: "ascending"
        });
      } else {
        this.setState({
          column: clickedColumn,
          data: _.sortBy(data, [clickedColumn]),
          direction: "ascending"
        });
      }
      return;
    }

    this.setState({
      data: data.reverse(),
      direction: direction === "ascending" ? "descending" : "ascending"
    });
  };

  render() {
    const { column, data, direction } = this.state;

    let sum = 0;
    let count = 0;
    try {
      Object.values(this.props.user.courses).forEach(function (course) {
        if (Number.isInteger(parseInt(course.grade))) {
          if (course.grade != 0) {
            sum += parseInt(course.grade);
            count++;
          }
        }
      });
    } catch (error) { } // do nothing if user is not loaded

    let gpa = (sum / count).toFixed(1);

    if (isNaN(gpa) || gpa === 0) {
      gpa = "";
    }
    let percent = "";
    if (gpa) {
      percent = "%";
    }

    return (
      <div className="ui bottom attached segment active tab">
        <div>
          <h1>
            GPA: {gpa} {percent}
          </h1>
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
            {_.map(data, ({ dept, num, grade, term, year }) => (
              <Table.Row key={dept + " " + num}>
                <Table.Cell>{dept + " " + num}</Table.Cell>
                <Table.Cell>{grade ? grade : "--"}</Table.Cell>
                <Table.Cell>
                  {year} {term}
                </Table.Cell>
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
    user: Meteor.users.findOne({ _id: Meteor.userId() })
  };
}, Grades);
