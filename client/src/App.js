import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivetRoute from './privetRoute';
import axios from 'axios';
import Navbar from './components/navbar/navbar';
import PFE_List from './components/cards/pfeList/pfeList'
import FEILDS from './components/cards/feildCard/fieldsList';
import Home from './components/pages/homePage';
import Auth from './components/authentification/Auth'
import Login from './components/authentification/logIn'
import SignUp from './components/authentification/Register'
import Profile from './components/pages/profileStudent';
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
        <Route exact  path='/Auth' >
          <Auth/>
        </Route>
        <Route exact  path='/login' >
          <Login/>
        </Route>
        <Route exact  path='/signUp' >
          <SignUp/>
        </Route>
         {/* <FEILDS/> */}

         </Switch> 
     </Router>

    
       
    </div>
  );
}

export default App;