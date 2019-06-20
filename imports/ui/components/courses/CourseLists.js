// DI
import React, {Component} from 'react'

class CourseLists extends Component {
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
                        <ul className="collection ">
                            <li className="collection-item">
                                {course.dept}: {course.num} 
                                <button className="btn-flat right delete">
                                    <i className="small material-icons right">clear</i>
                                    </button>
                                
                            </li>
                        </ul>
                    </div>
                )
            })
        ) : ( <div className="courses container">
                <h3>no courses</h3>
              </div>)

        const postBridging = bridging.length ? (
            bridging.map(course => {
                return (
                    <div className="courses container">
                        <ul className="collection">
                            <li className="collection-item">
                                {course.dept}: {course.num}
                                <button className="btn-flat right delete">
                                    <i className="small material-icons right">clear</i>
                                    </button>
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
                <h4 className="center">Courses</h4>
                { postCourses }
                <h4 className="center">Bridging</h4>
                { postBridging }
            </div>
        )
    }
}
export default CourseLists
