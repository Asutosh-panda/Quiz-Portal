import React, { useState } from "react";
import "./Register.css";
import { useHistory } from "react-router-dom";
const Register = () => {
    const history = useHistory();
    const [mail,setMail] = useState("")
    const [name,setName] = useState("")
    const [college,setCollege] = useState("")
    const [cid,setCid] = useState("")
    const [password,setPassword] =useState("")
    const [password1,setPassword1] =useState("")
    const [type,setType] = useState("")
    const [gender,setGender] = useState("")

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
    const clickFuncRegd=(e)=>{
        e.preventDefault();
        console.log(mail,name,college,cid,type,gender,password,password1)
        if(mail==="" || name==="" || college==="" || cid==="" ||type==="" || gender==="" ||password==="" || password1==="" )
            console.log("value required")
        else{
            if(validateEmail(mail)){
                if(password===password1){
                    history.push('/login')
                }
                else{
                    console.log("passowrds odnot match")
                }
            }
            else{
                console.log("wrong mail")
            }
        }
       
    }
    return (
        <div className="Registration">
           <div class="testbox">
            <h1>Registration</h1>

                <form action="/">
                    
                    <div class="accounttype" onChange={(e)=>setType(e.target.value)}>
                    <input type="radio" value="Student" id="radioOne" name="account"/>
                    <label for="radioOne" class="radio" check>Student</label>
                    <input type="radio" value="Teacher" id="radioTwo" name="account" />
                    <label for="radioTwo" class="radio">Teacher</label>
                    </div>
                    <div class="regdDetails">
                    <div className="regdMail">
                    <label id="icon" for="name"><i class="icon-envelope "></i></label>
                    <input type="text" onChange={(e)=>setMail(e.target.value)} placeholder="Email" value={mail} required/>
                    </div>
                    <div className="regdName">
                    <label id="icon" for="name"><i class="icon-user"></i></label>
                    <input type="text"onChange={(e)=>setName(e.target.value)} placeholder="Name" value={name} required/>
                    </div>
                    <div className="regdCName">
                    <label id="icon" for="name"><i class="fa-solid fa-building-columns"></i></label>
                    <input type="text" onChange={(e)=>setCollege(e.target.value)} placeholder="College Name" value={college} required/>
                    </div>
                    
                    <div className="regdCId">
                    <label id="icon" for="name"><i class="fa-solid fa-id-card"></i></label>
                    <input type="text" onChange={(e)=>setCid(e.target.value)} placeholder="CollegeId" value={cid} required/>
                    </div>
                   
             
                    <div className="regdPass">
                    <label id="icon" for="name"><i class="icon-shield"></i></label>
                    <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Password" value={password} required/>
                    </div>
                    <div className="regdPass1">
                    <label id="icon" for="name"><i class="icon-shield"></i></label>
                    <input type="password" onChange={(e)=>setPassword1(e.target.value)} placeholder="Confirm Password" value={password1} required/>
                    </div>
                </div>
                <div class="gender" onChange={(e)=>setGender(e.target.value)}>
                    <input type="radio" value="male" id="male" name="gender" />
                    <label for="male" class="radio" chec>Male</label>
                    <input type="radio" value="female" id="female" name="gender" />
                    <label for="female" class="radio">Female</label>
                </div> 
                <p>By clicking Register, you agree on our <a href="/register">terms and condition</a>.</p>
                <a onClick={clickFuncRegd} href="/login" class="button">Register</a>
                </form>
</div>
        </div>
    )
}

export default Register;