import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './components/navbar/navbar';
import PFE_List from './components/cards/pfeList/pfeList'
import FEILDS from './components/cards/fields';
function App() {
  
  return (
    <div>
     <h1>home</h1>
     <Navbar/>
     <PFE_List/> 
     <FEILDS/>
       
    </div>
  );
}

export default App;