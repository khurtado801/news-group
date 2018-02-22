import React from 'react'

function ProfileForm(props) {
    return (
        <div className="form-wrapper">
        <div className="login-wrapper">
            <form onSubmit={props.handleSubmit}>
                <h3>Change Username...because mine sucks-ass</h3>
                <input
                className='username-input signup-input'
                    onChange={props.handleChange}
                    value={props.inputs.username}
                    name="username"
                    type="text"
                    placeholder="Username"/>
                <button type="submit">Submit</button>
            </form>
        </div>
        </div>
    )
}

export default ProfileForm;