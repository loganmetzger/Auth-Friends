import React, { useState, useEffect } from 'react';

import axiosWithAuth from '../utils/axiosWithAuth'
import FriendCard from './FriendCard'
import NewFriend from './NewFriend'

const Friends = (props) => {

    const [friends, setFriends] = useState([])

    const getFriends = () => {
        axiosWithAuth()
            .get('/api/friends')
            .then(res => {
                console.log(res.data)
                setFriends(res.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getFriends()
    }, [])

    return(
        <div>
            <h2>Friends</h2>
            <NewFriend friends={friends} setFriends={setFriends} />
            {friends ? friends.map(friend => {
                return <FriendCard friend={friend} key={friend.id} />
            }) : <>Fragment</>}
        </div>
    )
}

export default Friends;