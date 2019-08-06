import React from 'react';
import { Container, Form, Button, Header, Popup, Grid } from 'semantic-ui-react';
import { createContainer } from "meteor/react-meteor-data";
import { updateRequirements } from "./../../../ComputeRequirements"
// import { userCourses } from "../../../collections/userCourses";


const shortid = require("shortid");

class AddCourse extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dept: '', num: '', grade: '', type: '', year: '', term: '' };
    };


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

    handleYearChange = e =>
        this.setState({
            year: e.target.value
        });

    handleTermChange = e =>
        this.setState({
            term: e.target.value
        })

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

        try {
            let user = this.props.user
            let courses = user.courses

            if (!Object.keys(courses).includes("ENGL112")) {
                courses["ENGL112"] = {
                    "type": "core",
                    "dept": "ENGL",
                    "num": 112,
                }
                user.courses = courses;
                Meteor.call('updateUser', user);
            } else {
                alert("You have already completed the ENGL requirement");
            }
        } catch (error) {
            alert("Welcome! Please Login or Signup!")
        }
    }

    handleENGL112ChangeExempt(event) {
        event.preventDefault();

        try {
            let user = this.props.user
            let courses = user.courses
            if (!Object.keys(courses).includes("ENGL112")) {
                courses["ENGL112"] = {
                    "type": "exemptions",
                    "dept": "ENGL",
                    "num": 112,
                }
                user.courses = courses;
                Meteor.call('updateUser', user);
            } else {
                alert("You have already completed the ENGL requirement");
            }
        } catch (error) {
            alert("Welcome! Please Login or Signup!")
        }
    }

    handleCPSC110ChangeCore(event) {
        event.preventDefault();

        try {
            let user = this.props.user
            let courses = user.courses
            if (!Object.keys(courses).includes("CPSC110")) {
                let myGrade = prompt('What grade did you receive? (optional)');
                let year = prompt('During which year did/will you complete this course? (required)');
                let term = prompt('During which term (W1, W2, or S) did/will you complete this course? (required)');
                courses["CPSC110"] = {
                    "type": "core",
                    "dept": "CPSC",
                    "num": 110,
                    "grade": myGrade,
                    "year": year,
                    "term": term

                }
                user.courses = courses;
                Meteor.call('updateUser', user);
            } else {
                alert("You have already completed the CPSC 110 Requirement");
            }
        } catch (error) {
            alert("Welcome! Please Login or Signup!")
        }
    }

    handleCPSC110ChangeExempt(event) {
        event.preventDefault();

        try {
            let user = this.props.user
            let courses = user.courses
            if (!Object.keys(courses).includes("CPSC110")) {
                courses["CPSC110"] = {
                    "type": "exemptions",
                    "dept": "CPSC",
                    "num": 110,
                }
                user.courses = courses;
                Meteor.call('updateUser', user);
            } else {
                alert("You have already completed the CPSC 110 Requirement");
            }
        } catch (error) {
            alert("Welcome! Please Login or Signup!")
        }

    }

    handleSTAT203ChangeCore(event) {
        event.preventDefault();

        try {
            let user = this.props.user
            let courses = user.courses
            if (!Object.keys(courses).includes("STAT203")) {
                let myGrade = prompt('What grade did you receive? (optional)');
                let year = prompt('During which year did/will you complete this course? (required)');
                let term = prompt('During which term (W1, W2, or S) did/will you complete this course? (required)');
                courses["STAT203"] = {
                    "type": "core",
                    "dept": "STAT",
                    "num": 203,
                    "grade": myGrade,
                    "year": year,
                    "term": term
                }
                user.courses = courses;
                Meteor.call('updateUser', user);
            } else {
                alert("You have already completed the STAT 203 Requirement");
            }
        } catch (error) {
            alert("Welcome! Please Login or Signup!")
        }

    }

    handleSTAT203ChangeExempt(event) {
        event.preventDefault();

        try {
            let user = this.props.user
            let courses = user.courses
            if (!Object.keys(courses).includes("STAT203")) {
                courses["STAT203"] = {
                    "type": "exemptions",
                    "dept": "STAT",
                    "num": 203,
                }
                user.courses = courses;
                Meteor.call('updateUser', user);
            } else {
                alert("You have already completed the STAT 203 Requirement");
            }
        } catch (error) {
            alert("Welcome! Please Login or Signup!")
        }

    }


    handleMATH180ChangeCore(event) {
        event.preventDefault();

        try {
            let user = this.props.user
            let courses = user.courses
            if (!Object.keys(courses).includes("MATH180")) {
                let myGrade = prompt('What grade did you receive? (optional)');
                let year = prompt('During which year did/will you complete this course? (required)');
                let term = prompt('During which term (W1, W2, or S) did/will you complete this course? (required)');
                courses["MATH180"] = {
                    "type": "core",
                    "dept": "MATH",
                    "num": 180,
                    "grade": myGrade,
                    "year": year,
                    "term": term
                }
                user.courses = courses;
                Meteor.call('updateUser', user);
            } else {
                alert("You have already completed the MATH 180 Requirement");
            }
        } catch (error) {
            alert("Welcome! Please Login or Signup!")
        }

    }

    handleMATH180ChangeExempt(event) {
        event.preventDefault();

        try {
            let user = this.props.user
            let courses = user.courses
            if (!Object.keys(courses).includes("MATH180")) {
                courses["MATH180"] = {
                    "type": "exemptions",
                    "dept": "MATH",
                    "num": 180,
                }
                user.courses = courses;
                Meteor.call('updateUser', user);
            } else {
                alert("You have already completed the MATH 180 Requirement");
            }
        } catch (error) {
            alert("Welcome! Please Login or Signup!")
        }

    }
    // cpsc121 cpsc210

    handleCPSC121ChangeCore(event) {
        event.preventDefault();

        try {
            let user = this.props.user
            let courses = user.courses
            if (!Object.keys(courses).includes("CPSC121")) {
                let myGrade = prompt('What grade did you receive? (optional)');
                let year = prompt('During which year did/will you complete this course? (required)');
                let term = prompt('During which term (W1, W2, or S) did/will you complete this course? (required)');
                courses["CPSC121"] = {
                    "type": "core",
                    "dept": "CPSC",
                    "num": 121,
                    "grade": myGrade,
                    "year": year,
                    "term": term
                }
                user.courses = courses;
                Meteor.call('updateUser', user);
            } else {
                alert("You have already completed the CPSC 121 Requirement");
            }
        } catch (error) {
            alert("Welcome! Please Login or Signup!")
        }


    }


    handleCPSC121ChangeExempt(event) {
        event.preventDefault();

        try {
            let user = this.props.user
            let courses = user.courses
            if (!Object.keys(courses).includes("CPSC121")) {
                courses["CPSC121"] = {
                    "type": "exemptions",
                    "dept": "CPSC",
                    "num": 121,
                }
                user.courses = courses;
                Meteor.call('updateUser', user);
            } else {
                alert("You have already completed the CPSC 121 Requirement");
            }
        } catch (error) {
            alert("Welcome! Please Login or Signup!")
        }

    }

    handleCPSC210ChangeCore(event) {
        event.preventDefault();

        try {
            let user = this.props.user
            let courses = user.courses
            if (!Object.keys(courses).includes("CPSC210")) {
                let myGrade = prompt('What grade did you receive? (optional)');
                let year = prompt('During which year did/will you complete this course? (required)');
                let term = prompt('During which term (W1, W2, or S) did/will you complete this course? (required)');
                courses["CPSC210"] = {
                    "type": "core",
                    "dept": "CPSC",
                    "num": 210,
                    "grade": myGrade,
                    "year": year,
                    "term": term
                }
                user.courses = courses;
                Meteor.call('updateUser', user);
            } else {
                alert("You have already completed the CPSC 210 Requirement");
            }
        } catch (error) {
            alert("Welcome! Please Login or Signup!")
        }

    }

    handleCPSC210ChangeExempt(event) {
        event.preventDefault();

        try {
            let user = this.props.user
            let courses = user.courses
            if (!Object.keys(courses).includes("CPSC210")) {
                courses["CPSC210"] = {
                    "type": "exemptions",
                    "dept": "CPSC",
                    "num": 210,
                }
                user.courses = courses;
                Meteor.call('updateUser', user);
            } else {
                alert("You have already completed the CPSC 210 Requirement");
            }
        } catch (error) {
            alert("Welcome! Please Login or Signup!")
        }

    }


    handleENGL301ChangeCore(event) {
        event.preventDefault();

        try {
            let user = this.props.user
            let courses = user.courses
            if (!Object.keys(courses).includes("ENGL301")) {
                let myGrade = prompt('What grade did you receive? (optional)');
                let year = prompt('During which year did/will you complete this course? (required)');
                let term = prompt('During which term (W1, W2, or S) did/will you complete this course? (required)');
                courses["ENGL301"] = {
                    "type": "core",
                    "dept": "ENGL",
                    "num": 301,
                    "grade": myGrade,
                    "year": year,
                    "term": term
                }
                user.courses = courses;
                Meteor.call('updateUser', user);
            } else {
                alert("You have already completed the ENGL 301 Requirement");
            }
        } catch (error) {
            alert("Welcome! Please Login or Signup!")
        }

    }

    handleENGL301ChangeExempt(event) {
        event.preventDefault();

        try {
            let user = this.props.user
            let courses = user.courses
            if (!Object.keys(courses).includes("ENGL301")) {
                courses["ENGL301"] = {
                    "type": "exemptions",
                    "dept": "ENGL",
                    "num": 301,
                }
                user.courses = courses;
                Meteor.call('updateUser', user);
            } else {
                alert("You have already completed the ENGL 301 Requirement");
            }
        } catch (error) {
            alert("Welcome! Please Login or Signup!")
        }
    }

    handleCPSC213ChangeCore(event) {
        event.preventDefault();

        try {
            let user = this.props.user
            let courses = user.courses
            if (!Object.keys(courses).includes("CPSC213")) {
                let myGrade = prompt('What grade did you receive? (optional)');
                let year = prompt('During which year did/will you complete this course? (required)');
                let term = prompt('During which term (W1, W2, or S) did/will you complete this course? (required)');
                courses["CPSC213"] = {
                    "type": "core",
                    "dept": "CPSC",
                    "num": 213,
                    "grade": myGrade,
                    "year": year,
                    "term": term
                }
                user.courses = courses;
                Meteor.call('updateUser', user);
            } else {
                alert("You have already completed the CPSC 213 Requirement");
            }
        } catch (error) {
            alert("Welcome! Please Login or Signup!")
        }
    }

    handleCPSC213ChangeExempt(event) {
        event.preventDefault();

        try {
            let user = this.props.user
            let courses = user.courses
            if (!Object.keys(courses).includes("CPSC213")) {
                courses["CPSC213"] = {
                    "type": "exemptions",
                    "dept": "CPSC",
                    "num": 213,
                }
                user.courses = courses;
                Meteor.call('updateUser', user);
            } else {
                alert("You have already completed the CPSC 213 Requirement");
            }
        } catch (error) {
            alert("Welcome! Please Login or Signup!")
        }

    }

    handleCPSC221ChangeCore(event) {
        event.preventDefault();

        try {
            let user = this.props.user
            let courses = user.courses
            if (!Object.keys(courses).includes("CPSC221")) {
                let myGrade = prompt('What grade did you receive? (optional)');
                let year = prompt('During which year did/will you complete this course? (required)');
                let term = prompt('During which term (W1, W2, or S) did/will you complete this course? (required)');
                courses["CPSC221"] = {
                    "type": "core",
                    "dept": "CPSC",
                    "num": 221,
                    "grade": myGrade,
                    "year": year,
                    "term": term
                }
                user.courses = courses;
                Meteor.call('updateUser', user);
            } else {
                alert("You have already completed the CPSC 221 Requirement");
            }
        } catch (error) {
            alert("Welcome! Please Login or Signup!")
        }

    }

    handleCPSC221ChangeExempt(event) {
        event.preventDefault();

        try {
            let user = this.props.user
            let courses = user.courses
            if (!Object.keys(courses).includes("CPSC221")) {
                courses["CPSC221"] = {
                    "type": "exemptions",
                    "dept": "CPSC",
                    "num": 221,
                }
                user.courses = courses;
                Meteor.call('updateUser', user);
            } else {
                alert("You have already completed the CPSC 221 Requirement");
            }
        } catch (error) {
            alert("Welcome! Please Login or Signup!")
        }

    }

    handleClick = e => {

        e.preventDefault();

        if (
            this.state.dept !== "" &&
            this.state.num !== "" &&
            // this.state.grade !== "" &&
            this.state.type !== "" &&
            this.state.year !== "" &&
            this.state.term !== ""
        ) {
            let user = this.props.user
            let courses = user.courses
            let requirements = updateRequirements(user);

            if (this.state.type === "electives" &&
                this.state.dept !== "CPSC" ||
                this.state.type === "electives" &&
                this.state.num <= 300) {
                alert("Elective must be CPSC 300 or higher");
                return;
            }

            if (!Object.keys(courses).includes(this.props.dept + this.props.num)) {

                user.courses[this.state.dept + this.state.num] = {
                    "type": this.state.type,
                    "dept": this.state.dept,
                    "num": Number(this.state.num),
                    "grade": Number(this.state.grade),
                    "year": this.state.year,
                    "term": this.state.term
                }
                this.setState({
                    "type": '',
                    "dept": '',
                    "num": '',
                    "grade": '',
                    "year": '',
                    "term": ''
                });

                user.courses = courses;
                Meteor.call('updateUser', user);
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
                        <input placeholder='(e.g. 221)' value={this.state.num}
                            onChange={this.handleNumChange.bind(this)} />
                    </Form.Field>
                    <Form.Field>
                        <Header size='large'>Grade Received</Header>
                        <input placeholder='(e.g. 100)' value={this.state.grade}
                            onChange={this.handleGradeChange.bind(this)} />
                    </Form.Field>
                    <Form.Field>
                        <Header size='large'>Year</Header>
                        <input placeholder='(e.g. 2019)' value={this.state.year}
                            onChange={this.handleYearChange.bind(this)} />
                    </Form.Field>
                    <div>
                        <Header size='large'>Session</Header>
                        <Button.Group>
                            <Button value="W1" onClick={this.handleTermChange.bind(this)}>W1</Button>
                            <Button.Or />
                            <Button value="W2" onClick={this.handleTermChange.bind(this)}>W2</Button>
                            <Button.Or />
                            <Button value="S" onClick={this.handleTermChange.bind(this)}>S</Button>
                        </Button.Group>
                    </div>
                    <div>
                        <Header size='large'>Requirement Type</Header>
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
    // console.log(Meteor.users.findOne({ "_id": Meteor.userId() }))
    // Return an object as props
    return {
        user: Meteor.users.findOne({ "_id": Meteor.userId() }),
        dept: '', num: '', grade: '', type: '', year: '', term: ''
    };
}, AddCourse);