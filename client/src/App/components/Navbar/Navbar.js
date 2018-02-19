import React,{Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from "../../../redux/auth.js";

class Navbar extends Component {
    constructor(props){
        super(props)
    }


    render(){
        //ask ben about why so many authenticateds
        const isAuthenticated = this.props.auth.isAuthenticated;
        console.log(isAuthenticated)
        return (
            <div className="navbar-wrapper">
                {isAuthenticated ? null : <div className="nav-link"><Link to="/">Sign Up</Link></div>}
                {/* <div className="nav-link"><Link to="/">Sign Up</Link></div> */}
                {/* <div className="nav-link"><Link to="/login">Log In</Link></div> */}
                {isAuthenticated ? null : <div className="nav-link"><Link to="/login">Login</Link></div>}
                {/* <div className="nav-link"><Link to="/todos">Todos</Link></div> */}
                {isAuthenticated ? <div className="nav-link"><Link to="/todos">Todos</Link></div> : null}
                {/* <div className="nav-link"><Link to="/profile">Profile</Link></div> */}
                {isAuthenticated ?  <div className="nav-link"><Link to="/home">Home</Link></div> : null}
                {/* <div className="nav-link"> */}
                {isAuthenticated ? <div className="nav-link"><Link to="/profile">Profile</Link></div> : null}
                {isAuthenticated ?  <div className="nav-link"><button onClick={this.props.logout}>Logout</button></div> : null}
                {/* </div> */}
            </div>
        )


    }
   
}
const mapStateToProps = (state) => {  
    return state;
}
export default connect(mapStateToProps, {logout})(Navbar);