import React from 'react';
import { Container, Form, Button, Header, Popup, Grid } from 'semantic-ui-react'
import {Courses} from "../imports/collections/courses";
import { createContainer } from "meteor/react-meteor-data";


class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {dept: '', num: '', grade: '', type: ''};

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

        Courses.insert({
            type: "core",
            dept: "ENGL",
            num: "112",
        });
    }

    handleENGL112ChangeExempt(event) {
        event.preventDefault();

        Courses.insert({
            type: "exemptions",
            dept: "ENGL",
            num: "112",
        });
    }

    handleCPSC110ChangeCore(event) {
        event.preventDefault();

        Courses.insert({
            type: "core",
            dept: "CPSC",
            num: "110",
        });
    }

    handleCPSC110ChangeExempt(event) {
        event.preventDefault();

        Courses.insert({
            type: "exemptions",
            dept: "ENGL",
            num: "112",
        });
    }

    handleSTAT203ChangeCore(event) {
        event.preventDefault();

        Courses.insert({
            type: "core",
            dept: "STAT",
            num: "203",
        });
    }

    handleSTAT203ChangeExempt(event) {
        event.preventDefault();

        Courses.insert({
            type: "exemptions",
            dept: "STAT",
            num: "203",
        });
    }


    handleMATH180ChangeCore(event) {
        event.preventDefault();

        Courses.insert({
            type: "core",
            dept: "MATH",
            num: "180",
        });
    }

    handleMATH180ChangeExempt(event) {
        event.preventDefault();

        Courses.insert({
            type: "exemptions",
            dept: "MATH",
            num: "180",
        });
    }
// cpsc121 cpsc210

    handleCPSC121ChangeCore(event) {
        event.preventDefault();

        Courses.insert({
            type: "core",
            dept: "CPSC",
            num: "121",
        });
    }

    handleCPSC121ChangeExempt(event) {
        event.preventDefault();

        Courses.insert({
            type: "exemptions",
            dept: "CPSC",
            num: "121",
        });
    }

    handleCPSC210ChangeCore(event) {
        event.preventDefault();

        Courses.insert({
            type: "core",
            dept: "CPSC",
            num: "210",
        });
    }

    handleCPSC210ChangeExempt(event) {
        event.preventDefault();

        Courses.insert({
            type: "exemptions",
            dept: "CPSC",
            num: "210",
        });
    }
    // engl301cpsc213 cpsc221


    handleENGL301ChangeCore(event) {
        event.preventDefault();

        Courses.insert({
            type: "core",
            dept: "ENGL",
            num: "301",
        });
    }

    handleENGL301ChangeExempt(event) {
        event.preventDefault();

        Courses.insert({
            type: "exemptions",
            dept: "ENGL",
            num: "301",
        });
    }
    handleCPSC213ChangeCore(event) {
        event.preventDefault();

        Courses.insert({
            type: "core",
            dept: "CPSC",
            num: "213",
        });
    }

    handleCPSC213ChangeExempt(event) {
        event.preventDefault();

        Courses.insert({
            type: "exemptions",
            dept: "CPSC",
            num: "213",
        });
    }

    handleCPSC221ChangeCore(event) {
        event.preventDefault();

        Courses.insert({
            type: "core",
            dept: "CPSC",
            num: "221",
        });
    }

    handleCPSC221ChangeExempt(event) {
        event.preventDefault();

        Courses.insert({
            type: "exemptions",
            dept: "CPSC",
            num: "221",
        });
    }



    handleClick = e => {
        console.log('A dept was submitted: ' + this.state.dept);
        console.log('A num was submitted: ' + this.state.num);
        console.log('A grade was submitted: ' + this.state.grade);
        console.log('A type was submitted: ' + this.state.type);

        e.preventDefault();

        if (
            this.state.dept !== "" &&
            this.state.num !== "" &&
            this.state.grade !== "" &&
            this.state.type !== ""
        ) {
            Courses.insert({
                type: this.state.type,
                dept: this.state.dept,
                num: this.state.num,
                grade: this.state.grade
            });
        }
    }

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
                               onChange={this.handleDeptChange.bind(this)}/>
                    </Form.Field>
                    <Form.Field>
                        <Header size='large'>Course Number</Header>
                        <input placeholder='(i.e 221)' value={this.state.num}
                               onChange={this.handleNumChange.bind(this)}/>
                    </Form.Field>
                    <Form.Field>
                        <Header size='large'>Grade Received</Header>
                        <input placeholder='(i.e 100)' value={this.state.grade}
                               onChange={this.handleGradeChange.bind(this)}/>
                    </Form.Field>
                    <div>
                        <Button.Group>
                            <Button value="core" onClick={this.handleCoreChange.bind(this)}>Core</Button>
                            <Button.Or/>
                            <Button value="bridging" onClick={this.handleBridgingChange.bind(this)}>Bridging</Button>
                            <Button.Or/>
                            <Button value="exemption" onClick={this.handleExemptionChange.bind(this)}>Exemption</Button>
                            <Button.Or/>
                            <Button value="exemption replacement" onClick={this.handleReplacementChange.bind(this)}>Replacement</Button>
                            <Button.Or/>
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
    Meteor.subscribe("courses");
    // Return an object as props
    return { courses: Courses.find({}).fetch() };
}, PostForm);