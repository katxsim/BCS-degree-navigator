import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from "./SignedOutLinks";


const Navbar = () => {
    return (
        <nav className="nav-wrapper blue darken-4">
            <div className="container">
                <img className = "img" src="http://www.volleyballbc.org/wp-content/uploads/2018/08/ubc-logo-png-transparent.png" alt=""/>
                <Link to='/' className='brand-logo'>BCS Degree Navigator</Link>
                <SignedInLinks /> 
                <SignedOutLinks />
            </div>
        </nav>

    )
}

export default Navbar