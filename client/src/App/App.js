import React, { Component } from 'react'
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import {connect} from "react-redux";
import {verifyUser} from '../redux/auth';
import Landing from './components/Home/Landing/Landing.js';
import Home from '../App/components/Home/Home.js';
import Profile from '../App/components/Profile/Profile.js';
import Contact from '../App/components/Contact/Contact.js';
import Header from './components/Header/Header.js';
import Navbar from './components/Navbar/Navbar.js';
import Footer from './components/Footer/Footer.js';
import Login from './components/Login/Login.js'
import Signup from './components/Signup/Signup.js';
import LoginForm from './components/Login/Login.js';
// import Profile from "./Profile";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.js";

import './App.css';

class App extends Component {
    componentDidMount = () => {
        this.props.verifyUser()
    }

    render () {
        return (
            <div className="app-wrapper">
                <Navbar/>
                
                <Switch>
                    <Route exact path="/" component={Signup}/>
                    <Route path="/login" component={Login}/>
                    <ProtectedRoute path="/home" component={Home}/>
                    <ProtectedRoute path="/profile" component={Profile}/>
                    {/* <Route path="/home" component = {Home}></Route> */}
                </Switch>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return state
}

export default withRouter(connect(mapStateToProps, { verifyUser })(App))