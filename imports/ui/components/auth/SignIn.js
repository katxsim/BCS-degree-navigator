import React, { Component } from 'react'
import { connect } from 'react-redux'

class SignIn extends Component {
    state = {
        "email": '',
        "password": ''
    };

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.email);
        console.log(e.target);

        const user = {
            email: e.target.name.value,
            password: e.target.password,
            firstName: e.target.firstName,
            lastName: e.target.lastName
        };
        console.log(user);
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
            // this.setState({state: ""})
        }
    };

    render() {
        // const { users } = this.props;
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
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

export default connect(null, mapDispatchToProps)(SignIn)