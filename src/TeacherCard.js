import React, { useState } from "react";
import "./TeacherCard.css"
import { useHistory } from "react-router-dom";
const TeacherCard = () => {
    const history = useHistory();
    const [time,setTime] = useState("");
    const [nques,setNques] = useState("");
    const [title,setTitle] = useState("");
    const [pass, setPass] = useState("")
    const setQuestion= () => {
    //    console.log(title,time,nques,pass);
       history.push('/QuestionSet',{title,time,nques,pass});
    }
    
    return (
        
        <div className="TeacherCard">
        <div className="TeacherCard-header">
            <label>Exam title:<input placeholder="title of exam" onChange={(e)=>setTitle(e.target.value)} value={title}></input></label>
        </div>
        <div className="TeacherCard-body">
            <label>No of question: <input placeholder="no. of questions" onChange={(e)=>setNques(e.target.value)} value={nques}></input></label>
            <label>Time: <input placeholder="no. of mins" onChange={(e)=>setTime(e.target.value)} value={time}/></label>
        </div>
        <div className="TeacherCard-footer">
            <input type="text" onChange={(e) => setPass(e.target.value)} placeholder="passcode" className="TeacherCard-Password" />
            <button onClick={setQuestion}>Set Question</button>
        </div>
    </div>
    );
}

export default TeacherCard;