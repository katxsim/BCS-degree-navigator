import React, { Component } from "react";
import { connect } from "react-redux";
import { addCourse } from "../../actions/courseActions";

class Form extends Component {

  state = {
    dept: "",
    num: "",
    grade: "",
    type: ""
  };

  handleDeptChange = e =>
    this.setState({
      dept: e.target.value
    });

  handleCodeChange = e =>
    this.setState({
      num: e.target.value
    });

  handleGradeChange = e =>
    this.setState({
      grade: e.target.value
    });

  handleGroupChange = e =>
    this.setState({
      type: e.target.value
    });

  handleClick = e => {
    e.preventDefault();
    if (
      this.state.dept !== "" &&
      this.state.num !== "" &&
      this.state.grade !== "" &&
      this.state.type !== ""
    ) {
      this.props.addCourse(this.state);
      this.setState({
        dept: "",
        num: "",
        grade: "",
        type: ""
      });

    }
  };

  render() {
    return (
      <div>
        <h4 className="center">Add Courses</h4>
        <div className="post card">
          <form>
            <div className="input-field">
              <select
                className="browser-default"
                onChange={this.handleDeptChange.bind(this)}
                defaultValue=""
              >
                <option value="" disabled>
                  Department
                </option>
                <option value="CPSC">CPSC</option>
                <option value="STAT">STAT</option>
                <option value="MATH">MATH</option>
                <option value="COMM">COMM</option>
              </select>
              <br />
            </div>

            <div className="input-field">
              <select
                className="browser-default"
                onChange={this.handleCodeChange.bind(this)}
                defaultValue=""
              >
                <option value="" disabled>
                  Course Code
                </option>
                <option value="110">110</option>
                <option value="121">121</option>
                <option value="210">210</option>
                <option value="213">213</option>
              </select>
              <br />
            </div>

            <label>Grade: </label>
            <input
              type="text"
              onChange={this.handleGradeChange.bind(this)}
              className="browser-default"
            />
            <br />

            <div className="input-field">
              <select
                className="browser-default"
                onChange={this.handleGroupChange.bind(this)}
                defaultValue=""
              >
                <option value="" disabled>
                  Requirement Group
                </option>
                <option value="core">Core</option>
                <option value="bridging">Bridging</option>
                <option value="exemption">Exemption</option>
                <option value="exemption replacement">
                  Exemption Replacement
                </option>
              </select>
              <br />
            </div>

            {/* <label>
              <input type="radio" className="with-gap" name="course-group" />
              <span>Core</span>
            </label>
            <label>
              <input type="radio" className="with-gap" name="course-group" />
              <span>Bridging</span>
            </label>
            <label>
              <input type="radio" className="with-gap" name="course-group" />
              <span>Exemption</span>
            </label>
            <label>
              <input type="radio" className="with-gap" name="course-group" />
              <span>Exemption Replacement</span>
            </label> */}

            <button type="button" onClick={this.handleClick.bind(this)}>
              Add Course
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCourse: id => {
      dispatch(addCourse(id));
    }
  };
};

export default connect(
  () => {
    return {};
  },
  mapDispatchToProps
)(Form);
