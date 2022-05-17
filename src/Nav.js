import React from "react";
import {Link} from 'react-router-dom'
import './Nav.css'
const Nav = ()=>{
    return<>
      <div className='Navbar'>
      <div className="navLogo">
        WEBSITE NAME
    </div>
   <div class="navLink"> 
    <nav>
    <ul>
      <li><Link to ="/">Home </Link></li>
      <li><Link to ="/login">Login</Link></li>
      <li><Link to ="/register">Registration</Link></li>
 
   </ul>
  </nav>
  </div>

    </div>
    </>
}

export default Nav;