import React from 'react';
import { Button, Form, Header, Image, List, Icon, Popup } from 'semantic-ui-react'
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
                    <h6 className="left-align"> </h6>
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
                        <Popup
      trigger={<Button icon='cubes' />}
      content='These are core courses that everyone takes... unless you are exempt! See "Exemptions" for more details.'
      inverted
      size="large"
    />
                        Core
                    </Header>
                    <List.Content floated='right'>
                    </List.Content>
                    <List.Content>{postCore}</List.Content>
                </List.Item>


                <List.Item >
                    <Header size="large">
                        <Popup
      trigger={<Button icon='connectdevelop' />}
      content='The Bridging Module consists of a coherent set of 15 credits of upper-level courses (i.e. courses numbered 300 or above). 
      The Bridging Module may consist of no more than two upper-level Computer Science courses. The upper-level Computer Science courses in the Bridging Module are over and above the 21 credits of upper-level Computer Science listed in the Academic Schedule.'
      inverted
      size="large"
    />
                        Bridging
                    </Header>
                    <List.Content floated='right'>
                    </List.Content>
                    <List.Content>{postBridging}</List.Content>
                </List.Item>


                <List.Item>

                    <Header size="large">
                    <Popup
      trigger={<Button icon='tasks' />}
      content='You may be "exempt" from some of the lower-level (1xx or 2xx) required courses and the upper-level communication requirement if you have taken a similar course that fulfills this requirement (and has been approved by the program director).'
      inverted
      size="large"
    />
                        Exemptions
                    </Header>
                    <List.Content floated='right'>
                    </List.Content>
                    <List.Content>{postExemptions}</List.Content>
                </List.Item>

                <List.Item>
                    <Header size="large">
                        <Popup
      trigger={<Button icon='sync alternate' />}
      content='After receiving an exemption, you must replace it with an equal or higher level course. An exemption from the upper-level communication requirement must be replaced with a 3-credit course numbered 300 or above.'
      inverted
      size="large"
    />
                        Exemption Replacements
                    </Header>
                    <List.Content floated='right'>
                    </List.Content>
                    <List.Content>{postReplacements}</List.Content>
                </List.Item>

                <List.Item>
                    <Header size="large">
                    <Popup
      trigger={<Button icon='laptop' />}
      content='CPSC 3xx - 6 credits of CPSC electives numbered 300 or above.
      CPSC 4xx - 6 credits of CPSC electives numbered 400 or above.'
      inverted
      size="large"
    />
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