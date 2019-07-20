import React, { Component } from "react";
import { Header, Progress, Message } from "semantic-ui-react";
import { createContainer } from "meteor/react-meteor-data";
import { Users } from "../../../../imports/collections/users";



class Progress1 extends Component {
  render() {
    const user = this.props.user

    try {
      user.courses.forEach(function (course) {
        switch (course.type) {
          case "core":
            switch (course.dept) {
              case "CPSC":
                switch (course.num) {
                  case 110:
                    user.requirements.core.cpsc.forEach(function (coreCS) {
                      if (coreCS.num === "110") coreCS.status = "complete"
                    })
                    break;
                  case 121:
                    user.requirements.core.cpsc.forEach(function (coreCS) {
                      if (coreCS.num === "121") coreCS.status = "complete"
                    })
                    break;
                  case 210:
                    user.requirements.core.cpsc.forEach(function (coreCS) {
                      if (coreCS.num === "210") coreCS.status = "complete"
                    })
                    break;
                  case 221:
                    user.requirements.core.cpsc.forEach(function (coreCS) {
                      if (coreCS.num === "221") coreCS.status = "complete"
                    })
                    break;
                  case 213:
                    user.requirements.core.cpsc.forEach(function (coreCS) {
                      if (coreCS.num === "213") coreCS.status = "complete"
                    })
                    break;
                  case 310:
                    user.requirements.core.cpsc.forEach(function (coreCS) {
                      if (coreCS.num === "310") coreCS.status = "complete"
                    })
                    break;
                  case 313:
                    user.requirements.core.cpsc.forEach(function (coreCS) {
                      if (coreCS.num === "313") coreCS.status = "complete"
                    })
                    break;
                  case 320:
                    user.requirements.core.cpsc.forEach(function (coreCS) {
                      if (coreCS.num === "320") coreCS.status = "complete"
                    })
                    break;
                } // end of CORE CPSC
                break;
              case "ENGL":
                if (course.num > 100) user.requirements.core.ENGL = "complete"
                break;
              case "MATH":
                if (course.num == 180) user.requirements.core.MATH = "complete"
                break;
              case "STAT":
                if (course.num == 203) user.requirements.core.STAT = "complete"
                break;
              case "COMM":
                if (
                  course.dept === "ENGL" ||
                  course.dept === "COMM" ||
                  course.dept === "SCIE" ||
                  course.dept === "BUSI" &&
                  course.num >= 300) user.requirements.core.COMM = "complete"
                break;
            } // END CORE
            break;
          case "elective":
            switch (course.dept == "CPSC") {
              case (course.num < 300):
                console.log("Not a valid elective " + course.dept + " " + course.num);
                console.log("Usage: must be CPSC 300 or higher, and not a core requirement")
                break;
              case (course.num < 400):
                user.requirements.elective[0]++;
                break;
              default:
                user.requirements.elective[1]++;
            }
            user.requirements.elective[0]
            break;
          case "bridging":
            if (
              course.dept == "CPSC" &&
              course.num >= 300 &&
              user.requirements.bridging.CPSC <= 2) {
              user.requirements.bridging.CPSC++;
            } else if (
              course.num >= 300 &&
              user.requirements.bridging.OTHER <= 3) {
              user.requirements.bridging.OTHER++;
            }
            break;
          case "replacement":
            let courseLevel = Math.floor(course.num / 100) * 100;
            // remove highest possible replacement level
            if (user.requirements.replacements.includes(courseLevel)) {
              user.requirements.replacements.splice(
                user.requirements.replacements.indexOf(courseLevel), 1);
            } else if
              // replacement is higher level than needed (surpassing the requirement)
              (Math.max(user.requirements.replacements) <= courseLevel) {
              user.requirements.replacements.splice(
                user.requirements.replacements.indexOf(Math.max(user.requirements.replacements)), 1);
            } else { // course num must be too low to quailify
              console.log(course.dept + " " + course.num + " was not a valid exemption replacement");
            }
            break;
        }
      })
    } catch (error) { } // user was not yet loaded...

    if (user) { // check how their requirements are doing
      console.log("user requirements: ");
      console.log(user.requirements);
    }

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
