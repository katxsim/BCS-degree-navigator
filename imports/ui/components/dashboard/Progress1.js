import React, { Component } from "react";
import { Header, Progress, Message } from "semantic-ui-react";
import { createContainer } from "meteor/react-meteor-data";
import { Users } from "../../../../imports/collections/users";
const shortid = require("shortid");


class Progress1 extends Component {
  render() {
    const user = this.props.user

    if (user) {
      user.courses.forEach(function (course) {
        try {
          // console.log(course.type + course.dept + course.num);
          switch (course.type) {
            case "core":
              switch (course.dept) {
                case "CPSC":
                  switch (course.num) {
                    case 110:
                      user.requirements.core.CPSC.forEach(function (coreCS) {
                        if (coreCS.num == 110) {
                          coreCS.status = "complete"
                          user.requirements.core.counter++;
                        }
                      })
                      return;
                    case 121:
                      user.requirements.core.CPSC.forEach(function (coreCS) {
                        if (coreCS.num == 121) {
                          coreCS.status = "complete"
                          user.requirements.core.counter++;
                        }
                      })
                      return;
                    case 210:
                      user.requirements.core.CPSC.forEach(function (coreCS) {
                        if (coreCS.num == 210) {
                          coreCS.status = "complete"
                          user.requirements.core.counter++;
                        }
                      })
                      return;
                    case 221:
                      user.requirements.core.CPSC.forEach(function (coreCS) {
                        if (coreCS.num == 221) {
                          coreCS.status = "complete"
                          user.requirements.core.counter++;
                        }
                      })
                      return;
                    case 213:
                      user.requirements.core.CPSC.forEach(function (coreCS) {
                        if (coreCS.num == 213) {
                          coreCS.status = "complete"
                          user.requirements.core.counter++;
                        }
                      })
                      return;
                    case 310:
                      user.requirements.core.CPSC.forEach(function (coreCS) {
                        if (coreCS.num == 310) {
                          coreCS.status = "complete"
                          user.requirements.core.counter++;
                        }
                      })
                      return;
                    case 313:
                      user.requirements.core.CPSC.forEach(function (coreCS) {
                        if (coreCS.num == 313) {
                          coreCS.status = "complete"
                          user.requirements.core.counter++;
                        }
                      })
                      return;
                    case 320:
                      user.requirements.core.CPSC.forEach(function (coreCS) {
                        if (coreCS.num == 320) {
                          coreCS.status = "complete"
                          user.requirements.core.counter++;
                        }
                      })
                      return;
                  }
                  return;

                case "ENGL":
                  if (course.num > 100) user.requirements.core.ENGL = "complete"
                  console.log(course);
                  return;
                case "MATH":
                  console.log(course.dept + course.num);
                  if (course.num == 180) user.requirements.core.MATH = "complete"
                  return;
                case "STAT":
                  if (course.num == 203) user.requirements.core.STAT = "complete"
                  return;
                default:
                  if (
                    course.dept === "ENGL" ||
                    course.dept === "COMM" ||
                    course.dept === "SCIE" ||
                    course.dept === "BUSI" &&
                    course.num >= 300) user.requirements.core.COMM = "complete"
                  return;
              }

            case "exemptions":
              switch (course.dept) {
                case "CPSC":
                  switch (course.num) {
                    case 110:
                      user.requirements.core.CPSC.forEach(function (coreCS) {
                        if (coreCS.num == 110) {
                          coreCS.status = "complete"
                          user.requirements.core.counter++;
                        }
                      })
                      return;
                    case 121:
                      user.requirements.core.CPSC.forEach(function (coreCS) {
                        if (coreCS.num == 121) {
                          coreCS.status = "complete"
                          user.requirements.core.counter++;
                        }
                      })
                      return;
                    case 210:
                      user.requirements.core.CPSC.forEach(function (coreCS) {
                        if (coreCS.num == 210) {
                          coreCS.status = "complete"
                          user.requirements.core.counter++;
                        }
                      })
                      return;
                    case 221:
                      user.requirements.core.CPSC.forEach(function (coreCS) {
                        if (coreCS.num == 221) {
                          coreCS.status = "complete"
                          user.requirements.core.counter++;
                        }
                      })
                      return;
                    case 213:
                      user.requirements.core.CPSC.forEach(function (coreCS) {
                        if (coreCS.num == 213) {
                          coreCS.status = "complete"
                          user.requirements.core.counter++;
                        }
                      })
                      console.log("should not have made it here " + course.dept + " " + course.num);
                      return;
                  }
                case "ENGL": if (course.num > 100) {
                  user.requirements.core.ENGL = "complete"
                  user.requirements.core.counter++;
                }
                  return;
                case "MATH": if (course.num === 180) {
                  user.requirements.core.MATH = "complete"
                  user.requirements.core.counter++;
                }
                  return;
                case "STAT": if (course.num === 200 || course.num === 203) {
                  user.requirements.core.STAT = "complete"
                  user.requirements.core.counter++;
                }
                  return;
                default: if (course.num >= 300) {
                  user.requirements.core.COMM = "complete"
                  user.requirements.core.counter++;
                }
                  return;
              }

            case "electives":
              switch (course.dept == "CPSC") {
                case (course.num < 300):
                  console.log("Not a valid elective " + course.dept + " " + course.num);
                  console.log("Usage: must be CPSC 300 or higher, and not a core requirement")
                  return;
                case (course.num < 400):
                  if (!course.consumed) {
                    user.requirements.elective[0]++;
                    course.consumed = true;
                    console.log("used " + course.dept + " " + course.num + " as 300 level elective")
                  }
                  return;
                default:
                  if (!course.consumed) {
                    user.requirements.elective[1]++;
                    course.consumed = true;
                    console.log("used " + course.dept + " " + course.num + " as 400 level elective")
                  }
                  return;
              }

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
              return;

            case "replacement":
              let courseLevel = Math.floor(course.num / 100) * 100;
              // remove highest possible replacement level
              if (user.requirements.replacements.includes(courseLevel)) {
                user.requirements.replacements.splice(
                  user.requirements.replacements.indexOf(courseLevel), 1);
                console.log("used " + course.dept + " " + course.num + " for an exemption replacement");
                return;
              } else if
                // replacement is higher level than needed (surpassing the requirement)
                (Math.max(...user.requirements.replacements) <= courseLevel) {
                user.requirements.replacements.splice(
                  user.requirements.replacements.indexOf(Math.max(...user.requirements.replacements)), 1);
                console.log("used " + course.dept + " " + course.num + " for an exemption replacement");
                return;
              } else { // course num must be too low to quailify
                console.log(course.dept + " " + course.num + " was not a valid exemption replacement");
              }
              return;
          } // end switch
        } catch (error) { } // do nothing 
      })
    }

    // stop infinite loop
    if (this.componentDidUpdate)
      Users.update({ "_id": user._id }, user)

    // Prepare for render 
    const coreComplete = user ? user.requirements.core.counter : ""
    const corePercent = user ? Math.floor((coreComplete / 12) * 100) : ""

    const bridgingComplete = user ? user.requirements.bridging.CPSC + user.requirements.bridging.OTHER : ""
    const bridgingPercent = user ? Math.floor(bridgingComplete / 5 * 100) : ""

    const electiveComplete = user ? user.requirements.elective[0] + user.requirements.elective[1] : ""
    const electivePercent = user ? Math.floor(electiveComplete / 6 * 100) : ""

    const replacementsLeft = user ? user.requirements.replacements.length : ""

    function makeView(course) {
      return (
        <p className="complete" key={shortid.generate()}>{course.dept} {course.num}</p>
      )
    }

    const postBridging = user ? (
      user.courses.map(course => {
        if (course.type === "bridging") {
          return makeView(course);
        }
      })
    ) : "";

    const PostElectives = user ? (
      user.courses.map(course => {
        if (course.type === "electives") {
          return makeView(course);
        }
      })
    ) : "";

    const postExemptionReplacements = user ? (
      user.courses.map(course => {
        if (course.type === "replacement") {
          return makeView(course);
        }
      })
    ) : "";

    // NOW FOR THE FINAL RETURN
    return (user ? (<div>
      <div className="ui bottom attached segment active tab">
        <Header as="h3" block>
          Core Progress: {corePercent}%
        </Header>
        <Progress percent={corePercent} color="olive" active />
        <p className={user.requirements.core.CPSC[0].status}>CPSC 110</p>
        <p className={user.requirements.core.CPSC[1].status}>CPSC 121</p>
        <p className={user.requirements.core.CPSC[2].status}>CPSC 210</p>
        <p className={user.requirements.core.CPSC[3].status}>CPSC 221</p>
        <p className={user.requirements.core.CPSC[4].status}>CPSC 213</p>
        <p className={user.requirements.core.CPSC[5].status}>CPSC 310</p>
        <p className={user.requirements.core.CPSC[6].status}>CPSC 313</p>
        <p className={user.requirements.core.CPSC[7].status}>CPSC 320</p>
        <p className={user.requirements.core.ENGL}> ENGL 100+</p>
        <p className={user.requirements.core.MATH}>MATH 180</p>
        <p className={user.requirements.core.STAT}>STAT 203</p>
        <p className={user.requirements.core.COMM}>300+ Communication Requirement</p>

        <Header as="h3" block>
          Bridging Progress: {bridgingPercent}%
          </Header>
        <Progress percent={bridgingPercent} color="violet" active />
        <p>You have completed {bridgingComplete} of 5 bridging courses</p>
        {postBridging}


        <Header as="h3" block>
          Elective Progress: {electivePercent}%
          </Header>
        <Progress percent={electivePercent} color="yellow" active />
        <p>You have completed {electiveComplete} of 6 electives</p>
        {PostElectives}

        <Header as="h3" block>
          Exemption Replacements Remaining: {replacementsLeft}
        </Header>
        <p>You have used the following exemption replacements</p>
        {postExemptionReplacements}

      </div>
    </div>
    ) : ""
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
