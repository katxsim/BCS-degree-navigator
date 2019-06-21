import React, { Component } from 'react'

class Results extends Component {

    render() {
        return (
            <div>
                <h4 className="center">Progress</h4>
                <div className="col s12 card">

                    <h5 className="center">Core</h5>
                    <progress max="11" value="4" className="col s12 core"/>
                    <p className="complete">CPSC 110</p>
                    <p className="complete">CPSC 210</p>
                    <p className="complete">MATH 108</p>
                    <p className="incomplete">CPSC 213</p>
                    <p className="incomplete">CPSC 213</p>
                    <p className="incomplete">CPSC 213</p>
                    <p className="incomplete">CPSC 213</p>
                    <p className="incomplete">CPSC 213</p>
                    <p className="incomplete">3 out of 3 electives 300+</p>
                    <p className="incomplete">3 out of 3 electives 400+</p>

                    <h5 className="center">Bridging</h5>
                    <progress max="3" value="2" className="col s12 bridging"/>
                    <p className="incomplete">2 out of 3</p>

                    <h5 className="center">Exemption Replacements</h5>
                    <progress max="3" value="3" className="col s12 replacements"/>
                    <p className="complete">all done</p>
                </div>
            </div>
        )
    }
}

export default Results