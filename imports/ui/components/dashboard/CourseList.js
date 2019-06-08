import React, { Component } from 'react'

class CourseList extends Component {

    render(){
        const core = [
            {dept: "CPSC", code: 110},
            {dept: "CPSC", code: 210},
            {dept: "MATH", code: 200},
        ]

        const bridging = [
            {dept: "STAT", code: 302}
        ]

        const exemptions = [
            {dept: "ENGL", code: 100},
            {dept: "ENGL", code: 101}
        ]

        const replacements = [
            {dept: "PHIL", code: 331}
        ]

        const postCore = core.length ? (
            core.map(course => {
                return (
                    <div>
                        <ul>
                            <li>
                                {course.dept} {course.code}
                            </li>
                        </ul>
                    </div>
                )
            })
        ) : ( 
            <div>
                <p className="center">no courses</p>
            </div>)

        const postBridging = bridging.length ? (
            bridging.map(course => {
                return (
                    <div>
                        <ul>
                            <li>
                                {course.dept} {course.code}
                            </li>
                        </ul>
                    </div>
                )
            })
        ) : ( 
            <div>
                <p className="center">no courses</p>
            </div>)

        const postExemptions = exemptions.length ? (
            exemptions.map(course => {
                return (
                    <div>
                        <ul>
                            <li>
                                {course.dept} {course.code}
                            </li>
                        </ul>
                    </div>
                )
            })
        ) : ( 
            <div>
                <p className="center">no courses</p>
            </div>)

        const postReplacements = replacements.length ? (
            replacements.map(course => {
                return (
                    <div>
                        <ul>
                            <li>
                                {course.dept} {course.code}
                            </li>
                        </ul>
                    </div>
                )
            })
        ) : ( 
            <div>
                <p className="center">no courses</p>
            </div>)

        return (
            <div className="post card column">
                <p className="center">Core</p>
                { postCore }
                <p className="center">Bridging</p>
                { postBridging }
                <p className="center">Exemptions</p>
                { postExemptions }
                <p className="center">Exemption Replacements</p>
                { postReplacements }
                <br/>
                <button type="button">Submit</button>
            </div>
        )
    }
}

export default CourseList