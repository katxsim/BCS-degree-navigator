import React, { Component } from 'react'

class Form extends Component {
    render() {
        return (


            <div>

                <h4 className="center">Add Courses</h4>
                <div className="post-card">
                    <form>
                        <div className="input-field">
                            <select className="custom-select custom-select-lg mb-3">
                                <option value>Department</option>
                                <option value="1">CPSC</option>
                                <option value="2">ENGL</option>
                                <option value="3">MATH</option>
                                <option value="4">STATS</option>
                                <option value="5">COGS</option>
                                <option value="6">DSCI</option>
                                <option value="7">PSYCH</option>




                            </select>
                            <br />
                        </div>

                        <div className="input-field">
                                <select className="custom-select custom-select-lg mb-3">
                                    <option selected>Course Code</option>
                                    <option value="1">110</option>
                                    <option value="2">121</option>
                                    <option value="3">221</option>
                                    <option value="4">213</option>
                                    <option value="5">210</option>
                                    <option value="6">310</option>
                                    <option value="7">436I</option>
                            </select>
                            <br />
                        </div>

                        <input className="form-control form-control-lg" type="text" placeholder="Grade Percentage" />
                        <div className="btn-group-vertical btn-group-toggle" data-toggle="buttons">
                            <label className="btn btn-secondary active">
                                <input type="radio" name="options" id="option1" autoComplete="off" checked/> Core
                            </label>
                            <label className="btn btn-secondary active">
                                <input type="radio" name="options" id="option1" autoComplete="off" checked/> Bridging
                            </label>
                            <label className="btn btn-secondary active">
                                <input type="radio" name="options" id="option1" autoComplete="off" checked/> Exemption
                            </label>
                            <label className="btn btn-secondary active">
                                <input type="radio" name="options" id="option1" autoComplete="off" checked/> Exemption Replacement
                            </label>
                        </div>
                        <button type="button">Add Course</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Form