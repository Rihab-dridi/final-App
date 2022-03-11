import React, { useState, useEffect, Fragment } from 'react';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import {useHistory, useLocation} from 'react-router-dom'
import {Link} from 'react-router-dom';
import './navbar.css'
import LoginModal from '../new/newlogin';
import RegisterModal from '../new/newRegister';
import { logout } from '../../Redux/Actions/auth/actions'

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



const AppNavbar = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const user = useSelector((state) => state.authReducer.user);

  const toggle = () => setIsOpen(!isOpen);

  const logoutUser = () => {
    dispatch(logout());
  };

  const authLinks = (
    <Fragment>
      <Link to='/reports' >
            <NavItem className='mt-2 mr-3'>
            Reports
          </NavItem>
          </Link>{user && user.role=="coordinator"?(<NavItem>
        <Link to="/adminDashboard">
          <span className="navbar-text mr-3 p-2">
           {user&& < img style={{borderRadius:'50%', width:'25px', height:'25px'}} src={user.image} /> }
            <strong>{user ? ` ${user.name} ${user.lastName}` : null}</strong>
          </span>
        </Link>
      </NavItem>):(<NavItem>
        <Link to="/profile">
          <span className="navbar-text mr-3 p-2">
           {user&& < img style={{borderRadius:'50%', width:'25px', height:'25px'}} src={user.image} /> }
            <strong>{user ? ` ${user.name} ${user.lastName}` : null}</strong>
          </span>
        </Link>
      </NavItem>)
      }
      <NavLink href="#"    onClick={logoutUser}>
        {' '}
        Logout
      </NavLink>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <Link to='/reports' >
            <NavItem  className='mt-2 '>
            Reports
          </NavItem>
          </Link>
      <NavItem>
        <RegisterModal />
      </NavItem>
      <NavItem>
        <LoginModal />
      </NavItem>
    </Fragment>
  );

  return (
    <div className='new'>
      <Navbar color="dark" dark expand="sm" >
        <Container>
          <NavbarBrand href="/"><h3><span>PFE</span> Online guide.</h3></NavbarBrand>
        
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto "  navbar>
              {isAuth ? authLinks : guestLinks}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default AppNavbar;