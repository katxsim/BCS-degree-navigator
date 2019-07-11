import React, {Component} from 'react'
import Form from './Form'
import CourseList from './CourseList'
import PostForm from "../../../../client/PostForm";
import Progress from "./Progress";
import CourseList2 from "./CourseList2";
import Footer from "../layout/Footer";


class Dashboard extends Component {
    render() {
        return (


            <div className="dashboard container">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Welcome, Joe</h1>
                        <p className="lead">Here is your progress in the BCS Degree thus far.</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col s24 m14 l8">
                        <PostForm/>
                    </div>
                    <div className="col s24 m12 l8">
                        <CourseList2 />
                    </div>
                </div>
                <div>
                    <Progress/>
                    <Footer/>
                </div>
            </div>
        )
    }
}

export default Dashboard