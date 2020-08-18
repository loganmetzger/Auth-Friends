import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth'

const Login = props => {

    const [initialLogin, setInitialLogin] = useState({
        username: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        axiosWithAuth().post('/api/login', initialLogin)
            .then(res => {
                localStorage.setItem('token', res.data.payload)
                // props.history.push('/protected')
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
                    name="username"
                    value={props.username}
                    onChange={handleChange}
                    placeholder="Username"
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