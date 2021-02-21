
import React, { useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import LoginModal from '../authentification/logIn';
import RegisterModal from '../authentification/Register';

import { logout } from '../../Redux/Actions/auth/actions';
import './navbar.css'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
  } from 'reactstrap';
function App() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const user = useSelector((state) => state.authReducer.user);

  const toggle = () => setIsOpen(!isOpen);

  const logoutUser = () => {
    dispatch(logout());
  };
  const authLinks = (
    <ul className="navbar">
      
      <Link className='item'
        to='/Profile'> 
      <li className='item'> {user ? ` ${user.name}` : null} </li>
      </Link>
        
      <Link className='item'  to='/'>
             <li onClick={logoutUser} >
             {' '}
               Logout</li>
          </Link>
      </ul>

  );
  const guestLinks = (
    <div style={{display:'flex'}}>
      <NavItem>
        <RegisterModal />
      </NavItem>
      <NavItem>
        <LoginModal />
      </NavItem>
    </div>
  );
  return (
    <div>
     <nav>
<div  class="hamburger">
    <div class="line" ></div>
    <div class="line" ></div>
    <div class="line" ></div>
</div >
<div className="navContainer">
<h3><span>PFE</span> Online guide.</h3>
<ul className="navbar">
          <Link className='item'  to='/'>
             <li >Home</li>
          </Link>
 {/* <NavbarToggler onClick={toggle} />  */}
   <Link className='item'  to='/A'> <li className='item'> reports </li></Link>
   <div>{isAuth ? authLinks : guestLinks}</div>
   {/* <Link className='item'  to='/Profile'> <li className='item'> profile </li></Link>
   <a class="item" href="#"> <li className='item'> <button>Login</button> </li></a> */}
</ul>
</div>
</nav>


    </div>
  );
}

export default App;