import React, { Component } from 'react';
import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import {login} from "../../../redux/auth";
import './Login.css';
import './Landing.css';


class Login extends Component {
    constructor() {
        super();
        this.state = {
            inputs: {
                username: "",
                password: ""
            }
        }
    }

    handleChange(e) {
        e.persist();
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [e.target.name]: e.target.value
                }
            }
        })
    }

    clearInputs() {
        this.setState({
            inputs: {
                username: "",
                password: ""
            }
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state.inputs);
        this.clearInputs();
    }

    render() {
        return (
            <div className='login-signup-form-wrapper'>
                <LoginForm
                    handleChange={this.handleChange.bind(this)}
                    handleSubmit={this.handleSubmit.bind(this)}
                    {...this.state.inputs} />
            </div>
        )
    }
}

export default connect(null, {login})(Login);