import React from 'react'

function ProfileForm(props) {
    return (
        <div className="form-wrapper">
            <form onSubmit={props.handleSubmit}>
                <h3>Change Username...because mine sucks-ass</h3>
                <input
                    onChange={props.handleChange}
                    value={props.username}
                    name="username"
                    type="text"
                    placeholder="Username"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ProfileForm;