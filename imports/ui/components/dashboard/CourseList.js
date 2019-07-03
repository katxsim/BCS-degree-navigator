import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteCourse } from '../../actions/courseActions'

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
        console.log(courses);

        const postCore = courses ? (
            courses.map(course => {
                if (course.type == "core") {
                    return this.makeView(course);
                }
            })
        ) : (<div className="">
            <h6 className="left-align"> No Courses</h6>
        </div>)

        const postBridging = courses ? (
            courses.map(course => {
                if (course.type == "bridging")
                    return this.makeView(course);
            })
        ) : (<div className="courses container">
            <h6 className="left-align"></h6>
        </div>)

        const postExemptions = courses ? (
            courses.map(course => {
                if (course.type == "exemptions")
                    return this.makeView(course);
            })
        ) : (<div className="courses container">
            <h6 className="left-align"></h6>
        </div>)

        const postReplacements = courses ? (
            courses.map(course => {
                if (course.type == "replacements") {
                    console.log(course);
                    return this.makeView(course);
                }
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
                <p className="flow-text">Exemptions</p>
                {postExemptions}
                <p className="flow-text">Exemption Replacements</p>
                {postReplacements}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        courses: state.users[0].courses
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteCourse: (course) => { dispatch(deleteCourse(course)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseList)