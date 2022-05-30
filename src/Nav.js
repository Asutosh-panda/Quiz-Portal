import React,{useContext, useEffect, useState} from "react";
import {Link} from 'react-router-dom'
import './Nav.css'
import {LoginContext} from './LoginProvider'

const Nav = ()=>{
  const [loggedIn,setLoggedIn] = useContext(LoginContext); 
     const logoutFunc=()=>{
          localStorage.removeItem("token");
          localStorage.removeItem("username");
          localStorage.removeItem("type");
          setLoggedIn(false);
     }

    return<>
      <div className='Navbar'>
      <div className="navLogo">
        WEBSITE NAME
    </div>
   <div class="navLink"> 
    <nav>
    <ul>
      {(loggedIn)?
       <li><Link to ="/" onClick={logoutFunc}>Logout</Link></li>
        :
        <>
        <li><Link to ="/">Home </Link></li>
        <li><Link to ="/login">Login</Link></li>
        <li><Link to ="/register">Registration</Link></li>
        </>
      }
     
 
   </ul>
  </nav>
  </div>

    </div>
    </>
}

export default Nav;