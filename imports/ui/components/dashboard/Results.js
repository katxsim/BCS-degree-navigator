import React, { Component } from 'react'
import { createContainer } from "meteor/react-meteor-data";

import { connect } from 'react-redux'
import {Users} from "../../../collections/users";


const shortid = require('shortid');

class Results extends Component {

    render() {
        const  user  =  {
            "email": "test1@gmail.com",
            "firstName": "test1",
            "lastName": "test1",
            "creditsEarned": 0,
            "bridgingCpscCounter": 0,
            "electiveCounter": [3, 0], // counts num 300, 400 electives
            "exemptionLevels": [100, 200, 300], // update this when adding exemption and sort it
            "courses": [
                { "type": "core", "dept": "CPSC", "num": 110, "id": shortid.generate() },
                { "type": "core", "dept": "CPSC", "num": 210, "id": shortid.generate() },
                // { "type": "core", "dept": "ENGL", "num": 110, "id": shortid.generate() },
                { "type": "core", "dept": "MATH", "num": 200, "id": shortid.generate() },
                { "type": "bridging", "dept": "STAT", "num": 302, "id": shortid.generate() },
                { "type": "bridging", "dept": "STAT", "num": 305, "id": shortid.generate() },
                { "type": "bridging", "dept": "STAT", "num": 306, "id": shortid.generate() },
                { "type": "exemptions", "dept": "ENGL", "num": 110, "id": shortid.generate() },
                { "type": "exemptions", "dept": "STAT", "num": 200, "id": shortid.generate() },
                { "type": "exemptions", "dept": "MATH", "num": 180, "id": shortid.generate() },
                { "type": "replacement", "dept": "MATH", "num": 221, "id": shortid.generate() },
                { "type": "replacement", "dept": "MATH", "num": 200, "id": shortid.generate() },
                { "type": "replacement", "dept": "DSCI", "num": 100, "id": shortid.generate() }
            ] // end courses
        } // end user; //
        // core
        let requirements = [
            { "type": "core", "dept": "ENGL", "num": 100, "status": "incomplete", "credits": 3 },
            { "type": "core", "dept": "MATH", "num": 180, "status": "incomplete", "credits": 3 },
            { "type": "core", "dept": "STAT", "num": 203, "status": "incomplete", "credits": 3 },
            { "type": "core", "dept": "CPSC", "num": 110, "status": "incomplete", "credits": 4 },
            { "type": "core", "dept": "CPSC", "num": 121, "status": "incomplete", "credits": 4 },
            { "type": "core", "dept": "CPSC", "num": 210, "status": "incomplete", "credits": 4 },
            { "type": "core", "dept": "CPSC", "num": 221, "status": "incomplete", "credits": 4 },
            { "type": "core", "dept": "COMM", "num": 300, "status": "incomplete", "credits": 3 },
            { "type": "core", "dept": "CPSC", "num": 213, "status": "incomplete", "credits": 4 },
            { "type": "core", "dept": "CPSC", "num": 310, "status": "incomplete", "credits": 4 },
            { "type": "core", "dept": "CPSC", "num": 313, "status": "incomplete", "credits": 3 },
            { "type": "core", "dept": "CPSC", "num": 320, "status": "incomplete", "credits": 3 },
            { "type": "elective", "dept": "CPSC", "num": 300, "status": "incomplete", "credits": 3 },
            { "type": "elective", "dept": "CPSC", "num": 300, "status": "incomplete", "credits": 3 },
            { "type": "elective", "dept": "CPSC", "num": 300, "status": "incomplete", "credits": 3 },
            { "type": "elective", "dept": "CPSC", "num": 400, "status": "incomplete", "credits": 3 },
            { "type": "elective", "dept": "CPSC", "num": 400, "status": "incomplete", "credits": 3 },
            { "type": "elective", "dept": "CPSC", "num": 400, "status": "incomplete", "credits": 3 },
            { "type": "bridging", "dept": "", "num": 0, "status": "incomplete", "credits": 3 },
            { "type": "bridging", "dept": "", "num": 0, "status": "incomplete", "credits": 3 },
            { "type": "bridging", "dept": "", "num": 0, "status": "incomplete", "credits": 3 },
            { "type": "bridging", "dept": "", "num": 0, "status": "incomplete", "credits": 3 },
            { "type": "bridging", "dept": "", "num": 0, "status": "incomplete", "credits": 3 }
        ]

        // iterate over completed courses and compare to requirements, one by one
        // runs in O(n^2) can be improved? constant time? hashtable? 
        // given a course have direct access to a lookup of the required course
        user.courses.forEach(function (userCourse) {
            requirements.forEach(function (requiredCourse) {
                if (checkRequirements(userCourse, requiredCourse)) {
                    userCourse.status = "complete"
                    requiredCourse.status = "complete"
                    user.credits += userCourse.credits; // TODO verify this is the only place adding credits
                }
            })
        });

        function checkRequirements(userCourse, requiredCourse) {
            if (userCourse.type === "core" ||
                userCourse.type === "exemption" &&
                !alreadyComplete(userCourse, requiredCourse)) {
                return checkIfValidCoreAndExemption(userCourse, requiredCourse)
            }
            else if
                (userCourse.type === "elective" &&
                !alreadyComplete(userCourse, requiredCourse)) {
                return checkIfValidElective(userCourse)
            }
            else if
                (userCourse.type === "bridging" &&
                !alreadyComplete(userCourse, requiredCourse)) {
                return checkIfValidBridging(userCourse)
            }
            else if
                (userCourse.type === "exemption replacement" &&
                !alreadyComplete(userCourse, requiredCourse)) {
                return checkIfValidReplacement(userCourse)
            }
            // alert(`Warning: In uncharted territory with ${userCourse.dept} ${userCourse.num}`)
            return true; // let them add it anyway, we should never get here, that's what the logging is for
        }

        function checkIfValidCoreAndExemption(userCourse, requiredCourse) {
            if (userCourse.dept === "ENGL" &&
                requiredCourse.dept === "ENGL" &&
                userCourse.num >= 100) {
                return true;
            }
            // 300 level communication requirement
            if (userCourse.dept === "ENGL" ||
                userCourse.dept === "COMM" ||
                userCourse.dept === "SCIE" ||
                userCourse.dept === "BUSI" &&
                userCourse.num >= 300 &&
                requiredCourse.dept === "COMM") {
                return true;
            }
            // clearcut core requirement 
            if (userCourse.dept === requiredCourse.dept &&
                userCourse.num === requiredCourse.num)
                return true;
        }

        function checkIfValidElective(userCourse) {
            // this is designed off of cross table, like in 110
            if (userCourse.dept !== "CPSC") return false; // elective must be cpsc
            if (userCourse.num < 300) return false; // elective must be > 300
            if (userCourse.num < 400 &&
                user.electiveCounter[0] < 3) {
                ++user.electiveCounter[0];
                return true;
            }
            if (userCourse.num >= 400 &&
                user.electiveCounter[1] < 3) {
                ++user.electiveCounter[1];
                return true;
            }
            if (userCourse.num >= 400 &&
                user.electiveCounter[1] >= 3) {
                alert(`Warning: ${userCourse.dept} ${userCourse.num} is a superfluous course`)
                return true; // let them take it anyway 
            }
            if (userCourse.num < 400 &&
                user.electiveCounter[0] >= 3) {
                alert(`Warning: ${userCourse.dept} ${userCourse.num} is a superfluous course`)
                return true; // let them take it anyway this alert will pop up on every reload TODO
            } else {
                // they have finished all of their electives
                return true; // to let them add course, but it is superfluous
            }

        }

        function checkIfValidBridging(userCourse) {
            // guard from excessive CPSC courses
            if (user.bridgingCpscCounter > 2)
                alert("Warning: too many CPSC bridging courses"); // should never reach here
            if (userCourse.dept === "CPSC" &&
                user.bridgingCpscCounter >= 2) {
                alert("Warning: There are too many CPSC Bridging courses") // should never reach here
                return false;
                // otherwise good to add
            } else if (userCourse.num >= 300) return true;
            // otherwise the course is below 300
            return false;
        }

        function checkIfValidReplacement(userCourse) {
            let courseLevel = Math.floor(userCourse.num / 100) * 100;
            // best case, course level matches an exemption level
            if (user.exemptionLevels.includes(courseLevel)) {
                // remove exemption allowance from list since it is being used
                user.exemptionLevels.splice(user.exemptionLevels.indexOf(courseLevel), 1);
                return true;
            } else if
                // replacement is higher level than needed (surpassing the requirement)
                (Math.max(user.exemptionLevels) <= courseLevel) {
                user.exemptionLevels.splice(
                    user.exemptionLevels.indexOf(Math.max(user.exemptionLevels)), 1);
                return true;
            } else { // your replacement is below the exemption level required
                return false;
            }
        }

        function alreadyComplete(userCourse, requiredCourse) {
            if (userCourse.dept === "ENGL" &&
                requiredCourse.dept === "ENGL" &&
                requiredCourse.status === "complete") {
                alert(`you have already met the 100 level english requirement`)
                return true;
            }
            if (userCourse.dept === "ENGL" ||
                userCourse.dept === "COMM" ||
                userCourse.dept === "BUSI" ||
                userCourse.dept === "SCIE" &&
                userCourse.num >= 300 &&
                requiredCourse.dept === "COMM" &&
                requiredCourse.status === "complete") {
                alert(`You have already met the 300 level communication requirement`)
                return true;
            }
            if (userCourse.dept === requiredCourse.dept &&
                userCourse.num === requiredCourse.num &&
                (requiredCourse.status === "complete" ||
                    userCourse.status === "complete")) {
                alert(`Warning: You have already taken ${userCourse.dept} ${userCourse.num}`)
                return true;
            } else
                return false; // success
        }

        // I want to make an array of p tags populated dynamically, example: 
        //<p className={course.status}>{course.dept} {course.num}</p>
        // let htmlArray = requirements.forEach(function(course) {
        //     coreArray.push("somehow generate valid html here")
        // })

        // htmlArray

        return (
            <div>
                <h4 className="center">Progress</h4>
                <div className="col s12 card">

                    <h5 className="center">Core</h5>
                    <progress max="18" value="8" className="col s12 core" />
                    {/* iterate to produce array of divs which can be inserted */}
                    {/* <p className={ENGL100}>ENGL 100</p>
                    <p className={MATH180}>MATH 180</p>
                    <p className={STAT203}>STAT 203</p>
                    <p className={CPSC110}>CPSC 110</p>
                    <p className={CPSC121}>CPSC 121</p>
                    <p className={CPSC210}>CPSC 210</p>
                    <p className={CPSC221}>CPSC 221</p>
                    <p className={COMM300}>Communication 300+</p>
                    <p className={CPSC213}>CPSC 213</p>
                    <p className={CPSC310}>CPSC 310</p>
                    <p className={CPSC313}>CPSC 313</p>
                    <p className={CPSC320}>CPSC 320</p>
                    <p className={CPSC300}>elective 300+</p>
                    <p className={CPSC301}>elective 300+</p>
                    <p className={CPSC302}>elective 300+</p>
                    <p className={CPSC400}>elective 400+</p>
                    <p className={CPSC401}>elective 400+</p>
                    <p className={CPSC402}>elective 400+</p> */}
                </div>
            </div>
        )
    }
}

export default Results