import React, { Component } from "react";
import { Header, Progress, Icon, Table, Message } from "semantic-ui-react";
import { createContainer } from "meteor/react-meteor-data";
import _ from "lodash";
import { userCourses } from "../../../../collections/userCourses";
import { updateRequirements } from "../../../../ComputeRequirements";
const shortid = require("shortid");

class SummaryView extends Component {
  getIcon(cell) {
    let icon = "";
    if (cell.cellColumn === 0 && cell.course !== "") {
      icon = "checkmark";
    } else if (cell.cellColumn === 1 && cell.course !== "") {
      icon = "chevron right";
    } else if (cell.cellColumn === 2 && cell.course !== "") {
      icon = "times";
    }
    return icon;
  }

  getColour(cell) {
    let colour = "";
    if (cell.cellColumn === 0 && cell.course !== "") {
      colour = "positive";
    } else if (cell.cellColumn === 1 && cell.course !== "") {
      colour = "warning";
    } else if (cell.cellColumn === 2 && cell.course !== "") {
      colour = "negative";
    }
    return colour;
  }

  render() {
    let rows = [];
    let cells = [];
    let table = [];

    try {
      let currentSession = "2019S";
      let row = [];

      Object.values(this.props.user.courses).forEach(function(course) {
        let session = course.year + course.term.toUpperCase();
        let cell = {};
        let pastMaxRow = -1;
        let presentMaxRow = -1;
        let futureMaxRow = -1;

        if (session === currentSession) {
          rows.forEach(function(row) {
            row.forEach(function(cell) {
              if (cell.cellColumn === 1 && cell.cellRow > presentMaxRow) {
                presentMaxRow = cell.cellRow;
                rows[presentMaxRow + 1] = [];
              }
            });
          });

          cell = {
            cellRow: presentMaxRow + 1,
            cellColumn: 1,
            course: course.dept + " " + course.num
          };

          row[cell.cellColumn] = cell;
          rows.splice(cell.cellRow, 1, row);
          cells.push(cell);
        } else if (session < currentSession) {
          rows.forEach(function(row) {
            row.forEach(function(cell) {
              if (cell.cellColumn === 0 && cell.cellRow > pastMaxRow) {
                pastMaxRow = cell.cellRow;
                rows[pastMaxRow + 1] = [];
              }
            });
          });

          cell = {
            cellRow: pastMaxRow + 1,
            cellColumn: 0,
            course: course.dept + " " + course.num
          };

          row[cell.cellColumn] = cell;
          rows.splice(cell.cellRow, 1, row);
          cells.push(cell);
        } else {
          rows.forEach(function(row) {
            row.forEach(function(cell) {
              if (cell.cellColumn === 2 && cell.cellRow > futureMaxRow) {
                futureMaxRow = cell.cellRow;
                rows[futureMaxRow + 1] = [];
              }
            });
          });

          cell = {
            cellRow: futureMaxRow + 1,
            cellColumn: 2,
            course: course.dept + " " + course.num
          };

          row[cell.cellColumn] = cell;
          rows.splice(cell.cellRow, 1, row);
          cells.push(cell);
        }
      });
    } catch (error) {} // do nothing when object is not loaded

    console.log(cells);

    try {
      let rowCount = 0;
      cells.forEach(function(cell) {
        if (cell.cellRow > rowCount) {
          rowCount = cell.cellRow;
        }
      });

      let rowNum = 0;
      while (rowNum <= rowCount) {
        let row = [];
        cells.forEach(function(cell) {
          if (cell.cellRow === rowNum) {
            row[cell.cellColumn] = cell;
          }
        });
        table.push(row);
        for (let column = 0; column <= 2; column++) {
          console.log("here 1");
          console.log(table[rowNum][column]);
          if (table[rowNum][column] === undefined) {
            console.log("here 2");
            table[rowNum].splice(column, 1, {
              cellRow: rowNum,
              cellColumn: column,
              course: ""
            });
          }
        }
        rowNum++;
      }
      console.log(table);
    } catch (error) {} // do nothing

    let user = this.props.user;

    try {
      let requirements = "";
      if (user.courses) {
        requirements = updateRequirements(user);
      }

      // load stats for render
      const creditsCompleted = user ? requirements.credits : 0;

      const coreComplete = user ? requirements.core.counter : "";
      const corePercent = user ? Math.floor((coreComplete / 12) * 100) : "";

      const bridgingComplete = user
        ? requirements.bridging.CPSC + requirements.bridging.OTHER
        : "";
      const bridgingPercent = user
        ? Math.floor((bridgingComplete / 5) * 100)
        : "";

      const electiveComplete = user
        ? requirements.elective[0] + requirements.elective[1]
        : "";
      const electivePercent = user
        ? Math.floor((electiveComplete / 6) * 100)
        : "";

      const replacementsLeft = user ? requirements.replacements.length : "";

      // these can probably be compressed!
      // not top priority right now, though. TODO

      const postBridging = user
        ? Object.values(user.courses).map(course => {
            if (course.type === "bridging") {
              return (
                <p className="complete" key={course.dept + course.num}>
                  {course.dept} {course.num}
                </p>
              );
            }
          })
        : "";

      const PostElectives = user
        ? Object.values(user.courses).map(course => {
            if (course.type === "electives") {
              return (
                <p className="complete" key={course.dept + course.num}>
                  {course.dept} {course.num}
                </p>
              );
            }
          })
        : "";

      const postExemptionReplacements = user
        ? Object.values(user.courses).map(course => {
            if (course.type === "replacement") {
              return (
                <p className="complete" key={course.dept + course.num}>
                  {course.dept} {course.num}
                </p>
              );
            }
          })
        : "";

      if (requirements) {
        return (
          <div>
            <div className="ui bottom attached segment active tab">
              <Header as="h3" block>
                <Progress
                  className="prog"
                  percent={(creditsCompleted / 63) * 100}
                  color="olive"
                  active
                  big
                />
                <p>
                  You have completed {creditsCompleted} credits of the minimum
                  63 required
                </p>
              </Header>
              <Header as="h3" block>
                Core Progress: {corePercent}%
                <Progress
                  className="prog"
                  percent={corePercent}
                  color="olive"
                  active
                  big
                />
                <div>
                  <Table fixed unstackable>
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>Completed</Table.HeaderCell>
                        <Table.HeaderCell>In Progress</Table.HeaderCell>
                        <Table.HeaderCell>Incomplete</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>

                    <Table.Body>
                      {table.map(row => {
                        return (
                          <Table.Row>
                            {row.map(cell => (
                              <Table.Cell className={this.getColour(cell)}>
                                <Icon name={this.getIcon(cell)} />
                                {cell.course}
                              </Table.Cell>
                            ))}
                          </Table.Row>
                        );
                      })}
                    </Table.Body>
                  </Table>
                </div>
                <p className={requirements.core.CPSC[0].status}>CPSC 110</p>
                <p className={requirements.core.CPSC[1].status}>CPSC 121</p>
                <p className={requirements.core.CPSC[2].status}>CPSC 210</p>
                <p className={requirements.core.CPSC[3].status}>CPSC 221</p>
                <p className={requirements.core.CPSC[4].status}>CPSC 213</p>
                <p className={requirements.core.CPSC[5].status}>CPSC 310</p>
                <p className={requirements.core.CPSC[6].status}>CPSC 313</p>
                <p className={requirements.core.CPSC[7].status}>CPSC 320</p>
                <p className={requirements.core.ENGL}> ENGL 100+</p>
                <p className={requirements.core.MATH}>MATH 180</p>
                <p className={requirements.core.STAT}>STAT 203</p>
                <p className={requirements.core.COMM}>
                  300+ Communication Requirement
                </p>
              </Header>

              <Header as="h3" block>
                Bridging Progress: {bridgingPercent}%
                <Progress
                  className="prog"
                  percent={bridgingPercent}
                  color="olive"
                  large
                  active
                />
                <p>
                  You have completed {bridgingComplete} of 5 bridging courses
                </p>
                {postBridging}
              </Header>

              <Header as="h3" block>
                Elective Progress: {electivePercent}%
                <Progress
                  className="prog"
                  percent={electivePercent}
                  color="olive"
                  large
                  active
                />
                <p>You have completed {electiveComplete} of 6 electives</p>
                {PostElectives}
              </Header>

              <Header as="h3" block>
                Exemption Replacements Remaining: {replacementsLeft}
                <p>You have used the following exemption replacements</p>
                {postExemptionReplacements}
              </Header>
            </div>
          </div>
        );
      } else {
        // no user is loaded yet
        return <p className="loading">Loading...</p>;
      }
    } catch (error) {
      return "";
    }
  }
}

export default createContainer(() => {
  // Set up subscription
  Meteor.subscribe("users");
  // Return an object as props
  // console.log(Meteor.users.findOne(Meteor.userId()))
  return {
    user: Meteor.users.findOne({ _id: Meteor.userId() })
  };
}, SummaryView);
