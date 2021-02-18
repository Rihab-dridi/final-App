import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './navbar.css'
function App() {
  
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
   <Link className='item'  to='/A'> <li className='item'> reports </li></Link>
   <a class="item" href="#"> <li className='item'> profile </li></a>
   <a class="item" href="#"> <li className='item'> <button>Login</button> </li></a>
</ul>
</div>
</nav>


    </div>
  );
}

export default App;