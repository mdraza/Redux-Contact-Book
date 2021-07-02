import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-primary navbar-dark justify-content-between">
            <div className="container">
            <Link className="navbar-brand" to="/">Logo</Link>
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link to="/contact/addcontact" className="btn btn-light">Add Contact</Link>
                </li>
            </ul>
            </div>
        </nav>
    )
}

export default Nav
