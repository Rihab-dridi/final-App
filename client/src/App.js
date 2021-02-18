import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios';
import Navbar from './components/navbar/navbar';
import PFE_List from './components/cards/pfeList/pfeList'
import FEILDS from './components/cards/feildCard/fieldsList';
import Home from './components/home/staticPages/homePage'
import A from './A'
function App() {
  
  return (

    <div className="App">
      
      <Router>
      
     
         <Navbar/> 
        <Route exact path='/' >
          <Home/>
        </Route>
        <Route  path='/A' >
          <A/>
        </Route>
         <FEILDS/>

         
     </Router>
    
       
    </div>
  );
}

export default App;