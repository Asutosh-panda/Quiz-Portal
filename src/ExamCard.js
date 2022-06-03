import React, { useState } from "react";
import "./ExamCard.css"
import { useHistory } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";
const ExamCard = ({ title, nques, id,time }) => {
    const history = useHistory();
    console.log(time)
    const [pass, setPass] = useState("")
    const [quizdata, setQuizData] = useState([]);
    const setArray = (quizdata) => {
        let quizArray = []
        quizdata.questions.forEach((element, index) => {
            let question = element.question;
            let option1 = element.options[0];
            let option2 = element.options[1];
            let option3 = element.options[2];
            let option4 = element.options[3];
            let obj = {
                "question": question,
                "option1": option1,
                "option2": option2,
                "option3": option3,
                "option4": option4,
                "submit": "",
                "key": index + 1
            }
            quizArray.push(obj)
        })
        return quizArray

    }

    const startExam = (e) => {
        console.log(e.target.title)
        let t = e.target.title
        var token = localStorage.getItem('token');
        
        
       
        axios.get(`https://quiz-portal-api.herokuapp.com/api/quiz/getQuizByName/${e.target.title}`, {
            headers: {
                'x-auth-token': token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                console.log(res.data.quizData.passcode)
                if (res.data.quizData.passcode !== pass) {
                    alert("incorrect password")
                }
                else {
                    localStorage.setItem("quizName", t)
                    let quizarr = setArray(res.data.quizData)
                    localStorage.setItem("time",time)
                    history.push({ pathname: '/QuestionPage', state: quizarr })
                }
            }).catch(e => console.log(e))
    }






return (
    <>
    <div className="ExamCard">
        <div className="ExamCard-header">
            <label>{title}</label>
        </div>
        <div className="ExamCard-body">
            <label>No of question: {nques}</label>
            <label>Time: {time} mins</label>

        </div>
        <div className="ExamCard-footer">
            <input type="text" onChange={(e) => setPass(e.target.value)} placeholder="passcode" className="ExamCard-Password" />
            <button onClick={startExam} id={id} title={title} >Start Exam</button>
        </div>
    </div>
    <div id="loader" style={{visibility:"hidden"}}>
         <Loader  />
         </div>
         </>
);
}

export default ExamCard;


