import React, { Component } from "react";
import { Header, Progress, Message } from "semantic-ui-react";
import { createContainer } from "meteor/react-meteor-data";
import { Users } from "../../../../imports/collections/users";



class Progress1 extends Component {
  render() {
    const user = this.props.user

    user ? user.courses.forEach(function (course) {
      switch (course.type) {
        case "core":
          switch (course.dept) {
            case "CPSC":
              switch (course.num) {
                case "110":
                  break;
                case "121":
                  break;
                case "210":
                  break;
                case "221":
                  break;
                case "213":
                  break;
                case "310":
                  break;
                case "313":
                  break;
                case "320":
                  break;
              } // end  CORE CPSC
              break;
            case "ENGL":
              break;
            case "MATH":
              break;
            case "STAT":
              break;
            case "COMM":
              break;
          } // END CORE
          break;
        case "elective":
          checkElective(course);
          break;
        case "bridging":
          checkBridging(course);
          break;
        case "replacement":
          checkReplacement(course);
          break;
      }
    }) : "";

    function checkCore(course) {
      // user.requirements.core.
    }
    function checkElective(course) {

    }
    function checkBridging(course) {

    }
    function checkReplacement(course) {

    }












    // if (course.type === "core") {
    //   checkCore(course)
    // }
    // if (course.type === "elective") {
    //   checkElective(course)
    // }
    // if (course.type === "bridging") {
    //   checkbridging(course)
    // }
    // if (course.type === "replacement") {
    //   checkReplacement(course)
    // }
    // update the list of requirements, send to server, and render it

    return (
      <div>
        <div className="ui bottom attached segment active tab">
          <Header as="h3" block>
            Core Progress: 70%
          </Header>
          <Progress percent={70} color="olive" active />
          <Message
            info
            header="Core Progress Details"
            content="You need 2 more core courses."
          />

          <Header as="h3" block>
            Bridging Progress: 30%
          </Header>
          <Progress percent={30} color="violet" active />
          <Message
            info
            header="Bridging Progress Details"
            content="You need 3 more bridging courses."
          />

          <Header as="h3" block>
            Overall Progress: 65%
          </Header>
          <Progress percent={65} color="grey" active />
          <Message
            className="lProg"
            info
            header="Overall Progress Details"
            content="You need 6 more courses overall to be finished!"
          />
        </div>
      </div>
    );
  }
}

export default createContainer(() => {
  // Set up subscription
  Meteor.subscribe("users");
  // Return an object as props
  return ({
    user: Users.find({ "email": "test1@gmail.com" }).fetch()[0]
  });
}, Progress1);
