import React, { Component } from 'react'

class Form extends Component {
    render() {
        return (

            <form action="#">
                <p>
                    <label>
                        <input type="checkbox"/>
                        <span>CPSC 110</span>
                    </label>
                </p>

                <p>
                    <label>
                        <input type="checkbox"/>
                        <span>CPSC 210</span>
                    </label>
                </p>

                <p>
                    <label>
                        <input type="checkbox"/>
                        <span>CPSC 121</span>
                    </label>
                </p>

                <p>
                    <label>
                        <input type="checkbox"/>
                        <span>CPSC 221</span>
                    </label>
                </p>

            </form>
        )
    }
}

export default Form