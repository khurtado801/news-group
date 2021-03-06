import React, { Component } from 'react';
import SignupForm from "./SignupForm";
import { connect } from "react-redux";
import { signup } from "../../../redux/auth";
import "./signup.css"



class Signup extends Component {
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
        this.setState(prevState => {
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
                name: "",
                username: "",
                password: ""
            }
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state.inputs);
        this.clearInputs();
    }

    render() {
        return (
            <div className='login-signup-form-wrapper'>
                <SignupForm
                    handleChange={this.handleChange.bind(this)}
                    handleSubmit={this.handleSubmit.bind(this)}
                    {...this.state.inputs} />

            </div>

        )
    }
}

export default connect(null, { signup })(Signup);
