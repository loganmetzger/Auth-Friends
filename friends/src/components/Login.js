import React from 'react';

const Login = props => {

    const [initialLogin, setInitialLogin] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        // axios post request goes here
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