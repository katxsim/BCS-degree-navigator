import React, { Component } from 'react'

class Form extends Component {
    render() {
        return (
            <div className="post card">
                <form>
                    <div className="input-field">
                        <select className="browser-default" defaultValue="">
                            <option value="" disabled>Department</option>
                            <option value="computer science">Computer Science</option>
                            <option value="statistics">Statistics</option>
                            <option value="math">Math</option>
                            <option value="commerce">Commerce</option>
                        </select>
                        <br/>
                    </div>

                    <div className="input-field">
                        <select className="browser-default" defaultValue="">
                            <option value="" disabled>Course Code</option>
                            <option value="CPSC 110">CPSC 110</option>
                            <option value="CPSC 121">CPSC 121</option>
                            <option value="CPSC 210">CPSC 210</option>
                            <option value="CPSC 213">CPSC 213</option>
                        </select>
                        <br/>
                    </div>

                    <label>Grade: </label>
                    <input type="text" className="browser-default"/>
                    <br/>

                    <label>
                        <input type="radio" className="with-gap" name="course-group"/>
                        <span>Core</span>
                    </label>
                    <label>
                        <input type="radio" className="with-gap" name="course-group"/>
                        <span>Bridging</span>
                    </label>
                    <label>
                        <input type="radio" className="with-gap" name="course-group"/>
                        <span>Exemption</span>
                    </label>
                    <label>
                        <input type="radio" className="with-gap" name="course-group"/>
                        <span>Exemption Replacement</span>
                    </label>

                    <button type="button">Add Course</button>
                </form>
            </div>
        )
    }
}

export default Form