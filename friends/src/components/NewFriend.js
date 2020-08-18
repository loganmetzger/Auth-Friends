import React, { useState } from 'react';

import axios from 'axios'

const NewFriend = props => {

    const { friends, setFriends } = props;

    const [friend, setFriend] = useState({
        name: '',
        email: '',
        age: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('/api/friends', friends)
            .then(res => {
                setFriends([...friends, res.data.payload])
            })
            .catch(err => {
                console.log(err)
            })
    }
    
    const handleChange = (e) => {
        e.persist()
        setFriend({...friend, [e.target.name]: e.target.value})
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="name"
                    value={props.name}
                    onChange={handleChange}
                    placeholder="Name"
                />
                <br />
                <input 
                    type="type" 
                    name="age"
                    value={props.age}
                    onChange={handleChange}
                    placeholder="Age"
                />
                <br />
                <input 
                    type="type" 
                    name="email"
                    value={props.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
                <br />
                <button>Submit Friend</button>
            </form>
        </div>
    )
}

export default NewFriend;