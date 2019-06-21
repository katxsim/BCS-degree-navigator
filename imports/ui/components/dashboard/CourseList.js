import React, { Component } from 'react'
import { connect } from 'react-redux'
const shortid = require('shortid');

class CourseList extends Component {

    handleDelete = (course) => {
        this.props.deleteCourse(course);
    }

    makeView = (course) => {
        return (
            <div key={shortid.generate()} className="col s12 left-align collection-item z-depth-1 white section">
                <ul key={shortid.generate()}>
                    <li key={course.id}>
                        {course.dept}: {course.num}
                        <button
                            className="btn-flat right delete"
                            onClick={() => this.handleDelete(course)}>
                            <i className="small material-icons right">clear</i>
                        </button>
                    </li>
                </ul>
            </div>
        )
    }

    render() {
        const { courses } = this.props;

        const postCore = courses.core ? (
            courses.core.map(course => {
                return this.makeView(course);
            })
        ) : (<div className="">
            <h6 className="left-align"> No Courses</h6>
        </div>)

        const postBridging = courses.bridging ? (
            courses.bridging.map(course => {
                return this.makeView(course);
            })
        ) : (<div className="courses container">
            <h6 className="left-align"></h6>
        </div>)

        const postExemptions = courses.exemptions ? (
            courses.exemptions.map(course => {
                return this.makeView(course);
            })
        ) : (<div className="courses container">
            <h6 className="left-align"></h6>
        </div>)

        const postReplacements = courses.replacements ? (
            courses.core.map(course => {
                return this.makeView(course);
            })
        ) : (<div className="courses container">
            <h6 className="left-align"></h6>
        </div>)

        return (
            <div className="center">
                <h4>Courses</h4>
                <p className="flow-text">Core</p>
                {postCore}
                <p className="flow-text">Bridging</p>
                {postBridging}
                <p className="flow-text">Exemption Replacement</p>
                {postReplacements}
                <p className="flow-text">Exemptions</p>
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
const mapDispatchToProps = (dispatch) => {
    return {
        deleteCourse: (course) => { dispatch({ type: 'DELETE_COURSE', course }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseList)