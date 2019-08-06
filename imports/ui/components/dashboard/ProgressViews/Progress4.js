import React, { Component } from "react";
import { Icon, Step } from "semantic-ui-react";
import { createContainer } from "meteor/react-meteor-data";

class Progress4 extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    if (this.props.user) {
      // console.log(this.props.user.courses);
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

  render() {
    const { data } = this.state;

    // console.log(data);

    // console.log(this.props.user.courses);

    let sessions = {};

    Object.values(this.props.user.courses).forEach(function(course) {
      let session = course.year + course.term;
      if (Object.keys(sessions).includes(session)) {
        sessions[session].push(course);
      } else {
        let sessionArray = [];
        sessionArray.push(course);
        sessions[session] = sessionArray;
      }
    });

    console.log(sessions);

    let steps = [];
    let courses = [];
    Object.values(sessions).forEach(function(session) {
      session.forEach(function(course) {
        courses.push(course);
      });

      let step = {
        render: () => (
          <Step>
            <Step.Content>
              <Step.Title>{session}</Step.Title>
              <Step.Description>
                <ul>
                  <li>{courses}</li>
                </ul>
              </Step.Description>
            </Step.Content>
          </Step>
        )
      };

      steps.push(step);
    });

    console.log(steps);

    return (
      <div className="ui bottom attached segment active tab scrolling-wrapper">
        <Step.Group>
          <Step steps={steps} />
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
