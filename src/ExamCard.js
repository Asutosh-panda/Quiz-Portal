import React, { useState } from "react";
import "./ExamCard.css"
import { useHistory } from "react-router-dom";
const ExamCard = ({type}) => {
    const history = useHistory();
    console.log("the type is ",{type})
    const [pass, setPass] = useState("")
    const startExam = () => {
        if (pass === 'password'){
            if(type==='teacher'){
                history.push("/QuestionSet");
            }
            else
                history.push('/QuestionPage')
        }
        else
            console.log("error")
    }
    
    return (
        <div className="ExamCard">
        <div className="ExamCard-header">
            <label>Exam title</label>
        </div>
        <div className="ExamCard-body">
            <label>No of question: 15</label>
            <label>Time: 20mins</label>
        </div>
        <div className="ExamCard-footer">
            <input type="text" onChange={(e) => setPass(e.target.value)} placeholder="passcode" className="ExamCard-Password" />
            <button onClick={startExam}>Start Exam</button>
        </div>
    </div>
    );
}

export default ExamCard;