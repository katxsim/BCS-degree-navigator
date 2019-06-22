import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addUser } from '../../actions/userActions'

class SignUp extends Component {
    state = {
        "email": '',
        "password": '',
        "firstName": '',
        "lastName": '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
        console.log(e.target.email.value)
        console.log(e.target.password.value);
        console.log(e.target.firstName.value);
        console.log(e.target.lastName.value);

        const user = {
            email: e.target.email.value,
            password: e.target.password.value,
            fristName: e.target.firstName.value,
            lastName: e.target.lastName.value
        }
        this.props.addUser(user);

        e.target.email.value = ""
        e.target.password.value = ""
        e.target.firstName.value = ""
        e.target.lastName.value = ""
    }
    render() {
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id='firstName' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id='lastName' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (user) => { dispatch(addUser(user)) }
    }
}

export default connect(null, mapDispatchToProps)(SignUp)