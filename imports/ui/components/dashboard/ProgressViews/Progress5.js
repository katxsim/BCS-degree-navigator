import _ from "lodash";
import React, { Component } from "react";
import { Icon, Table } from "semantic-ui-react";
import { userCourses } from "../../../../collections/userCourses";
import { createContainer } from "meteor/react-meteor-data";
import { updateRequirements } from "../../../../ComputeRequirements";

class Progress5 extends Component {
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

    let sum = 0;
    let count = 0;
    Object.values(this.props.user.courses).forEach(function(course) {
      if (Number.isInteger(course.grade)) {
        console.log(course.grade);
        sum += course.grade;
        // console.log(sum);
        count++;
        // console.log(count);

        // !Number.isNaN(course.grade) || course.grade !== undefined
      }
    });

    const gpa = (sum / count).toFixed(1);
    console.log(gpa);

    // let requirements = "";
    // if (this.props.user) {
    //   requirements = updateRequirements(this.props.user);
    // }

    return (
      <div className="ui bottom attached segment active tab">
        <div>
          <h1>GPA: {gpa}%</h1>
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

// this is a comment

export default createContainer(() => {
  // Set up subscription
  Meteor.subscribe("users");
  // Return an object as props
  return {
    user: userCourses.find({ email: "test1@gmail.com" }).fetch()[0]
  };
}, Progress5);
