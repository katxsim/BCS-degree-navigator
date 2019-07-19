import React from 'react';
import { Button, Form, Header, Image, List } from 'semantic-ui-react'
import { Courses } from "../../../../imports/collections/courses";
import { createContainer } from "meteor/react-meteor-data";


const shortid = require("shortid");

class CourseList2 extends React.Component {
    handleDelete = course => {
        Courses.remove(course._id);
        console.log(Courses)
    };

    makeView = course => {
        return (
            <List divided verticalAlign='middle' size='small'>

                <List.Item key={shortid.generate()}>
                    <List.Content key={course._id} floated='right'>
                        <Button onClick={() => this.handleDelete(course)}>Delete</Button>
                    </List.Content>
                    <Image avatar className="core" src='http://clipart-library.com/images/6iyooG6bT.png' />
                    <List.Content>{course.dept}: {course.num}</List.Content>
                </List.Item>


            </List>
        );
    };



    render() {
        const courses = this.props.courses;
        console.log(this.props);
        console.log(courses);

        const postCore = courses ? (
            courses.map(course => {
                if (course.type == "core") {
                    return this.makeView(course);
                }
            })
        ) : (
                <div className="">
                    <h6 className="left-align"> No Courses</h6>
                </div>
            );

        const postBridging = courses ? (
            courses.map(course => {
                if (course.type == "bridging") return this.makeView(course);
            })
        ) : (
                <div className="courses container">
                    <h6 className="left-align" />
                </div>
            );

        const postExemptions = courses ? (
            courses.map(course => {
                if (course.type == "exemptions") return this.makeView(course);
            })
        ) : (
                <div className="courses container">
                    <h6 className="left-align" />
                </div>
            );

        const postReplacements = courses ? (
            courses.map(course => {
                if (course.type == "exemption replacement") {
                    console.log(course);
                    return this.makeView(course);
                }
            })
        ) : (
                <div className="courses container">
                    <h6 className="left-align" />
                </div>
            );

        return (
            <List divided verticalAlign='middle' size='huge'>


                <List.Item>
                    <Header size="large">
                        <Image circular
                            src="https://www.pngkey.com/png/detail/113-1132113_image-royalty-free-library-rocking-clipart-grey-rock.png" />
                        Core
                    </Header>
                    <List.Content floated='right'>
                    </List.Content>
                    <List.Content>{postCore}</List.Content>
                </List.Item>


                <List.Item>

                    <Header size="large">
                        <Image circular
                            src='http://clipart-library.com/img/1005262.jpg' />
                        Bridging
                    </Header>
                    <List.Content floated='right'>
                    </List.Content>
                    <List.Content>{postBridging}</List.Content>
                </List.Item>


                <List.Item>

                    <Header size="large">
                        <Image circular
                            src="https://cdn2.iconfinder.com/data/icons/cloud-12/164/12-512.png" />
                        Exemptions
                    </Header>
                    <List.Content floated='right'>
                    </List.Content>
                    <List.Content>{postExemptions}</List.Content>
                </List.Item>

                <List.Item>
                    <Header size="large">
                        <Image circular
                            src='https://cdn.iconscout.com/icon/premium/png-512-thumb/initializing-7-386139.png' />
                        Exemption Replacements
                    </Header>
                    <List.Content floated='right'>
                    </List.Content>
                    <List.Content>{postReplacements}</List.Content>
                </List.Item>
            </List>
        );
    }
}

export default createContainer(() => {
    // Set up subscription
    Meteor.subscribe("courses");
    // Return an object as props
    return { courses: Courses.find({}).fetch() };
}, CourseList2);