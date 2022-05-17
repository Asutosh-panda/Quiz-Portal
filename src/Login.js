import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css"

const Login = () => {
    const history = useHistory();
    const [college,setCollege] = useState("")
    const [password,setPassword] =useState("")
    const [cid,setCid] = useState("")
    const [type,setType] = useState("")


    const clickFunc=(e)=>{
        e.preventDefault();
        console.log(college,cid,password,type)
        history.push("/StudentDashboard");
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
                    </div>
                    
                    <div class="loginDetails">
                    <div className="loginCName">
                    <label id="icon" for="name"><i class="fa-solid fa-building-columns"></i></label>
                    <input type="text" onChange={(e)=>setCollege(e.target.value)} placeholder="College Name" value={college} required/>
                    </div>
                    <div className="loginCId">
                    <label id="icon" for="name"><i class="fa-solid fa-id-card"></i></label>
                    <input type="text" onChange={(e)=>setCid(e.target.value)} placeholder="CollegeId" value={cid} required/>
                    </div>
                   
                    
                    <div className="loginPass">
                    <label id="icon" for="name"><i class="icon-shield"></i></label>
                    <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Password" value={password} required/>
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