import React, { Component } from "react";
import { Menu, Input } from "semantic-ui-react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

class Footer extends Component {
  render() {
    return (
      <div className="ui inverted blue darken-4 vertical footer segment">
        <div className="ui center aligned container">
          <h4 className="ui inverted header">
            &copy; University of British Columbia | Bachelor of Computer Science
            | 2019
          </h4>
        </div>
      </div>
    );
  }
}
export default Footer;
