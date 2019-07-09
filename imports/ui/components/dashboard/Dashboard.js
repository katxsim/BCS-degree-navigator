import React, {Component} from 'react'
import Form from './Form'
import CourseList from './CourseList'
import PostForm from "../../../../client/PostForm";


class Dashboard extends Component {
    render() {
        return (


            <div className="dashboard container">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Welcome, {name}</h1>
                        <p className="lead">Here is your progress in the BCS Degree thus far.</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col s24 m14 l8">
                        <Form />
                        <PostForm/>
                    </div>
                    <div className="col s24 m12 l8">
                        <CourseList />
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard