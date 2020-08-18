import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth'

const Login = props => {

    const [initialLogin, setInitialLogin] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        axiosWithAuth().post('/api/login', initialLogin)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }
    
    const handleChange = (e) => {
        e.persist()
        setInitialLogin({...initialLogin, [e.target.name]: e.target.value})
    }

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
                    type="password" 
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