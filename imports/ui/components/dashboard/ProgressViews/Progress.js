import React, { Component } from "react";
import { Icon, Table } from "semantic-ui-react";
import { createContainer } from "meteor/react-meteor-data";
import { updateRequirements } from "../../../../ComputeRequirements";

class Progress extends Component {
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
    } catch (error) {} // do nothing

    let user = this.props.user;
    let requirements = "";

    try {
      if (user.courses) {
        requirements = updateRequirements(user);
      }

      if (requirements) {
        return (
          <div className="ui bottom attached segment active tab">
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
  return {
    user: Meteor.users.findOne({ _id: Meteor.userId() })
  };
}, Progress);

{
  /* <Table.Body>
            <Table.Row>
              <Table.Cell positive>
                <Icon name="checkmark" />
                ENGL 1xx
              </Table.Cell>
              <Table.Cell warning>
                <span className="left">
                  <Icon name="chevron right" />
                </span>
                CPSC 4xx
              </Table.Cell>
              <Table.Cell negative>
                <Icon name="times" />
                Communication Requirement
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell positive>
                <Icon name="checkmark" />
                ENGL 1xx
              </Table.Cell>
              <Table.Cell warning>
                <span className="left">
                  <Icon name="chevron right" />
                </span>
                Bridging 5
              </Table.Cell>
              <Table.Cell negative>
                <Icon name="times" />
                CPSC 313
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell positive>
                <Icon name="checkmark" />
                CPSC 110
              </Table.Cell>
              <Table.Cell />
              <Table.Cell negative>
                <Icon name="times" />
                CPSC 320
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell positive>
                <Icon name="checkmark" />
                CPSC 121
              </Table.Cell>
              <Table.Cell />
              <Table.Cell negative>
                <Icon name="times" />
                CPSC 3xx
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell positive>
                <Icon name="checkmark" />
                MATH 180
              </Table.Cell>
              <Table.Cell />
              <Table.Cell negative>
                <Icon name="times" />
                CPSC 3xx
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell positive>
                <Icon name="checkmark" />
                STAT 203
              </Table.Cell>
              <Table.Cell />
              <Table.Cell negative>
                <Icon name="times" />
                CPSC 4xx
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell positive>
                <Icon name="checkmark" />
                CPSC 210
              </Table.Cell>
              <Table.Cell />
              <Table.Cell />
            </Table.Row>

            <Table.Row>
              <Table.Cell positive>
                <Icon name="checkmark" />
                CPSC 213
              </Table.Cell>
              <Table.Cell />
              <Table.Cell />
            </Table.Row>

            <Table.Row>
              <Table.Cell positive>
                <Icon name="checkmark" />
                CPSC 221
              </Table.Cell>
              <Table.Cell />
              <Table.Cell />
            </Table.Row>

            <Table.Row>
              <Table.Cell positive>
                <Icon name="checkmark" />
                CPSC 310
              </Table.Cell>
              <Table.Cell />
              <Table.Cell />
            </Table.Row>

            <Table.Row>
              <Table.Cell positive>
                <Icon name="checkmark" />
                Bridging 1
              </Table.Cell>
              <Table.Cell />
              <Table.Cell />
            </Table.Row>

            <Table.Row>
              <Table.Cell positive>
                <Icon name="checkmark" />
                Bridging 2
              </Table.Cell>
              <Table.Cell />
              <Table.Cell />
            </Table.Row>

            <Table.Row>
              <Table.Cell positive>
                <Icon name="checkmark" />
                Bridging 3
              </Table.Cell>
              <Table.Cell />
              <Table.Cell />
            </Table.Row>

            <Table.Row>
              <Table.Cell positive>
                <Icon name="checkmark" />
                Bridging 4
              </Table.Cell>
              <Table.Cell />
              <Table.Cell />
            </Table.Row>
          </Table.Body>
        </Table>
      </div> */
}
