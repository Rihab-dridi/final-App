import React, { useState, useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useHistory, useLocation} from 'react-router-dom'
import {Link} from 'react-router-dom';
import './navbar.css'
import LoginModal from '../authentification/logIn';




const NavBar=()=>{
  const dispatch= useDispatch()
  
  const history = useHistory();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const location = useLocation();

  useEffect(() => {
    const token = user?.token;

    

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);



 const logout=()=>{
  dispatch({type: 'LOGOUT'})
  history.push('/')
  setUser(null)
}


 

  return (

<nav>
<div className="navContainer">
<h3><span>PFE</span> Online guide.</h3>
<ul  className="navbar" >
          
          <Link className='item'  to='/'>
             <li >Home</li>
          </Link>
          
          <li style={{ display:'flex' , padding:'0'}}>
            {user? (
              <li style={{ display:'flex', alignItems:'center' , width:'100%', margin:'0'}} >
                  <li className='item'> 
                     <img style={{borderRadius:'50%', width:'25px', height:'25px'}} src={user?.result.imageUrl} alt={user?.result.name}  />
                  </li>
                  
                  <li className='item'>{user.result.name} </li>
                  <li className='item'onClick={logout} ><button> Logout</button> </li>
              </li>

 
            ):
            (
              <li className='item'> 
                <Link to="/Auth">
                <li className='item'><button>Sign In </button></li>
                </Link>

              </li>

            )}
          </li>

</ul>
</div>
</nav>
 );
};

export default NavBar;