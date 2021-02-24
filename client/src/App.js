import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivetRoute from './privetRoute';
import axios from 'axios';
import Navbar from './components/navbar/navbar';
import PFE_List_FILTER from './components/pages/pfeList/pfeListFilter'
import Details from './components/pages/pfeList/pfeDetail'
import FEILDS from './components/pages/feildCard/fieldsList';
import Home from './components/pages/homePage';
import Auth from './components/authentification/Auth'
import Login from './components/authentification/logIn'
import SignUp from './components/authentification/Register'
import Profile from './components/pages/profileStudent';
import AdminDashboard from './components/pages/adminsDashboard.js/adminDashboard'
import A from './A'
function App() {
  
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
        
        <Route exact  path='/profile' >
        <AdminDashboard/>
        </Route>
      
        
         </Switch> 
     </Router>
    
     
    
       
    </div>
  );
}

export default App;