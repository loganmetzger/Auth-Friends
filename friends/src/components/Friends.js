import React, { useState, useEffect } from 'react';

import axiosWithAuth from '../utils/axiosWithAuth'

const Friends = (props) => {

    const [friends, setFriends] = useState([])

    const getFriends = () => {
        axiosWithAuth()
            .get('/api/friends')
            .then(res => {
                setFriends(res.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getFriends()
    }, [])

    return(
        <div>
            <h1>something</h1>
        </div>
    )
}

export default Friends;