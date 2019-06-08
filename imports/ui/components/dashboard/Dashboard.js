import React, {Component} from 'react'
import Notifications from './Notifications'
import Core from './Core'
import Exemptions from "./Exemptions";
import Bridging from "./Bridging";


class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                    <Core />
                    <Exemptions/>
                    <Bridging/>
                    </div>
                        <div className="col s12 m5 offset-m1"> </div>
                    <Notifications />
                </div>
            </div>
        )
    }
}

export default Dashboard