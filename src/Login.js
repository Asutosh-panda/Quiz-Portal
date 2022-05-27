import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css"

const Login = () => {
    const history = useHistory();
    const [mail,setMail] = useState("")
    const [password,setPassword] =useState("")
    const [type,setType] = useState("")
    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
    const clickFunc=(e)=>{
        e.preventDefault();
        if(type==="")
        document.getElementById("type").style.visibility="visible"
        else
        document.getElementById("type").style.visibility="hidden"

         
        if(!validateEmail(mail)){
            document.getElementById("mail").style.visibility="visible"
        }
        else{ 
            document.getElementById("mail").style.visibility="hidden"
            if(password=="")
            document.getElementById("pass").style.visibility="visible"
            else{
            document.getElementById("pass").style.visibility="hidden"       
            if(type==="Student"){
                history.push("/StudentDashboard");
            }
            else if(type===""){
                console.log("Please select a type")
            }
            else{
                history.push("/TeacherDashboard");
        }
    }
    }

       
    }
    return (
            <div className="Login">
           <div class="testbox">
            <h1>Login</h1>

                <form action="/">
                    
                    <div class="accounttype"  onChange={(e)=>setType(e.target.value)}>
                    <input type="radio" value="Student" id="radioOne" name="account"  />
                    <label for="radioOne" class="radio" check>Student</label>
                    <input type="radio" value="Teacher" id="radioTwo" name="account" />
                    <label for="radioTwo" class="radio">Teacher</label>
                    <i class="fa fa-exclamation loginexclamation" id="type" aria-hidden="true"></i>
                    </div>
                    
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
        </div>
        
    )
}

export default Login;