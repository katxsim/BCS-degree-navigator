import React, { Component } from "react";
import { Header, Progress, Icon, Table } from "semantic-ui-react";
import { createContainer } from "meteor/react-meteor-data";
import { updateRequirements } from "../../../../ComputeRequirements";
import { importSession } from "../../../../Session";
const shortid = require("shortid");

const sess = importSession;

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

  findCellCoordinates(courses) {
    let currentSession = "2019S";
    let row = [];
    let rows = [];
    let cells = [];


    courses.forEach(function(course) {
      // console.log("got here");
      // console.log(course);
      let session = course.year + course.term.toUpperCase();
      // console.log(session);
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
        // console.log("case 2");
        // console.log(rows);
        rows.forEach(function(row) {
          // console.log("first for each");
          row.forEach(function(cell) {
            // console.log("second for each");
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

        // console.log(cell);

        row[cell.cellColumn] = cell;
        rows.splice(cell.cellRow, 1, row);
        cells.push(cell);
        console.log(cells);
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
    console.log(cells);
    return cells;
  }

  buildTable(cells) {
    let table = [];

    console.log("got here");
    try {
      let rowCount = 0;

      cells.forEach(function(cell) {
        console.log("got here 2");
        if (cell.cellRow > rowCount) {
          console.log("got here 3");
          rowCount = cell.cellRow;
        }
      });

      console.log("got here 4");

      let rowNum = 0;
      while (rowNum <= rowCount) {
        console.log("got here 5");
        let row = [];

        cells.forEach(function(cell) {
          console.log("got here 6");
          if (cell.cellRow === rowNum) {
            console.log("got here 7");
            row[cell.cellColumn] = cell;
          }
        });
        console.log("got here 8");
        console.log(row);
        table.push(row);
        console.log("got here 9");
        for (let column = 0; column <= 2; column++) {
          if (table[rowNum][column] === undefined) {
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
      return table;
    } catch (error) {} // do nothing
  }

  render() {
    let coreCells = [];
    let bridgingCells = [];
    let electivesCells = [];

    let coreArray = [];
    let bridgingArray = [];
    let electivesArray = [];

    let coreTable = [];
    let bridgingTable = [];
    let electivesTable = [];

    try {
      console.log(this.props.user.courses);

      Object.values(this.props.user.courses).forEach(function(course) {
        if (course.type === "core") {
          coreArray.push(course);
        } else if (course.type === "bridging") {
          bridgingArray.push(course);
        } else if (course.type === "electives") {
          electivesArray.push(course);
        }
      });

      console.log(coreArray);
      console.log(bridgingArray);
      console.log(electivesArray);

      coreCells = this.findCellCoordinates(coreArray);
      console.log(coreCells);
      bridgingCells = this.findCellCoordinates(bridgingArray);
      console.log(bridgingCells);
      electivesCells = this.findCellCoordinates(electivesArray);
      console.log(electivesCells);

      coreTable = this.buildTable(coreCells);
      console.log("line x");
      bridgingTable = this.buildTable(bridgingCells);
      console.log("line y");
      electivesTable = this.buildTable(electivesCells);
      console.log("line z");

      console.log(coreTable);
      console.log(bridgingTable);
      console.log(electivesTable);
    } catch (error) {} // do nothing when object is not loaded

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
                <Icon name="checkmark" />
                {course.dept} {course.num}
              </p>
            );
          }
        })
        : "";

      if (requirements) {
        return (
          <div className="ui bottom attached segment active tab">
            <Header className="reccy" as="h3" block>
              Overall Progress:
              <div className="reccy" />
              <Progress
                className="prog"
                percent={(creditsCompleted / 63) * 100}
                color="olive"
                active
                big
              />
              <div className="paddin">
                <p>
                  You have completed {creditsCompleted} credits of the minimum
                  63 required
                </p>
              </div>
              <div className="reccy" />
            </Header>

            <Header className="reccy" as="h3" block>
              Core Progress: {corePercent}%
              <div className="reccy" />
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
                    {coreTable.map(row => {
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
              <div>
                <p className={requirements.core.CPSC[0].status}>CPSC 110</p>
                <p className={requirements.core.CPSC[1].status}>CPSC 121</p>
                <p className={requirements.core.CPSC[2].status}>CPSC 210</p>
                <p className={requirements.core.CPSC[3].status}>CPSC 221</p>
                <p className={requirements.core.CPSC[4].status}>CPSC 213</p>
                <p className={requirements.core.CPSC[5].status}>CPSC 310</p>
                <p className={requirements.core.CPSC[6].status}>CPSC 313</p>
                <p className={requirements.core.CPSC[7].status}>CPSC 320</p>
                <p className={requirements.core.ENGL}> ENGL 100+ </p>
                <p className={requirements.core.MATH}> MATH 180  </p>
                <p className={requirements.core.STAT}> STAT 203  </p>
                <p className={requirements.core.COMM}> 300+ Communication Requirement </p>
              </div>
              <div className="reccy" />
            </Header>

            <Header className="reccy" as="h3" block>
              Bridging Progress: {bridgingPercent}%<div className="reccy" />
              <Progress
                className="prog"
                percent={bridgingPercent}
                color="olive"
                large
                active
              />
              <p>You have completed {bridgingComplete} of 5 bridging courses</p>
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
                    {bridgingTable.map(row => {
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
              <div className="paddin">{postBridging}</div>
              <div className="reccy" />
            </Header>

            <Header className="reccy" as="h3" block>
              Elective Progress: {electivePercent}%<div className="reccy" />
              <Progress
                className="prog"
                percent={electivePercent}
                color="olive"
                large
                active
              />
              <p>You have completed {electiveComplete} of 6 electives</p>
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
                    {electivesTable.map(row => {
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
              <div className="paddin">{PostElectives}</div>
              <div className="reccy" />
            </Header>

            <Header className="reccy" as="h3" block>
              Exemption Replacements Remaining:   
          
              {replacementsLeft}

              <div className="reccy" />
              <p>You have used the following exemption replacements: </p>
              <div className="exempt">
              {/* <div className="paddin"> */}
              {postExemptionReplacements}
              {/* </div> */}
              </div>
              <div className="reccy" />
            </Header>
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
