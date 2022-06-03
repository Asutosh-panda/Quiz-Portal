import React, { useState } from "react";
import "./Register.css";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import RegisterVector from "./RegisterVector";
import Loader from "./Loader";

const Register = () => {
    const history = useHistory();
    const [mail, setMail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [password1, setPassword1] = useState("")
    const [type, setType] = useState("")


    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const clickFuncRegd = (e) => {
        e.preventDefault();
        console.log(mail, name, type, password, password1)
        if (name === "" || type === "" || password === "" || password1 === "" || !validateEmail(mail) || password !== password1) {
            if (name === "")
                document.getElementById("name").style.visibility = "visible"
            else
                document.getElementById("name").style.visibility = "hidden"

            if (type === "")
                document.getElementById("type").style.visibility = "visible"
            else
                document.getElementById("type").style.visibility = "hidden"



            if (password === "")
                document.getElementById("pass").style.visibility = "visible"
            else
                document.getElementById("pass").style.visibility = "hidden"

            if (password1 === "")
                document.getElementById("pass1").style.visibility = "visible"
            else
                document.getElementById("pass1").style.visibility = "hidden"

            if (!validateEmail(mail))
                document.getElementById("mail").style.visibility = "visible"
            else
                document.getElementById("mail").style.visibility = "hidden"

            if (password !== password1)
                document.getElementById("pass1").style.visibility = "visible"
            else
                document.getElementById("pass1").style.visibility = "hidden"

        }
        else {
            if (password === password1) {
                document.getElementById("loader").style.visibility = "visible"
                const payload = {
                    "username": mail,
                    "password": password,
                    "name": name,
                    "role": type
                }

                axios.post('https://quiz-portal-api.herokuapp.com/api/auth/register', payload).then(res => { console.log(res); history.push('/login') }).catch(e => { console.log(e); alert("user exists"); })
                
            }
            else {
                document.getElementById("pass1").style.visibility = "visible"
            }
        }

    }
    return (<>
        <div className="Registration">
            <div class="testbox">
                <h1>Registration</h1>

                <form action="/">

                    <div class="accounttype" onChange={(e) => setType(e.target.value)}>
                        <input type="radio" value="Student" id="radioOne" name="account" />
                        <label for="radioOne" class="radio" check>Student</label>
                        <input type="radio" value="Teacher" id="radioTwo" name="account" />
                        <label for="radioTwo" class="radio">Teacher</label>
                        <i class="fa fa-exclamation exclamation" id="type" aria-hidden="true"></i>
                    </div>
                    <div class="regdDetails">
                        <div className="regdMail">
                            <label id="icon" for="name"><i class="icon-envelope "></i></label>
                            <input type="text" onChange={(e) => setMail(e.target.value)} placeholder="Email" value={mail} required />
                            <i class="fa fa-exclamation exclamation" id="mail" aria-hidden="true"></i>
                        </div>
                        <div className="regdName">
                            <label id="icon" for="name"><i class="icon-user"></i></label>
                            <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Name" value={name} required />
                            <i class="fa fa-exclamation exclamation" id="name" aria-hidden="true"></i>
                        </div>

                        <div className="regdPass">
                            <label id="icon" for="name"><i class="icon-shield"></i></label>
                            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" value={password} required />
                            <i class="fa fa-exclamation exclamation" id="pass" aria-hidden="true"></i>
                        </div>
                        <div className="regdPass1">
                            <label id="icon" for="name"><i class="icon-shield"></i></label>
                            <input type="password" onChange={(e) => setPassword1(e.target.value)} placeholder="Confirm Password" value={password1} required />
                            <i class="fa fa-exclamation exclamation" id="pass1" aria-hidden="true"></i>
                        </div>
                    </div>

                    <p>By clicking Register, you agree on our <a href="/register">terms and condition</a>.</p>
                    <a onClick={clickFuncRegd} href="/login" class="button">Register</a>
                </form>
            </div>
            <RegisterVector />
        </div>
        <div id="loader" style={{visibility:"hidden"}}>
         <Loader  />
         </div>
         </>
    )
}

export default Register;