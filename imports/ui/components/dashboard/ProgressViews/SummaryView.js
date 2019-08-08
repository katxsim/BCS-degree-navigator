import React, { Component } from "react";
import { Header, Progress, Message } from "semantic-ui-react";
import { createContainer } from "meteor/react-meteor-data";
import { userCourses } from "../../../../collections/userCourses";
import { updateRequirements } from "../../../../ComputeRequirements";
const shortid = require("shortid");

class SummaryView extends Component {
  render() {
    let user = this.props.user;

    try {
      let requirements = "";
      if (user.courses) {
        requirements = updateRequirements(user);
      }

      // load stats for render
      const creditsCompleted = user ? requirements.credits : 0;

      const coreComplete = user ? requirements.core.counter : "";
      const corePercent = user ? Math.floor((coreComplete / 12) * 100) : "";

      const bridgingComplete = user
        ? requirements.bridging.CPSC + requirements.bridging.OTHER
        : "";
      const bridgingPercent = user
        ? Math.floor((bridgingComplete / 5) * 100)
        : "";

      const electiveComplete = user
        ? requirements.elective[0] + requirements.elective[1]
        : "";
      const electivePercent = user
        ? Math.floor((electiveComplete / 6) * 100)
        : "";

      const replacementsLeft = user ? requirements.replacements.length : "";

      // these can probably be compressed!
      // not top priority right now, though. TODO

      const postBridging = user
        ? Object.values(user.courses).map(course => {
          if (course.type === "bridging") {
            return (
              <p className="complete" key={course.dept + course.num}>
                {course.dept} {course.num}
              </p>
            );
          }
        })
        : "";

      const PostElectives = user
        ? Object.values(user.courses).map(course => {
          if (course.type === "electives") {
            return (
              <p className="complete" key={course.dept + course.num}>
                {course.dept} {course.num}
              </p>
            );
          }
        })
        : "";

      const postExemptionReplacements = user
        ? Object.values(user.courses).map(course => {
          if (course.type === "replacement") {
            return (
              <p className="complete" key={course.dept + course.num}>
                {course.dept} {course.num}
              </p>
            );
          }
        })
        : "";

      if (requirements) {
        return (
          <div>
            <div className="ui bottom attached segment active tab">
              <Header className="reccy" as="h3" block>
                Overall Progress:
                <div className="reccy"></div>
                <Progress className="prog" percent={creditsCompleted / (63) * 100} color="violet" active big />
                <p>You have completed {creditsCompleted} credits of the minimum 63 required</p>
                <div className="reccy"></div>
              </Header>
              
              
              <Header className="reccy" as="h3" block>
                Core Progress: {corePercent}%
                <div className="reccy"></div>

              <Progress className="prog" percent={corePercent} color="olive" active big />
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
                <p className={requirements.core.COMM}>
                  300+ Communication Requirement
            </p>
            <div className="reccy"></div>
              </Header>

              <Header className="reccy" as="h3" block>
                Bridging Progress: {bridgingPercent}%
                <div className="reccy"></div>
              <Progress className="prog" percent={bridgingPercent} color="olive" large active />
                <p>You have completed {bridgingComplete} of 5 bridging courses</p>
                {postBridging}
                <div className="reccy"></div>
              </Header>

              <Header className="reccy" as="h3" block>
                Elective Progress: {electivePercent}%
                <div className="reccy"></div>
              <Progress className="prog" percent={electivePercent} color="olive" large active />
                <p>You have completed {electiveComplete} of 6 electives</p>
                {PostElectives}
                <div className="reccy"></div>
              </Header>

              <Header className="reccy" as="h3" block>
                Exemption Replacements Remaining: {replacementsLeft}

                <p>You have used the following exemption replacements:</p>
                {postExemptionReplacements}
                <div className="reccy"></div>
              </Header>
            </div>
          </div>
        );
      } else {
        // no user is loaded yet
        return <p className="loading">Loading...</p>;
      }
    } catch (error) {
      return ""
    }
  }
}


export default createContainer(() => {
  // Set up subscription
  Meteor.subscribe("users");
  // Return an object as props
  // console.log(Meteor.users.findOne(Meteor.userId()))
  return {
    user: Meteor.users.findOne({ "_id": Meteor.userId() })
  };
}, SummaryView);
