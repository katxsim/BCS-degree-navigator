import React, { Component } from "react";
import { Icon, Table } from "semantic-ui-react";

class Progress2 extends Component {
  render() {
    return (
      <div className="ui bottom attached segment active tab">
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Core</Table.HeaderCell>
              <Table.HeaderCell>Bridging</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell positive>
                <Icon name="checkmark" />
                ENGL 1xx
              </Table.Cell>
              <Table.Cell positive>
                <Icon name="checkmark" />
                Bridging 1
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell positive>
                <Icon name="checkmark" />
                ENGL 1xx
              </Table.Cell>
              <Table.Cell positive>
                <Icon name="checkmark" />
                Bridging 2
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell positive>
                <Icon name="checkmark" />
                CPSC 110
              </Table.Cell>
              <Table.Cell positive>
                <Icon name="checkmark" />
                Bridging 3
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell positive>
                <Icon name="checkmark" />
                CPSC 121
              </Table.Cell>
              <Table.Cell positive>
                <Icon name="checkmark" />
                Bridging 4
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell positive>
                <Icon name="checkmark" />
                MATH 180
              </Table.Cell>
              <Table.Cell warning>Bridging 5</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell positive>
                <Icon name="checkmark" />
                STAT 203
              </Table.Cell>
              <Table.Cell />
            </Table.Row>
            <Table.Row>
              <Table.Cell negative>Communication Requirement</Table.Cell>
              <Table.Cell />
            </Table.Row>
            <Table.Row>
              <Table.Cell positive>
                <Icon name="checkmark" />
                CPSC 210
              </Table.Cell>
              <Table.Cell />
            </Table.Row>
            <Table.Row>
              <Table.Cell positive>
                <Icon name="checkmark" />
                CPSC 213
              </Table.Cell>
              <Table.Cell />
            </Table.Row>
            <Table.Row>
              <Table.Cell positive>
                <Icon name="checkmark" />
                CPSC 221
              </Table.Cell>
              <Table.Cell />
            </Table.Row>
            <Table.Row>
              <Table.Cell positive>
                <Icon name="checkmark" />
                CPSC 310
              </Table.Cell>
              <Table.Cell />
            </Table.Row>
            <Table.Row>
              <Table.Cell negative>CPSC 313</Table.Cell>
              <Table.Cell />
            </Table.Row>
            <Table.Row>
              <Table.Cell negative>CPSC 320</Table.Cell>
              <Table.Cell />
            </Table.Row>
            <Table.Row>
              <Table.Cell negative>CPSC 3xx</Table.Cell>
              <Table.Cell />
            </Table.Row>
            <Table.Row>
              <Table.Cell negative>CPSC 3xx</Table.Cell>
              <Table.Cell />
            </Table.Row>
            <Table.Row>
              <Table.Cell warning>CPSC 4xx</Table.Cell>
              <Table.Cell />
            </Table.Row>
            <Table.Row>
              <Table.Cell negative>CPSC 4xx</Table.Cell>
              <Table.Cell />
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default Progress2;
