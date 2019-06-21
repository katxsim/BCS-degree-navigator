import React, { Component } from 'react'
import { connect } from 'react-redux'

class CourseList extends Component {

    makeView = (course) => {
        return (
            <div className="courses-subContainer">
                <ul className="list">
                    <li key={course.id} className="left-align collection-item">
                        {course.dept}: {course.num}
                        <button className="btn-flat right delete">
                            <i className="small material-icons right">
                                clear
                        </i>
                        </button>
                    </li>
                </ul>
            </div>
        )
    }

    render() {
        const { courses } = this.props;

        const postCore = courses ? (
            courses.core.map(course => {
                return this.makeView(course);
            })
        ) : (<div className="courses container">
            <h6>no courses</h6>
        </div>)

        const postBridging = courses ? (
            courses.bridging.map(course => {                
                return this.makeView(course);
            })
        ) : (<div className="courses container">
            <h6>no courses</h6>
        </div>)

        const postExemptions = courses ? (
            courses.exemptions.map(course => {
                return this.makeView(course);
            })
        ) : (<div className="courses container">
            <h6>no courses</h6>
        </div>)

        const postReplacements = courses ? (
            courses.core.map(course => {
                return this.makeView(course);
            })
        ) : (<div className="courses container">
            <h6>no courses</h6>
        </div>)

        return (
            <div className="courses container center">
                <h4 className="courses center">Courses</h4>
                <h5 className="courses center">Core</h5>
                {postCore}
                <h5 className="courses center">Bridging</h5>
                {postBridging}
                <h5 className="courses center">Exemption Replacement</h5>
                {postReplacements}
                <h5 className="courses center">Exemptions</h5>
                {postExemptions}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        courses: state.courses
    }
}

export default connect(mapStateToProps, null)(CourseList)