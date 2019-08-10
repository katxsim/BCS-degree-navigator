import React, { Component } from "react";
import { Icon, Step } from "semantic-ui-react";
import { createContainer } from "meteor/react-meteor-data";
import { importSession } from "../../../../session";
import _ from "lodash";

const currentSession = importSession;

class Timeline extends Component {
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

    try {
      Object.values(this.props.user.courses).forEach(function (course) {
        let session = course.year + course.term.toUpperCase();
        if (Object.keys(sessions).includes(session)) {
          sessions[session].push(course.dept + " " + course.num);
        } else {
          index += 1;
          let sessionArray = [];
          sessionArray.push(course.dept + " " + course.num);
          sessions[session] = sessionArray;
        }
      });
    } catch (error) { } // do nothing when object is not loaded

    return (
      <div className="ui bottom attached segment active tab scrolling-wrapper">
        <Step.Group>
          {_.map(Object.keys(sessions).sort(), (session) => (
            <Step className={this.getColour(session)}>
              <Icon name={this.getIcon(session)} />
              <Step.Content>
                <Step.Title>{session}</Step.Title>
                <Step.Description>
                  <ul>
                    {sessions[session].map(course => (
                      <li> {course} </li>
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
}, Timeline);
