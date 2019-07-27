import React, { Component } from "react";
import { Header, Progress, Message } from "semantic-ui-react";
import { createContainer } from "meteor/react-meteor-data";
import { Users } from "../../../collections/users";
import { updateRequirements } from "../../../ComputeRequirements"
const shortid = require("shortid");


class Progress1 extends Component {
  render() {
    const user = this.props.user
    let requirements = "";
    if (user) {
      requirements = updateRequirements(user)
    }

    // FIX ME // TODO
    //Users.update({ "_id": user2._id }, user2)

    // load stats for render 
    const coreComplete = requirements ? requirements.core.counter : "";
    const corePercent = coreComplete ? Math.floor((coreComplete / 12) * 100) : ""

    const bridgingComplete = requirements ? requirements.bridging.CPSC + requirements.bridging.OTHER : ""
    const bridgingPercent = bridgingComplete ? Math.floor(bridgingComplete / 5 * 100) : ""

    const electiveComplete = requirements ? requirements.elective[0] + requirements.elective[1] : ""
    const electivePercent = electiveComplete ? Math.floor(electiveComplete / 6 * 100) : ""

    const replacementsLeft = requirements ? requirements.replacements.length : ""

    // these can probably be compressed! 
    // not top priority right now, though. TODO
    const postBridging = user ? (
      Object.values(user.courses).map(course => {
        if (course.type === "bridging") {
          return (
            <p className="complete" key={shortid.generate()}>{course.dept} {course.num}</p>
          )
        }
      })
    ) : "";

    const PostElectives = user ? (
      Object.values(user.courses).map(course => {
        if (course.type === "electives") {
          return (
            <p className="complete" key={shortid.generate()}>{course.dept} {course.num}</p>
          )
        }
      })
    ) : "";

    const postExemptionReplacements = user ? (
      Object.values(user.courses).map(course => {
        if (course.type === "replacement") {
          return (
            <p className="complete" key={shortid.generate()}>{course.dept} {course.num}</p>
          )
        }
      })
    ) : "";

    // successful return
    if (requirements) {
      return (
        <div>
          <div className="ui bottom attached segment active tab">
            <Header as="h3" block>
              Core Progress: {corePercent}%
        </Header>
            {/* automate this? TODO Low Priority*/}
            <Progress percent={corePercent} color="olive" active />
            <p className={requirements.core.CPSC[0].status}>CPSC 110</p>
            <p className={requirements.core.CPSC[1].status}>CPSC 121</p>
            <p className={requirements.core.CPSC[2].status}>CPSC 210</p>
            <p className={requirements.core.CPSC[3].status}>CPSC 221</p>
            <p className={requirements.core.CPSC[4].status}>CPSC 213</p>
            <p className={requirements.core.CPSC[5].status}>CPSC 310</p>
            <p className={requirements.core.CPSC[6].status}>CPSC 313</p>
            <p className={requirements.core.CPSC[7].status}>CPSC 320</p>
            <p className={requirements.core.ENGL}> ENGL 100+</p>
            <p className={requirements.core.MATH}>MATH 180</p>
            <p className={requirements.core.STAT}>STAT 203</p>
            <p className={requirements.core.COMM}>300+ Communication Requirement</p>

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
      )
    } else {
      // no user is loaded yet
      return (<p className="loading">Loading...</p>)
    }
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