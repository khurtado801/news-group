import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../../../redux/auth.js";

import './Navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        //ask ben about why so many authenticateds
        const isAuthenticated = this.props.auth.isAuthenticated;
        console.log(isAuthenticated)
        return (
            <div className="navbar-wrapper">
                <div className="navbar-main">
                    <div className='navbar-header'>
                        <h1 className="mainTitle">V School Info-tainment Times</h1>
                    </div>
                        <div className='navbar-items'>
                            <div className="navbar-item">
                                {isAuthenticated ? null : <div className="nav-link"><Link to="/login">Login</Link></div>}
                            </div>
                            <div className="navbar-item">
                                {isAuthenticated ? null : <div className="nav-link"><Link to="/signup">Sign Up</Link></div>}
                            </div>
                            <div className="navbar-item">
                                {isAuthenticated ? <div className="nav-link"><Link to="/home">Home</Link></div> : null}
                            </div>
                            <div className="navbar-item">
                                {isAuthenticated ? <div className="nav-link"><Link to="/profile">Profile</Link></div> : null}
                            </div>
                            <div className="navbar-item">
                                {isAuthenticated ? <div className="nav-link"><button onClick={this.props.logout}>Logout</button></div> : null}
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}
export default connect(mapStateToProps, { logout })(Navbar);