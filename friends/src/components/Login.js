import React from 'react';

const Login = props => {

    const { handleChange, handleSubmit, initialLogin } = props;

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="email"
                    value={props.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
                <br />
                <input 
                    type="text" 
                    name="password"
                    value={props.password}
                    onChange={handleChange}
                    placeholder="Password"
                />
                <br />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login;