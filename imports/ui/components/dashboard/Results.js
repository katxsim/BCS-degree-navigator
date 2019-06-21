import React, { Component } from 'react'
import { connect } from 'react-redux'

class Results extends Component {
    render() {
        const { courses } = this.props;
        // core
        let ENGL100 = "incomplete"; 
        let MATH180 = "incomplete";
        let STAT203 = "incomplete";
        let CPSC110 = "incomplete";
        let CPSC121 = "incomplete";
        let CPSC210 = "incomplete";
        let CPSC221 = "incomplete";
        let COMM300 = "incomplete";
        let CPSC213 = "incomplete";
        let CPSC310 = "incomplete";
        let CPSC313 = "incomplete";
        let CPSC320 = "incomplete";
        let CPSC300 = "incomplete";
        let CPSC301 = "incomplete";
        let CPSC302 = "incomplete";
        let CPSC400 = "incomplete";
        let CPSC401 = "incomplete";
        let CPSC402 = "incomplete";

        courses.core.forEach(function(course) {
            if (course.dept === "ENGL" && course.num >= 100) ENGL100 = "complete";
            if (course.dept === "MATH" && course.num == 180) MATH180 = "complete";
            if (course.dept === "STAT" && course.num == 203) STAT203 = "complete";
            if (course.dept === "CPSC" && course.num == 110) CPSC110 = "complete";
            if (course.dept === "CPSC" && course.num == 121) CPSC121 = "complete";
            if (course.dept === "CPSC" && course.num == 210) CPSC210 = "complete";
            if (course.dept === "CPSC" && course.num == 221) CPSC221 = "complete";
            if (course.dept === "ENGL" || course.dept === "SCIE" && course.num >= 300) COMM300 = "complete";
            if (course.dept === "CPSC" && course.num == 213) CPSC213 = "complete";
            if (course.dept === "CPSC" && course.num == 310) CPSC310 = "complete";
            if (course.dept === "CPSC" && course.num == 313) CPSC313 = "complete";
            if (course.dept === "CPSC" && course.num == 320) CPSC320 = "complete";
            if (course.dept === "CPSC" && course.num >= 300) CPSC300 = "complete";
            if (course.dept === "CPSC" && course.num >= 300) CPSC301 = "complete";
            if (course.dept === "CPSC" && course.num >= 300) CPSC302 = "complete";
            if (course.dept === "CPSC" && course.num >= 400) CPSC400 = "complete";
            if (course.dept === "CPSC" && course.num >= 400) CPSC401 = "complete";
            if (course.dept === "CPSC" && course.num >= 400) CPSC402 = "complete";
        });
        console.log(ENGL100)
        return (
            <div>
                <h4 className="center">Progress</h4>
                <div className="col s12 card">

                    <h5 className="center">Core</h5>
                    <progress max="18" value="8" className="col s12 core"/>
                    <p className={ENGL100}>ENGL 100+</p>
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
                    <progress max="5" value="1" className="col s12 bridging"/>
                    <p className="incomplete">1 out of 5</p>

                    <h5 className="center">Exemption Replacements</h5>
                    <progress max="3" value="3" className="col s12 replacements"/>
                    <p className="complete">all done</p>
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