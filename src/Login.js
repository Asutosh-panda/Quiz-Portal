import React, { useState,useContext } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css"
import axios from 'axios';  
import {LoginContext} from './LoginProvider'
import LoginVector from "./LoginVector ";

const Login = () => {
    const history = useHistory();
    const [isLogged,setIsLogged] = useContext(LoginContext);

    const [mail,setMail] = useState("")
    const [password,setPassword] =useState("")
    const [loggedIn,setLoggedIn] = useContext(LoginContext); 
    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
    const clickFunc=(e)=>{
        e.preventDefault();
        

         
        if(!validateEmail(mail)){
            document.getElementById("mail").style.visibility="visible"
        }
        else{ 
            document.getElementById("mail").style.visibility="hidden"
            if(password=="")
            document.getElementById("pass").style.visibility="visible"
            else{
            document.getElementById("pass").style.visibility="hidden" 
            let payload = {
                "username":mail,
                "password":password
            }    
          
                axios.post('https://quiz-portal-api.herokuapp.com/api/auth/login',payload)
                .then(res=>{console.log(res.data,"res");
                            localStorage.setItem("token",res.data.data)
                            localStorage.setItem("username",res.data.user.username);
                            localStorage.setItem("type",res.data.user.role);
                            localStorage.setItem("userId",res.data.user._id);
                            setLoggedIn(true);
                            if(res.data.user.role ==="Student"){
                                history.push("/StudentDashboard")
                            }
                            else{
                                history.push("/TeacherDashboard");
                            }
                            })
                            
                .catch(e=>console.log(e))
        
           
        }
    }
    }

       
    
    return (
            <div className="Login">
           <div class="testbox">
            <h1>Login</h1>

                <form action="/">
                    
                    <div class="loginDetails">
                    <div className="regdMail">
                    <label id="icon" for="name"><i class="icon-envelope "></i></label>
                    <input type="text" onChange={(e)=>setMail(e.target.value)} placeholder="Email" value={mail} required/>
                    <i class="fa fa-exclamation loginexclamation" id="mail" aria-hidden="true"></i>
                    </div>
                   
                    <div className="loginPass">
                    <label id="icon" for="name"><i class="icon-shield"></i></label>
                    <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Password" value={password} required/>
                    <i class="fa fa-exclamation loginexclamation" id="pass" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="loginButton">
                <a onClick={clickFunc} href="/login" class="button">Login</a>
                </div>
                </form>
          </div>
          <LoginVector/>
        </div>
        
    )
}

export default Login;