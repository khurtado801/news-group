import React, { Component } from "react";
import ProfileForm from "./ProfileForm.js";
import { connect } from "react-redux";
import { editProfile } from "../../../redux/profile";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                username: ""
            }
        }
    }

    handleChange = (e) => {
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [e.target.name]: e.target.value
                }
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.props.auth._id, "test")
        this.props.editProfile(this.state.inputs, this.props.auth._id)
    } 

    render() {
        return (
            <div>
                <ProfileForm>
                    {/* <h2>Username: <i>{this.props.auth.username}</i></h2>
                    <button onClick={this.handleClick}>Edit Username</button> */}
                    handleChange={this.handleChange.bind(this)}
                    handleSubmit={this.handleSubmit.bind(this)}
                    {this.state.inputs}
                </ProfileForm>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, { editProfile })(Profile);






