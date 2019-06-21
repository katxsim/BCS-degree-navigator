import React, { Component } from 'react'
import { connect } from 'react-redux'

class CourseList extends Component {

    makeView = (course) => {
        return (

            <ul className="collections">
                <li className="collection-item">
                    {course.dept}: {course.num}
                    <button className="btn-flat right delete">
                        <i className="small material-icons right">
                            clear
                        </i>
                    </button>
                </li>
            </ul>
        )
    }

    render() {
        const { courses } = this.props;

        const postCore = courses.length ? (
            courses.core.map(course => {
                return this.makeView(course);
            })
        ) : (<div className="courses container">
            <h3>no courses</h3>
        </div>)

        const postBridging = courses.length ? (
            courses.bridging.map(course => {
                return this.makeView(course);
            })
        ) : (<div className="courses container">
            <h3>no courses</h3>
        </div>)

        const postExemptions = courses.length ? (
            courses.exemptions.map(course => {
                return this.makeView(course);
            })
        ) : (<div className="courses container">
            <h3>no courses</h3>
        </div>)

        const postReplacements = courses.length ? (
            courses.core.map(course => {
                return this.makeView(course);
            })
        ) : (<div className="courses container">
            <h3>no courses</h3>
        </div>)

        return (
            <div className="courses container center">
                <h4 className="courses center">Courses</h4>
                <h5 className="courses center">Core</h5>
                { postCore }
                <h5 className="courses center">Bridging</h5>
                { postBridging }
                <h5 className="courses center">Exemption Replacement</h5>
                { postReplacements }
                <h5 className="courses center">Exemptions</h5>
                { postExemptions }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        "courses": state.courses
    }
}

export default connect(mapStateToProps, null)(CourseList)