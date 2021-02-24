import React, { useState, useEffect, Fragment } from 'react';

import './profileStudent.css'

function ProfileStudent() {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    
    return (
     <div className="profileStudent">
            {console.log(user.result)}
        <div className="profile">
            <img className="profilePicture" src={user?.result.imageUrl} alt={user?.result.name}  />
            <h3>{user?.result.name}</h3>
            <h6>{user?.result.email}</h6>
        </div>

        <div className="description">
            <h1>{user?.result.name}</h1>
         </div>
        </div>
    )
}

export default ProfileStudent
