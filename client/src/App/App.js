import React, { Component } from 'react'

import Landing from '../App/components/Landing/Landing.js';
import Home from '../App/components/Home/Home.js';
import Profile from '../App/components/Profile/Profile.js';
import Contact from '../App/components/Contact/Contact.js';
import Header from './components/Header/Header.js';
import Navbar from './components/Navbar/Navbar.js';
import Footer from './components/Footer/Footer.js';

class App extends Component {
    render () {
        return (
            <div>
                App
                <Header />
                <Navbar />
                <Home />
                <Landing />
                <Profile />
                <Contact />
                <Footer />
            </div>
        )
    }
}

export default App