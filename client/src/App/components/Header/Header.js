import React, { Component } from 'react'

import Navbar from './Navbar/Navbar.js';
import './Header.css';

class Header extends Component {
    render () {
        return (
            <div>
                <Navbar />  
                    <div className='header-wrapper'>
                        <div className='header-item'>
                            {/* <h1>V School Info-tainment Times</h1> */}
                        </div>
                    </div>
            </div>
        )
    }
}

export default Header