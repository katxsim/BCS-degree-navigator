import React from 'react';
import { Container, Form, Button, Header, Popup, Grid } from 'semantic-ui-react'

export default class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {dept: '', num: '', grade: '', type: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event, type) {
        let s = {};
        s[type] = event.target.value;
        this.setState(s);
    }

    handleSubmit(event) {
        console.log('A dept was submitted: ' + this.state.dept);
        console.log('A num was submitted: ' + this.state.num);
        console.log('A grade was submitted: ' + this.state.grade);
        console.log('A type was submitted: ' + this.state.type);

        event.preventDefault();
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
                                <Button>Choose</Button>
                            </Grid.Column>
                            <Grid.Column textAlign='center'>
                                <Header as='h4'>Exemption</Header>
                                <Button>Choose</Button>
                            </Grid.Column>
                        </Grid>
                    </Popup>
                    </div>

                    <div className="easyS">
                    <Popup trigger={<Button>CPSC 110</Button>} flowing hoverable>
                        <Grid centered divided columns={2}>
                            <Grid.Column textAlign='center'>
                                <Header as='h4'>Core</Header>
                                <Button>Choose</Button>
                            </Grid.Column>
                            <Grid.Column textAlign='center'>
                                <Header as='h4'>Exemption</Header>
                                <Button>Choose</Button>

                            </Grid.Column>
                        </Grid>
                    </Popup>
                    </div>

                    <div className="easyS">
                    <Popup trigger={<Button>STAT 203</Button>} flowing hoverable>
                        <Grid centered divided columns={2}>
                            <Grid.Column textAlign='center'>
                                <Header as='h4'>Core</Header>
                                <Button>Choose</Button>
                            </Grid.Column>
                            <Grid.Column textAlign='center'>
                                <Header as='h4'>Exemption</Header>
                                <Button>Choose</Button>
                            </Grid.Column>
                        </Grid>
                    </Popup>
                    </div>

                    <div className="easyS">
                    <Popup trigger={<Button>MATH 180</Button>} flowing hoverable>
                        <Grid centered divided columns={2}>
                            <Grid.Column textAlign='center'>
                                <Header as='h4'>Core</Header>
                                <Button>Choose</Button>
                            </Grid.Column>
                            <Grid.Column textAlign='center'>
                                <Header as='h4'>Exemption</Header>
                                <Button>Choose</Button>
                            </Grid.Column>
                        </Grid>
                    </Popup>
                    </div>

                    <div className="easyS">
                    <Popup trigger={<Button>CPSC 121</Button>} flowing hoverable>
                        <Grid centered divided columns={2}>
                            <Grid.Column textAlign='center'>
                                <Header as='h4'>Core</Header>
                                <Button>Choose</Button>
                            </Grid.Column>
                            <Grid.Column textAlign='center'>
                                <Header as='h4'>Exemption</Header>
                                <Button>Choose</Button>
                            </Grid.Column>
                        </Grid>
                    </Popup>
                    </div>

                    <div className="easyS">
                    <Popup trigger={<Button>CPSC 210</Button>} flowing hoverable>
                        <Grid centered divided columns={2}>
                            <Grid.Column textAlign='center'>
                                <Header as='h4'>Core</Header>
                                <Button>Choose</Button>
                            </Grid.Column>
                            <Grid.Column textAlign='center'>
                                <Header as='h4'>Exemption</Header>
                                <Button>Choose</Button>
                            </Grid.Column>
                        </Grid>
                    </Popup>
                    </div>

                    <div className="easyS">
                    <Popup trigger={<Button>ENGL 301</Button>} flowing hoverable>
                        <Grid centered divided columns={2}>
                            <Grid.Column textAlign='center'>
                                <Header as='h4'>Core</Header>
                                <Button>Choose</Button>
                            </Grid.Column>
                            <Grid.Column textAlign='center'>
                                <Header as='h4'>Exemption</Header>
                                <Button>Choose</Button>
                            </Grid.Column>
                        </Grid>
                    </Popup>
                    </div>


                </Form.Field>
                <Form.Field>
                    <Header size='large'>Department</Header>
                    <input placeholder='4 letter course code (i.e CPSC)' value={this.state.dept} onChange={(event) => {this.handleChange(event, "dept")}} />
                </Form.Field>
                <Form.Field>
                    <Header size='large'>Course Number</Header>
                    <input placeholder='(i.e 221)' value={this.state.num} onChange={(event) => {this.handleChange(event, "num")}} />
                </Form.Field>
                <Form.Field>
                    <Header size='large'>Grade Received</Header>
                    <input placeholder='(i.e 100)' value={this.state.grade} onChange={(event) => {this.handleChange(event, "grade")}} />
                </Form.Field>
                <div>
                <Button.Group>
                    <Button>Core</Button>
                    <Button.Or />
                    <Button>Bridging</Button>
                    <Button.Or />
                    <Button>Exemption</Button>
                    <Button.Or />
                    <Button>Replacement</Button>
                </Button.Group>
                </div>
                <Button className="submitB" type='submit' onClick={this.handleSubmit}>Add Course</Button>

            </Form>
            </Container>
        );
    }
}