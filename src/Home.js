import React from "react";
import HomeImg from "./HomeImg";
import "./Home.css"

const Home=()=>{
    return (
    <div className="Home">
        <HomeImg/>
        <div className="HomeText">
            <h1>Welcome to the Online Exam Hub</h1>
            <h2>Online tests made easy for you.</h2>
        </div>
    </div>)
}

export default Home;