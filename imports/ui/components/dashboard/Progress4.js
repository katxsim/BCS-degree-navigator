import React, { Component } from "react";
import { Icon, Step } from "semantic-ui-react";

class Progress4 extends Component {
  render() {
    return (
      <div className="ui bottom attached segment active tab scrolling-wrapper">
        <Step.Group>
          <Step completed>
            <Icon name="checkmark" />
            <Step.Content>
              <Step.Title>Before BCS</Step.Title>
              <Step.Description>
                <ul>
                  <li>ENGL 1XX</li>
                  <li>ENGL 1XX</li>
                  <li>CPSC 110</li>
                  <li>CPSC 121</li>
                  <li>MATH 180</li>
                  <li>CPSC 210</li>
                </ul>
              </Step.Description>
            </Step.Content>
          </Step>
          <Step completed>
            <Icon name="checkmark" />
            <Step.Content>
              <Step.Title>2018 Winter 1</Step.Title>
              <Step.Description>
                <ul>
                  <li>CPSC 213</li>
                  <li>CPSC 221</li>
                  <li>STAT 200</li>
                </ul>
              </Step.Description>
            </Step.Content>
          </Step>
          <Step completed>
            <Icon name="checkmark" />
            <Step.Content>
              <Step.Title>2018 Winter 2</Step.Title>
              <Step.Description>
                <ul>
                  <li>CPSC 304</li>
                  <li>CPSC 310</li>
                  <li>COMM 336</li>
                  <li>COMM 337</li>
                </ul>
              </Step.Description>
            </Step.Content>
          </Step>
          <Step active>
            <Icon name="chevron right" />
            <Step.Content>
              <Step.Title>2019 Summer</Step.Title>
              <Step.Description>
                <ul>
                  <li>CPSC 322</li>
                  <li>CPSC 436I</li>
                  <li>COMM 390</li>
                </ul>
              </Step.Description>
            </Step.Content>
          </Step>
          <Step>
            <Icon name="times" />
            <Step.Content>
              <Step.Title>2019 Winter 1</Step.Title>
              <Step.Description>
                <ul>
                  <li>CPSC 298</li>
                  <li>CPSC 344</li>
                </ul>
              </Step.Description>
            </Step.Content>
          </Step>
          <Step>
            <Icon name="times" />
            <Step.Content>
              <Step.Title>2019 Winter 2</Step.Title>
              <Step.Description>
                <ul>
                  <li>CPSC 299</li>
                  <li>CPSC 319</li>
                </ul>
              </Step.Description>
            </Step.Content>
          </Step>
          <Step>
            <Icon name="times" />
            <Step.Content>
              <Step.Title>2020 Summer</Step.Title>
              <Step.Description>
                <ul>
                  <li>CPSC 398</li>
                  <li>ENGL 301</li>
                </ul>
              </Step.Description>
            </Step.Content>
          </Step>
          <Step>
            <Icon name="times" />
            <Step.Content>
              <Step.Title>2020 Winter 1</Step.Title>
              <Step.Description>
                <ul>
                  <li>CPSC 317</li>
                  <li>CPSC 313</li>
                </ul>
              </Step.Description>
            </Step.Content>
          </Step>
          <Step>
            <Icon name="times" />
            <Step.Content>
              <Step.Title>2020 Winter 2</Step.Title>
              <Step.Description>
                <ul>
                  <li>CPSC 491</li>
                  <li>CPSC 320</li>
                </ul>
              </Step.Description>
            </Step.Content>
          </Step>
        </Step.Group>
      </div>
    );
  }
}

export default Progress4;
