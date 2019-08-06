import React, { Component } from "react";
import { Icon, Step } from "semantic-ui-react";
import { createContainer } from "meteor/react-meteor-data";
import _ from "lodash";

class Progress4 extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    if (this.props.user) {
      this.setState({
        data: this.props.user.courses
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.user !== prevProps.user) {
      if (this.props.user !== undefined) {
        this.setState({
          data: this.props.user.courses
        });
      } else {
        this.setState({
          data: {}
        });
      }
    }
  }

  getColour(session) {
    let currentSession = "2019S";
    let colour = "";
    if (session === currentSession) {
      colour = "warning";
    } else if (session < currentSession) {
      colour = "positive";
    } else {
      colour = "negative";
    }
    return colour;
  }

  getIcon(session) {
    let currentSession = "2019S";
    let icon = "";
    if (session === currentSession) {
      icon = "chevron right";
    } else if (session < currentSession) {
      icon = "checkmark";
    } else {
      icon = "times";
    }
    return icon;
  }

  render() {
    let sessions = {};
    let index = -1;

    Object.values(this.props.user.courses).forEach(function(course) {
      let session = course.year + course.term;
      if (Object.keys(sessions).includes(session)) {
        sessions[session].push(course.dept + " " + course.num);
      } else {
        index += 1;
        let sessionArray = [];
        sessionArray.push(course.dept + " " + course.num);
        sessions[session] = sessionArray;
      }
    });

    return (
      <div className="ui bottom attached segment active tab scrolling-wrapper">
        <Step.Group>
          {_.map(Object.keys(sessions), (session, index) => (
            <Step className={this.getColour(session)}>
              <Icon name={this.getIcon(session)} />
              <Step.Content>
                <Step.Title>{session}</Step.Title>
                <Step.Description>
                  <ul>
                    {Object.values(sessions)[index].map(course => (
                      <li>{course}</li>
                    ))}
                  </ul>
                </Step.Description>
              </Step.Content>
            </Step>
          ))}
        </Step.Group>
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
}, Progress4);

{
  /* <Step completed className="positive">
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
          <Step completed className="positive">
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
          <Step completed className="positive">
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
          <Step className="warning">
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
          <Step className="negative">
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
          <Step className="negative">
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
          <Step className="negative">
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
          <Step className="negative">
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
          <Step className="negative">
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
          </Step> */
}
