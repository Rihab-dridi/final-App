import React, { useState, useEffect } from 'react';
import {  useSelector, useDispatch} from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {PrivateRoute, AdminRoute} from './privetRoute';
import {GlobalStyle} from './globalStyle'
import Dashboard from './components/pages/new/dashboard'
import axios from 'axios';
import Navbar from './components/navbar/navbarr';
import PFE_List_FILTER from './components/pages/pfeList/pfeListFilter'
import Details from './components/pages/pfeList/pfeDetails.js/pfeDetail'
import FEILDS from './components/pages/feildCard/fieldsList';
import Home from './components/pages/homePage';
import Auth from './components/authentification/Auth'
import Login from './components/authentification/logIn'
import SignUp from './components/authentification/Register'
import Profile from './components/pages/profileStudent';
import {getAuthUser} from './Redux/Actions/auth/actions'
import AdminDashboard from './components/pages/adminsDashboard.js/adminDashboard';
import Footer from './components/pages/footer/footerr'
import { Spinner } from 'reactstrap';
import A from './A'
import Unavailble from './components/unAvailble/unavailble';
function App() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.authReducer);
  const getUser = () => dispatch(getAuthUser());

  useEffect(() => {
    getUser();
  }, []);


  if (isLoading) {
    return (

      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Spinner
          style={{ width: '3rem', height: '3rem', color: 'secondary' }}
          type="grow"
        />
      </div>
    );
  }
  
  return (

    <div className="App">
      
      <Router>
      
     
         <Navbar/>
         <Switch>
        <Route exact path='/' >
          <Home/>
        </Route>
       
        <Route exact  path='/login' >
          <Login/>
        </Route>
        <Route exact  path='/register' >
          <SignUp/>
        </Route>
        <Route exact  path='/reports' >
        <FEILDS/>
        </Route>
        <Route exact  path='/reports/:ID' >
        <PFE_List_FILTER  />
        </Route>
        <Route exact  path='/reports/pfe/:PFEID' >
        <Details  />
        </Route>
        <Route exact  path='/unavailable' >
        <Unavailble  />
        </Route>
        
        
        <PrivateRoute path='/profile'component={Dashboard}/>
        <AdminRoute path="/adminDashboard" component={AdminDashboard} />
      
        
         </Switch> 
         <Footer/>
     </Router>
    
     
    
       
    </div>
  );
}

export default App;