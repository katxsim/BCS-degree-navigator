import React from 'react';
import { Button, Form, Header, Image, List, Icon } from 'semantic-ui-react'
import { Users } from "../../../collections/users";
import { BaseRequirements } from "../../../ComputeRequirements";
import { createContainer } from "meteor/react-meteor-data";

const shortid = require("shortid");

class CourseList extends React.Component {

    handleDelete = (course, user) => {
        delete user.courses[course.dept + course.num]
        Users.update({ "_id": user._id }, user);
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
                        <Image circular
                            src="https://www.pngkey.com/png/detail/113-1132113_image-royalty-free-library-rocking-clipart-grey-rock.png" />
                        Core
                    </Header>
                    <List.Content floated='right'>
                    </List.Content>
                    <List.Content>{postCore}</List.Content>
                </List.Item>


                <List.Item >

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

                <List.Item >
                    <Header size="large">
                        <Image circular
                            src='https://cdn.iconscout.com/icon/premium/png-512-thumb/initializing-7-386139.png' />
                        Exemption Replacements
                    </Header>
                    <List.Content floated='right'>
                    </List.Content>
                    <List.Content>{postReplacements}</List.Content>
                </List.Item>

                <List.Item >
                    <Header size="large">
                        <Icon name='computer' size='large' />
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
    // Return an object as props
    return ({
        user: Users.find({ email: "test1@gmail.com" }).fetch()[0]
    });
}, CourseList);