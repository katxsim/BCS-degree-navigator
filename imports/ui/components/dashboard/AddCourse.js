import React from 'react';
import { Container, Form, Button, Header, Popup, Grid } from 'semantic-ui-react'
import { createContainer } from "meteor/react-meteor-data";
import { Users } from "../../../collections/users";
const shortid = require("shortid");

class AddCourse extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dept: '', num: '', grade: '', type: '' };
    }

    handleDeptChange = e =>
        this.setState({
            dept: e.target.value
        });

    handleNumChange = e =>
        this.setState({
            num: e.target.value
        });

    handleGradeChange = e =>
        this.setState({
            grade: e.target.value
        });

    handleCoreChange = e =>
        this.setState({
            type: e.target.value
        });

    handleBridgingChange = e =>
        this.setState({
            type: e.target.value
        });

    handleExemptionChange = e =>
        this.setState({
            type: e.target.value
        });

    handleReplacementChange = e =>
        this.setState({
            type: e.target.value
        });

    handleElectiveChange = e =>
        this.setState({
            type: e.target.value
        });

    handleENGL112ChangeCore(event) {
        event.preventDefault();
        let user = this.props.user
        let courses = user.courses
        if (!Object.keys(courses).includes("ENGL112")) {
            courses["ENGL112"] = {
                "type": "core",
                "dept": "ENGL",
                "num": 112,
            }
        } else {
            alert("You have already completed the ENGL requirement");
        }
        user.courses = courses;
        Users.update({ "_id": user._id }, user)
    }

    handleENGL112ChangeExempt(event) {
        event.preventDefault();
        let user = this.props.user
        let courses = user.courses
        console.log(user)
        if (!Object.keys(courses).includes("ENGL112")) {
            courses["ENGL112"] = {
                "type": "exemptions",
                "dept": "ENGL",
                "num": 112,
            }
        } else {
            alert("You have already completed the ENGL requirement");
        }
        user.courses = courses;
        Users.update({ "_id": user._id }, user)
    }

    handleCPSC110ChangeCore(event) {
        event.preventDefault();
        let user = this.props.user
        let courses = user.courses
        if (!Object.keys(courses).includes("CPSC110")) {
            courses["CPSC110"] = {
                "type": "core",
                "dept": "CPSC",
                "num": 110,
            }
        } else {
            alert("You have already completed the CPSC 110 Requirement");
        }
        user.courses = courses;
        Users.update({ "_id": user._id }, user)
    }

    handleCPSC110ChangeExempt(event) {
        event.preventDefault();
        let user = this.props.user
        let courses = user.courses
        if (!Object.keys(courses).includes("CPSC110")) {
            courses["CPSC110"] = {
                "type": "exemptions",
                "dept": "CPSC",
                "num": 110,
            }
        } else {
            alert("You have already completed the CPSC 110 Requirement");
        }
        user.courses = courses;
        Users.update({ "_id": user._id }, user)
    }

    handleSTAT203ChangeCore(event) {
        event.preventDefault();
        let user = this.props.user
        let courses = user.courses
        if (!Object.keys(courses).includes("STAT203")) {
            courses["STAT203"] = {
                "type": "core",
                "dept": "STAT",
                "num": 203,
            }
        } else {
            alert("You have already completed the STAT 203 Requirement");
        }
        user.courses = courses;
        Users.update({ "_id": user._id }, user)
    }

    handleSTAT203ChangeExempt(event) {
        event.preventDefault();
        let user = this.props.user
        let courses = user.courses
        if (!Object.keys(courses).includes("STAT203")) {
            courses["STAT203"] = {
                "type": "exemptions",
                "dept": "STAT",
                "num": 203,
            }
        } else {
            alert("You have already completed the STAT 203 Requirement");
        }
        user.courses = courses;
        Users.update({ "_id": user._id }, user)
    }


    handleMATH180ChangeCore(event) {
        event.preventDefault();
        let user = this.props.user
        let courses = user.courses
        if (!Object.keys(courses).includes("MATH180")) {
            courses["MATH180"] = {
                "type": "core",
                "dept": "MATH",
                "num": 180,
            }
        } else {
            alert("You have already completed the MATH 180 Requirement");
        }
        user.courses = courses;
        Users.update({ "_id": user._id }, user)
    }

    handleMATH180ChangeExempt(event) {
        event.preventDefault();
        let user = this.props.user
        let courses = user.courses
        if (!Object.keys(courses).includes("MATH180")) {
            courses["MATH180"] = {
                "type": "exemptions",
                "dept": "MATH",
                "num": 180,
            }
        } else {
            alert("You have already completed the MATH 180 Requirement");
        }
        user.courses = courses;
        Users.update({ "_id": user._id }, user)
    }
    // cpsc121 cpsc210

    handleCPSC121ChangeCore(event) {
        event.preventDefault();
        let user = this.props.user
        let courses = user.courses
        if (!Object.keys(courses).includes("CPSC121")) {
            courses["CPSC121"] = {
                "type": "core",
                "dept": "CPSC",
                "num": 121,
            }
        } else {
            alert("You have already completed the CPSC 121 Requirement");
        }
        user.courses = courses;
        Users.update({ "_id": user._id }, user)
    }

    handleCPSC121ChangeExempt(event) {
        event.preventDefault();
        let user = this.props.user
        let courses = user.courses
        if (!Object.keys(courses).includes("CPSC121")) {
            courses["CPSC121"] = {
                "type": "exemptions",
                "dept": "CPSC",
                "num": 121,
            }
        } else {
            alert("You have already completed the CPSC 121 Requirement");
        }
        user.courses = courses;
        Users.update({ "_id": user._id }, user)
    }

    handleCPSC210ChangeCore(event) {
        event.preventDefault();
        let user = this.props.user
        let courses = user.courses
        if (!Object.keys(courses).includes("CPSC210")) {
            courses["CPSC210"] = {
                "type": "core",
                "dept": "CPSC",
                "num": 210,
            }
        } else {
            alert("You have already completed the CPSC 210 Requirement");
        }
        user.courses = courses;
        Users.update({ "_id": user._id }, user)
    }

    handleCPSC210ChangeExempt(event) {
        event.preventDefault();
        let user = this.props.user
        let courses = user.courses
        if (!Object.keys(courses).includes("CPSC210")) {
            courses["CPSC210"] = {
                "type": "exemptions",
                "dept": "CPSC",
                "num": 210,
            }
        } else {
            alert("You have already completed the CPSC 210 Requirement");
        }
        user.courses = courses;
        Users.update({ "_id": user._id }, user)
    }


    handleENGL301ChangeCore(event) {
        event.preventDefault();
        let user = this.props.user
        let courses = user.courses
        if (!Object.keys(courses).includes("ENGL301")) {
            courses["ENGL301"] = {
                "type": "core",
                "dept": "ENGL",
                "num": 301,
            }
        } else {
            alert("You have already completed the ENGL 301 Requirement");
        }
        user.courses = courses;
        Users.update({ "_id": user._id }, user)
    }

    handleENGL301ChangeExempt(event) {
        event.preventDefault();
        let user = this.props.user
        let courses = user.courses
        if (!Object.keys(courses).includes("ENGL301")) {
            courses["ENGL301"] = {
                "type": "exemptions",
                "dept": "ENGL",
                "num": 301,
            }
        } else {
            alert("You have already completed the ENGL 301 Requirement");
        }
        user.courses = courses;
        Users.update({ "_id": user._id }, user)
    }
    handleCPSC213ChangeCore(event) {
        event.preventDefault();
        let user = this.props.user
        let courses = user.courses
        if (!Object.keys(courses).includes("CPSC213")) {
            courses["CPSC213"] = {
                "type": "core",
                "dept": "CPSC",
                "num": 213,
            }
        } else {
            alert("You have already completed the CPSC 213 Requirement");
        }
        user.courses = courses;
        Users.update({ "_id": user._id }, user)
    }

    handleCPSC213ChangeExempt(event) {
        event.preventDefault();
        let user = this.props.user
        let courses = user.courses
        if (!Object.keys(courses).includes("CPSC213")) {
            courses["CPSC213"] = {
                "type": "exemptions",
                "dept": "CPSC",
                "num": 213,
            }
        } else {
            alert("You have already completed the CPSC 213 Requirement");
        }
        user.courses = courses;
        Users.update({ "_id": user._id }, user)
    }

    handleCPSC221ChangeCore(event) {
        event.preventDefault();
        let user = this.props.user
        let courses = user.courses
        if (!Object.keys(courses).includes("CPSC221")) {
            courses["CPSC221"] = {
                "type": "core",
                "dept": "CPSC",
                "num": 221,
            }
        } else {
            alert("You have already completed the CPSC 221 Requirement");
        }
        user.courses = courses;
        Users.update({ "_id": user._id }, user)
    }

    handleCPSC221ChangeExempt(event) {
        event.preventDefault();
        let user = this.props.user
        let courses = user.courses
        if (!Object.keys(courses).includes("CPSC221")) {
            courses["CPSC221"] = {
                "type": "exemptions",
                "dept": "CPSC",
                "num": 221,
            }
        } else {
            alert("You have already completed the CPSC 221 Requirement");
        }
        user.courses = courses;
        Users.update({ "_id": user._id }, user)
    }

    handleClick = e => {

        e.preventDefault();

        if (
            this.state.dept !== "" &&
            this.state.num !== "" &&
            // this.state.grade !== "" &&
            this.state.type !== ""
        ) {
            let user = this.props.user
            let courses = user.courses

            if (!Object.keys(courses).includes(this.props.dept + this.props.num)) {
                console.log(this.props.dept)

                user.courses[this.state.dept + this.state.num] = {
                    "type": this.state.type,
                    "dept": this.state.dept,
                    "num": Number(this.state.num),
                }

                user.courses = courses;
                Users.update({ "_id": user._id }, user)

            } else {
                alert("You have already been credited for " + this.state.dept + " " + this.state.num);
            }
        }
    };

    render() {

        return (
            <Container className="pForm" fluid>
                <Form>
                    <Form.Field>
                        <Header size='large'>Easy Select</Header>
                        <div className="easyS">
                            <Popup trigger={<Button>ENGL 112</Button>} flowing hoverable>
                                <Grid centered divided columns={2}>
                                    <Grid.Column textAlign='center'>
                                        <Header as='h4'>Core</Header>
                                        <Button onClick={this.handleENGL112ChangeCore.bind(this)}>Choose</Button>
                                    </Grid.Column>
                                    <Grid.Column textAlign='center'>
                                        <Header as='h4'>Exemption</Header>
                                        <Button onClick={this.handleENGL112ChangeExempt.bind(this)}>Choose</Button>
                                    </Grid.Column>
                                </Grid>
                            </Popup>

                            <Popup trigger={<Button>CPSC 110</Button>} flowing hoverable>
                                <Grid centered divided columns={2}>
                                    <Grid.Column textAlign='center'>
                                        <Header as='h4'>Core</Header>
                                        <Button onClick={this.handleCPSC110ChangeCore.bind(this)}>Choose</Button>
                                    </Grid.Column>
                                    <Grid.Column textAlign='center'>
                                        <Header as='h4'>Exemption</Header>
                                        <Button onClick={this.handleCPSC110ChangeExempt.bind(this)}>Choose</Button>

                                    </Grid.Column>
                                </Grid>
                            </Popup>

                            <Popup trigger={<Button>STAT 203</Button>} flowing hoverable>
                                <Grid centered divided columns={2}>
                                    <Grid.Column textAlign='center'>
                                        <Header as='h4'>Core</Header>
                                        <Button onClick={this.handleSTAT203ChangeCore.bind(this)}>Choose</Button>
                                    </Grid.Column>
                                    <Grid.Column textAlign='center'>
                                        <Header as='h4'>Exemption</Header>
                                        <Button onClick={this.handleSTAT203ChangeExempt.bind(this)}>Choose</Button>
                                    </Grid.Column>
                                </Grid>
                            </Popup>
                        </div>

                        <div className="easyS">
                            <Popup trigger={<Button>MATH 180</Button>} flowing hoverable>
                                <Grid centered divided columns={2}>
                                    <Grid.Column textAlign='center'>
                                        <Header as='h4'>Core</Header>
                                        <Button onClick={this.handleMATH180ChangeCore.bind(this)}>Choose</Button>
                                    </Grid.Column>
                                    <Grid.Column textAlign='center'>
                                        <Header as='h4'>Exemption</Header>
                                        <Button onClick={this.handleMATH180ChangeExempt.bind(this)}>Choose</Button>
                                    </Grid.Column>
                                </Grid>
                            </Popup>

                            <Popup trigger={<Button>CPSC 121</Button>} flowing hoverable>
                                <Grid centered divided columns={2}>
                                    <Grid.Column textAlign='center'>
                                        <Header as='h4'>Core</Header>
                                        <Button onClick={this.handleCPSC121ChangeCore.bind(this)}>Choose</Button>
                                    </Grid.Column>
                                    <Grid.Column textAlign='center'>
                                        <Header as='h4'>Exemption</Header>
                                        <Button onClick={this.handleCPSC121ChangeExempt.bind(this)}>Choose</Button>
                                    </Grid.Column>
                                </Grid>
                            </Popup>

                            <Popup trigger={<Button>CPSC 210</Button>} flowing hoverable>
                                <Grid centered divided columns={2}>
                                    <Grid.Column textAlign='center'>
                                        <Header as='h4'>Core</Header>
                                        <Button onClick={this.handleCPSC210ChangeCore.bind(this)}>Choose</Button>
                                    </Grid.Column>
                                    <Grid.Column textAlign='center'>
                                        <Header as='h4'>Exemption</Header>
                                        <Button onClick={this.handleCPSC210ChangeExempt.bind(this)}>Choose</Button>
                                    </Grid.Column>
                                </Grid>
                            </Popup>
                        </div>

                        <div className="easyS">
                            <Popup trigger={<Button>ENGL 301</Button>} flowing hoverable>
                                <Grid centered divided columns={2}>
                                    <Grid.Column textAlign='center'>
                                        <Header as='h4'>Core</Header>
                                        <Button onClick={this.handleENGL301ChangeCore.bind(this)}>Choose</Button>
                                    </Grid.Column>
                                    <Grid.Column textAlign='center'>
                                        <Header as='h4'>Exemption</Header>
                                        <Button onClick={this.handleENGL301ChangeExempt.bind(this)}>Choose</Button>
                                    </Grid.Column>
                                </Grid>
                            </Popup>

                            <Popup trigger={<Button>CPSC 213</Button>} flowing hoverable>
                                <Grid centered divided columns={2}>
                                    <Grid.Column textAlign='center'>
                                        <Header as='h4'>Core</Header>
                                        <Button onClick={this.handleCPSC213ChangeCore.bind(this)}>Choose</Button>
                                    </Grid.Column>
                                    <Grid.Column textAlign='center'>
                                        <Header as='h4'>Exemption</Header>
                                        <Button onClick={this.handleCPSC213ChangeExempt.bind(this)}>Choose</Button>
                                    </Grid.Column>
                                </Grid>
                            </Popup>

                            <Popup trigger={<Button>CPSC 221</Button>} flowing hoverable>
                                <Grid centered divided columns={2}>
                                    <Grid.Column textAlign='center'>
                                        <Header as='h4'>Core</Header>
                                        <Button onClick={this.handleCPSC221ChangeCore.bind(this)}>Choose</Button>
                                    </Grid.Column>
                                    <Grid.Column textAlign='center'>
                                        <Header as='h4'>Exemption</Header>
                                        <Button onClick={this.handleCPSC221ChangeExempt.bind(this)}>Choose</Button>
                                    </Grid.Column>
                                </Grid>
                            </Popup>
                        </div>


                    </Form.Field>
                    <Form.Field>
                        <Header size='large'>Department</Header>
                        <input placeholder='4 letter course code (i.e CPSC)' value={this.state.dept}
                            onChange={this.handleDeptChange.bind(this)} />
                    </Form.Field>
                    <Form.Field>
                        <Header size='large'>Course Number</Header>
                        <input placeholder='(i.e 221)' value={this.state.num}
                            onChange={this.handleNumChange.bind(this)} />
                    </Form.Field>
                    <Form.Field>
                        <Header size='large'>Grade Received</Header>
                        <input placeholder='(i.e 100)' value={this.state.grade}
                            onChange={this.handleGradeChange.bind(this)} />
                    </Form.Field>
                    <div>
                        <Button.Group>
                            <Button value="core" onClick={this.handleCoreChange.bind(this)}>Core</Button>
                            <Button.Or />
                            <Button value="bridging" onClick={this.handleBridgingChange.bind(this)}>Bridging</Button>
                            <Button.Or />
                            <Button value="exemptions" onClick={this.handleExemptionChange.bind(this)}>Exemption</Button>
                            <Button.Or />
                            <Button value="replacement" onClick={this.handleReplacementChange.bind(this)}>Replacement</Button>
                            <Button.Or />
                            <Button value="electives" onClick={this.handleElectiveChange.bind(this)}>CPSC Elective</Button>
                        </Button.Group>
                    </div>
                    <Button className="submitB" type='submit' onClick={this.handleClick.bind(this)}>Add Course</Button>

                </Form>
            </Container>
        );
    }
}

export default createContainer(() => {
    // Set up subscription
    Meteor.subscribe("users");
    // Return an object as props
    return {
        user: Users.find({ "email": "test1@gmail.com" }).fetch()[0],
        dept: '', num: '', grade: '', type: ''
    };
}, AddCourse);