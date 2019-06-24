import React, { Component } from 'react'
import { connect } from 'react-redux'

class Results extends Component {

    render() {
        const { user } = this.props; // 
        // core
        let requirements = [
            { "type": "core", "dept": "ENGL", "num": 100, "status": "incomplete", "complex": true },
            { "type": "core", "dept": "MATH", "num": 180, "status": "incomplete", "complex": false },
            { "type": "core", "dept": "STAT", "num": 203, "status": "incomplete", "complex": false },
            { "type": "core", "dept": "CPSC", "num": 110, "status": "incomplete", "complex": false },
            { "type": "core", "dept": "CPSC", "num": 121, "status": "incomplete", "complex": false },
            { "type": "core", "dept": "CPSC", "num": 210, "status": "incomplete", "complex": false },
            { "type": "core", "dept": "CPSC", "num": 221, "status": "incomplete", "complex": false },
            { "type": "core", "dept": "COMM", "num": 300, "status": "incomplete", "complex": true },
            { "type": "core", "dept": "CPSC", "num": 213, "status": "incomplete", "complex": false },
            { "type": "core", "dept": "CPSC", "num": 310, "status": "incomplete", "complex": false },
            { "type": "core", "dept": "CPSC", "num": 313, "status": "incomplete", "complex": false },
            { "type": "core", "dept": "CPSC", "num": 320, "status": "incomplete", "complex": false },
            { "type": "elective", "dept": "CPSC", "num": 300, "status": "incomplete", "complex": true },
            { "type": "elective", "dept": "CPSC", "num": 300, "status": "incomplete", "complex": true },
            { "type": "elective", "dept": "CPSC", "num": 300, "status": "incomplete", "complex": true },
            { "type": "elective", "dept": "CPSC", "num": 400, "status": "incomplete", "complex": true },
            { "type": "elective", "dept": "CPSC", "num": 400, "status": "incomplete", "complex": true },
            { "type": "elective", "dept": "CPSC", "num": 400, "status": "incomplete", "complex": true },
            { "type": "bridging", "dept": "", "num": 0, "status": "incomplete", "complex": false },
            { "type": "bridging", "dept": "", "num": 0, "status": "incomplete", "complex": false },
            { "type": "bridging", "dept": "", "num": 0, "status": "incomplete", "complex": false },
            { "type": "bridging", "dept": "", "num": 0, "status": "incomplete", "complex": false },
            { "type": "bridging", "dept": "", "num": 0, "status": "incomplete", "complex": false }
        ]

        // iterate over completed courses and compare to requirements
        // runs in O(n^2) can be improved? constant time? hashtable? 
        user.courses.forEach(function (userCourse) {
            requirements.forEach(function (requiredCourse) {
                if (checkRequirement(userCourse, requiredCourse)) {
                    userCourse.status = "complete"
                    requiredCourse.status = "complete"
                }
            })
        });

        function checkRequirement(userCourse, requiredCourse) {
            if (userCourse.type === "core" ||
                userCourse.type === "exemption" &&
                !alreadyComplete(userCourse, requiredCourse)) {
                checkIfValidCoreAndExemption(userCourse, requiredCourse)
            }
            else if
                (userCourse.type === "elective" &&
                !alreadyComplete(userCourse, requiredCourse)) {
                checkIfValidElective(userCourse, requiredCourse)
            }
            else if
                (userCourse.type === "bridging" &&
                !alreadyComplete(userCourse, requiredCourse)) {
                checkIfValidBridging(userCourse)
            }
            else if
                // done
                (userCourse.type === "replacement" &&
                !alreadyComplete(userCourse, requiredCourse)) {
                checkIfValidReplacement(userCourse)
            }
        }

        function checkIfValidCoreAndExemption(userCourse, requiredCourse) {
            // TODO
        }

        function checkIfValidElective(userCourse, requiredCourse) {
            // TODO
        }

        function checkIfValidBridging(userCourse) {
            if (user.bridgingCpscCounter > 2)
                alert("Warning: too many CPSC bridging courses"); // should never reach here
            if (userCourse.dept === "CPSC" &&
                user.bridgingCpscCounter >= 2) {
                alert("Warning: There are too many CPSC Bridging courses") // should never reach here
                return false;
            } else if (userCourse.num >= 300) return true;
            // if you reach here...
            return false;
        }

        // check for course level exemption allowance and if valid, 
        //remove it from exemption allowance
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
            if (requiredCourse.status === "complete" ||
                userCourse.status === "complete") {
                alert(" You can't add the same course twice :) ")
                return true;
            } else
                return false;
        }
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

                    <h5 className="center">Bridging</h5>
                    <progress max="5" value="1" className="col s12 bridging" />
                    <p className="incomplete">1 out of 5</p>

                    <h5 className="center">Exemption Replacements</h5>
                    <progress max="3" value="3" className="col s12 replacements" />
                    <p className="complete">5 out of 5 - CONGRATS!</p>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.users[0]
    }
}

export default connect(mapStateToProps, null)(Results)