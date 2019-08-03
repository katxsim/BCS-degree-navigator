import React from 'react';
import { Button, Form, Header, Image, List, Icon } from 'semantic-ui-react'
import { createContainer } from "meteor/react-meteor-data";

const shortid = require("shortid");

class CourseList extends React.Component {

    handleDelete = (course, user) => {
        delete user.courses[course.dept + course.num]
        Meteor.call('updateUser', user);

    }




    makeView = (course, user) => {
        return (
            <List divided verticalAlign='middle' size='small' key={course.dept + course.num}>

                <List.Item>
                    <List.Content floated='right'>
                        <Button onClick={() => this.handleDelete(course, user)}>Delete</Button>
                    </List.Content>
                    <Icon name='check circle' size='large' />
                    <List.Content>{course.dept}: {course.num}</List.Content>
                </List.Item>

            </List>
        );
    };

    render() {
        const user = this.props.user;
        const courses = user ? user.courses : "";

        const postCore = courses ? (
            Object.values(courses).map(course => {
                if (course.type == "core") {
                    return this.makeView(course, user);
                }
            })
        ) : (
                <div className="">
                    <h6 className="left-align"> No Courses</h6>
                </div>
            );

        const postBridging = courses ? (
            Object.values(courses).map(course => {
                if (course.type == "bridging") return this.makeView(course, user);
            })
        ) : (
                <div className="courses container">
                    <h6 className="left-align" />
                </div>
            );

        const postExemptions = courses ? (
            Object.values(courses).map(course => {
                if (course.type == "exemptions") return this.makeView(course, user);
            })
        ) : (
                <div className="courses container">
                    <h6 className="left-align" />
                </div>
            );

        const postReplacements = courses ? (
            Object.values(courses).map(course => {
                if (course.type == "replacement") {
                    return this.makeView(course, user);
                }
            })
        ) : (
                <div className="courses container">
                    <h6 className="left-align" />
                </div>
            );

        const postElectives = courses ? (
            Object.values(courses).map(course => {
                if (course.type == "electives") {
                    return this.makeView(course, user);
                }
            })
        ) : (
                <div className="courses container">
                    <h6 className="left-align" />
                </div>
            );

        return (
            <List divided verticalAlign='middle' size='medium'>
                <List.Item >
                    <Header size="large">
                        <Icon name='cubes' size='large' />
                        Core
                    </Header>
                    <List.Content floated='right'>
                    </List.Content>
                    <List.Content>{postCore}</List.Content>
                </List.Item>


                <List.Item >
                    <Header size="large">
                        <Icon name='connectdevelop' size='large' />
                        Bridging
                    </Header>
                    <List.Content floated='right'>
                    </List.Content>
                    <List.Content>{postBridging}</List.Content>
                </List.Item>


                <List.Item>

                    <Header size="large">
                        <Icon name='tasks' size='large' />
                        Exemptions
                    </Header>
                    <List.Content floated='right'>
                    </List.Content>
                    <List.Content>{postExemptions}</List.Content>
                </List.Item>

                <List.Item>
                    <Header size="large">
                        <Icon name='sync alternate' size='large' />
                        Exemption Replacements
                    </Header>
                    <List.Content floated='right'>
                    </List.Content>
                    <List.Content>{postReplacements}</List.Content>
                </List.Item>

                <List.Item>
                    <Header size="large">
                        <Icon name='laptop' size='large' />
                        CPSC Electives
                    </Header>
                    <List.Content floated='right'>
                    </List.Content>
                    <List.Content>{postElectives}</List.Content>
                </List.Item>


            </List>
        );


    }
}

export default createContainer(() => {
    // Set up subscription
    Meteor.subscribe("users");
    // console.log(Meteor.users.findOne({ "_id": Meteor.userId() }))
    // Return an object as props
    if (!Meteor.userId()) {
        return ({
            "name": "test account",
            "password": "hashed",
            "email": " how do I sign in?"
        })
    }
    return ({
        user: Meteor.users.findOne({ "_id": Meteor.userId() })
    });
}, CourseList); 