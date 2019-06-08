// Danny is responsible
import React from 'react'

class CourseLists extends React.component {
    render(){
        const courses = [
            {"dept":"CPSC", "num":110},
            {"dept":"CPSC", "num":210},
            {"dept":"MATH", "num":200},
        ]
        const bridging = [
            {"dept":"STAT", "num":302}
        ]
        const postCourses = courses.length ? (
            courses.map(course => {
                return (
                    <div className="courses container">
                        <ul className="collection">
                            <li className="collection-item">
                                {course.dept} ": " {course.num}
                                <i className="small materialized-icons">clear</i>
                            </li>
                        </ul>
                    </div>
                )
            })
        ) : ( <div className="courses container">
                <h2>no courses</h2>
              </div>)

        const postBridging = bridging.length ? (
            bridging.map(course => {
                return (
                    <div className="courses container">
                        <ul className="collection">
                            <li className="collection-item">
                                {course.dept} ": " {course.num}
                                <i className="small materialized-icons">clear</i>
                            </li>
                        </ul>
                    </div>
                )
            })
        ) : ( <div className="courses container">
                <h2 className="center">no courses</h2>
              </div>)

        return (
            <div className="courses container">
                <h2 className="center">Courses</h2>
                { postCourses }
                <h2 className="center">Bridging</h2>
                { postBridging }
            </div>
        )
    }
}
export default CourseLists
