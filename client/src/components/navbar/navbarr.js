import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RegisterModal from '../new/newRegister'
import LoginModal from '../new/newlogin'
import { logout } from '../../Redux/Actions/auth/actions'
import { Nav,NavbarContainer,NavLogo, NavIcon, MobileIcon,NavMenu ,NavItems,NavLinks,
    NavItemBtn,NavBtnLink
} from "./style";
import {Button} from '../../globalStyle'
import {FaTimes,FaBars } from 'react-icons/fa';
import { IconContext } from "react-icons/lib";



function Navbarr() {
    const dispatch = useDispatch();
const[click,setClick]=useState(false)
const [button,setButton]=useState(true)

const isAuth = useSelector((state) => state.authReducer.isAuth);
  const user = useSelector((state) => state.authReducer.user);

  const logoutUser = () => {
    dispatch(logout());
  };


const handelClick=()=>{
    setClick(!click)
}
const showButton=()=>{
    if (window.innerWidth<=960){
        setButton(false)}
        else {
            setButton(true)
        }
    }

useEffect(()=>{
    showButton()
},[])


const authorized=()=>{
 return(
     <>
       <NavItems>
                       <NavLinks to='/profile'>
                           {user&& user.name}
                       </NavLinks>
                   </NavItems>
     </>
 )

}
const unAuthorized=()=>{
 return(
     <>
     <NavItems>
                       <NavLinks to='/adminDashboard'>
                           {user&& user.name}
                       </NavLinks>
                   </NavItems>
      </>
 )

}



    return (
        <>
       <IconContext.Provider value={{color:'#fff'}} >
           <Nav>
               <NavbarContainer>
                   <NavLogo to='/' >
                       <NavIcon/>
                       pog

                   </NavLogo>
                   <MobileIcon  onClick={handelClick} >
                       {click? <FaTimes/> :
                       <FaBars/>   }
                   </MobileIcon>
                   <NavMenu onClick={handelClick} click={click} >
                       <NavItems>
                           <NavLinks to='/'>
                               Home
                           </NavLinks>
                       </NavItems>
                  
                  
                       <NavItems>
                           <NavLinks to='/reports'>
                               Reports
                           </NavLinks>
                       </NavItems>
                  {isAuth&& (
                       user&& user.role=='coordinator'? (
                       <NavItems>
                        <NavLinks to='/adminDashboard'>
                            {user&& user.name}
                        </NavLinks>
                    </NavItems>):( 
                    <NavItems>
                       <NavLinks to='/profile'>
                           {user&& user.name}
                       </NavLinks>
                   </NavItems>)

                  )}
                  
                      {isAuth ?(  <NavItemBtn>
                           {button? (
                               <NavBtnLink >
                                   <Button primary onClick={logoutUser} > Log Out </Button>
                               </NavBtnLink>
                           ): (
                            <NavBtnLink>
                            <Button     primary   > Log Out </Button>
                        </NavBtnLink>
                           ) }
                       </NavItemBtn>):(
                            <NavItemBtn>
                            {button? (
                                <NavBtnLink >
                                    <Button primary> <RegisterModal/> </Button>
                                </NavBtnLink>
                            ): (
                             <NavBtnLink>
                             <Button     primary > <RegisterModal/> </Button>
                         </NavBtnLink>
                            ) }
                        </NavItemBtn>
                      )}


                     
                       {  isAuth === false ?( 
                       <NavItemBtn>
                           {button? (
                               <NavBtnLink >
                                   <Button primary> <LoginModal/> </Button>
                               </NavBtnLink>
                           ): (
                            <NavBtnLink>
                            <Button     primary > <LoginModal/> </Button>
                        </NavBtnLink>
                           ) }
                       </NavItemBtn>): null }
                      
                   </NavMenu>
               </NavbarContainer>


           </Nav>
           </IconContext.Provider> 
        </>
    )
}

export default Navbarr
