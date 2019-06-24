import React, { Component } from 'react'
import { connect } from 'react-redux'

class Results extends Component {

    render() {
        const { courses } = this.props;
        // core
        let requirements = [
            { "type": "core", "dept": ENGL, "num": 100, "status": "incomplete" },
            { "type": "core", "dept": MATH, "num": 180, "status": "incomplete" },
            { "type": "core", "dept": STAT, "num": 203, "status": "incomplete" },
            { "type": "core", "dept": CPSC, "num": 110, "status": "incomplete" },
            { "type": "core", "dept": CPSC, "num": 121, "status": "incomplete" },
            { "type": "core", "dept": CPSC, "num": 210, "status": "incomplete" },
            { "type": "core", "dept": CPSC, "num": 221, "status": "incomplete" },
            { "type": "core", "dept": COMM, "num": 300, "status": "incomplete" },
            { "type": "core", "dept": CPSC, "num": 213, "status": "incomplete" },
            { "type": "core", "dept": CPSC, "num": 310, "status": "incomplete" },
            { "type": "core", "dept": CPSC, "num": 313, "status": "incomplete" },
            { "type": "core", "dept": CPSC, "num": 320, "status": "incomplete" },
            { "type": "elective", "dept": CPSC, "num": 300, "status": "incomplete" },
            { "type": "elective", "dept": CPSC, "num": 301, "status": "incomplete" },
            { "type": "elective", "dept": CPSC, "num": 302, "status": "incomplete" },
            { "type": "elective", "dept": CPSC, "num": 400, "status": "incomplete" },
            { "type": "elective", "dept": CPSC, "num": 401, "status": "incomplete" },
            { "type": "elective", "dept": CPSC, "num": 402, "status": "incomplete" }
        ]

        function coreCoursesMatch (userCourse, requiredCourse) {
            if (userCourse.type === requiredCourse.type &&
                userCourse.dept === requiredCourse.dept &&
                userCourse.num === requiredCourse.num) {
                if (requiredCourse.status === "complete" ||
                    userCourse.status === "complete") {
                    alert("can't add same course twice")
                    return false;
                } else {
                    return true;
                }
            } 
            // if here then no match
            return false;
                

        }
        
        function checkRequirement(userCourse, requiredCourse) {
            // check specific course requirement
            if (coreCoursesMatch(userCourse, requiredCourse)) {
                userCourse.status = "complete"
                requiredCourse.status = "complete"
            }
            // check elective requirements
            else if (electiveCoursesMatch(userCourse, requiredCourse)) {

            }
                
            }

        

        courses.forEach(function (userCourse) {
            requirements.forEach(function (requiredCourse) {
                checkRequirement(userCourse, requiredCourse)
            })
        });

        return (
            <div>
                <h4 className="center">Progress</h4>
                <div className="col s12 card">

                    <h5 className="center">Core</h5>
                    <progress max="18" value="8" className="col s12 core" />
                    <p className={ENGL100}>ENGL 100</p>
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
                    <p className={CPSC402}>elective 400+</p>

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
        courses: state.courses
    }
}

export default connect(mapStateToProps, null)(Results)