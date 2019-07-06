import React, { Component } from 'react'
import { Users } from "../../../collections/users";
import {addUser} from "../../actions/userActions";
import { connect } from 'react-redux'
import {Courses} from "../../../collections/courses";
import { createContainer } from "meteor/react-meteor-data";



class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();


        if (
            this.state.email !== "" &&
            this.state.password !== "" &&
            this.state.firstName !== "" &&
            this.state.lastName !== ""
        ) {
            Users.insert({
                email: this.state.email,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName
            });

            }

        };



    render() {

        const users = this.props.users;
        console.log(this.props);
        console.log(users);

        return (
            <div className="container">
                <form className="white"
                      onSubmit={this.handleSubmit.bind(this)}>
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email'
                               onChange={this.handleChange.bind(this)} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password'
                               onChange={this.handleChange.bind(this)} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id='firstName'
                               onChange={this.handleChange.bind(this)} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id='lastName'
                               onChange={this.handleChange.bind(this)} />
                    </div>
                    <div className="input-field">
                        <button type="button" onClick={this.handleSubmit.bind(this)}>Sign Up</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default createContainer(() => {
    // Set up subscription
    Meteor.subscribe("users");
    // Return an object as props
    return { users: Users.find({}).fetch() };
}, SignUp);
