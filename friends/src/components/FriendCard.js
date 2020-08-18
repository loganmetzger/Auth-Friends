import React from 'react';

const FriendCard = props => {

    const { friend } = props

    const { name, email, age } = friend;

    return(
        <div>
            <h3>{name}</h3>
            <h3>{email}</h3>
            <h3>{age}</h3>
        </div>
    )
}

export default FriendCard;