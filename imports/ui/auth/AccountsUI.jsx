import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Blaze } from 'meteor/blaze'
import { Template } from 'meteor/templating'

export default class AccountsUI extends Component {

    componentDidMount() {
        this.view = Blaze.render(Template.loginButtons,
            ReactDOM.findDOMNode(this.refs.container));
    }

    render() {
        return <span ref="container" />
    }
}