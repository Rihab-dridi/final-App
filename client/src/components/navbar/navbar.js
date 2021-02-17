import React, { useState } from 'react';
import './navbar.css'
function App() {
  
  return (
    <div>
     <nav>
<div  class="hamburger">
    <div class="line" ></div>
    <div class="line" ></div>
    <div class="line" ></div>
</div>
<ul class="navbar">
   <a class="item" href="#"> <li> home </li></a>
   <a class="item" href="#"> <li> reports </li></a>
   <a class="item" href="#"> <li> profile </li></a>
   <a class="item" href="#"> <li> log in </li></a>
</ul>
</nav>


    </div>
  );
}

export default App;