import React, { useState } from "react";
import "./PrevResult.css"
import { useHistory } from "react-router-dom";
import ExamCard from "./ExamCard";
const PrevResult = ({props}) => {
    const history = useHistory();
   
    const [pass, setPass] = useState("")

    const seeResults = () => {
        if (pass === 'password'){
                history.push('/Results')
        }
        else
            console.log("error")
    }
    return (
        <div className="PrevResult">
        <div className="PrevResult-header">
            <label>{props.title}</label>
        </div>
        <div className="PrevResult-body">
            <label>No of question: {props.nques}</label>
            <label>Time: {props.time} mins</label>
        </div>
        <div className="PrevResult-footer">
            <input type="text" onChange={(e) => setPass(e.target.value)} placeholder="passcode" className="PrevResult-Password" />
            <button onClick={seeResults}>See Results</button>
        </div>
    </div>
 
    );

}

export default PrevResult;