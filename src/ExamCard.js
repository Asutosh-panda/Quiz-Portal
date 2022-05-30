import React, { useState } from "react";
import "./ExamCard.css"
import { useHistory } from "react-router-dom";
const ExamCard = ({props}) => {
    const history = useHistory();
    
    const [pass, setPass] = useState("")
    const startExam = () => {
        if (pass === 'password'){
                history.push('/QuestionPage')
        }
        else
            console.log("error")
    }
    
    return (
        <div className="ExamCard">
        <div className="ExamCard-header">
            <label>{props.title}</label>
        </div>
        <div className="ExamCard-body">
            <label>No of question: {props.nques}</label>
            <label>Time: {props.time}mins</label>
            <label>Date: {props.date}</label>
        </div>
        <div className="ExamCard-footer">
            <input type="text" onChange={(e) => setPass(e.target.value)} placeholder="passcode" className="ExamCard-Password" />
            <button onClick={startExam}>Start Exam</button>
        </div>
    </div>
    );
}

export default ExamCard;