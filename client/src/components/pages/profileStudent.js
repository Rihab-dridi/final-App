import React, { useState, useEffect, Fragment } from 'react';
import {useSelector  } from "react-redux";
import Card from './pfeList/pfeCard'
import './profileStudent.css'

function ProfileStudent() {

     const isAuth = useSelector((state) => state.authReducer.isAuth);
     const user = useSelector((state) => state.authReducer.user);
    
    return (
     <div className="profileStudent">
           
        {/* <div className="profile">
            <img className="profilePicture" src={user?.result.imageUrl} alt={user?.result.name}  />
            <h3>{user?.result.name}</h3>
            <h6>{user?.result.email}</h6>
        </div> */}
        {/* <div className="profile">
            <img className="profilePicture" src={user?.image} alt={user?.name}  />
            <h3>{user?.name} {user.lastname}</h3>
            <h6>{user?.email}</h6>
            <h1> hikjuhuygbuyg</h1>
        </div> */}

        {/* <div className="description">
            <h1>{user?.result.name}</h1>
         </div>
         <div className="PreviousTitles" >
              <h2 >Favorite List</h2>
            </div>
            
            <div style= {{padding:"50px", paddingTop:'0px'}}>
         
            <div style={{display:'flex', paddingTop:'20px'}}div className='feildCard'>
            
            {user.result.favorite_list&& user.result.favorite_list
           
        . 
        map((book,i)=>(
            <Card book={book}/> )
  
)}
</div> 
</div> */}
        </div>
    )
}

export default ProfileStudent
