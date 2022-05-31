import React, { useState } from "react";
import "./ExamCard.css"
import { useHistory } from "react-router-dom";
import axios from "axios";
const ExamCard = ({title,nques,id}) => {
    const history = useHistory();
    
    const [pass, setPass] = useState("")
    const [quizdata,setQuizData] = useState([]);
    const setArray = (quizdata)=>{
        let quizArray = []
        quizdata.questions.forEach((element,index) => {
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
                "submit":"",
                "key":index+1
            }
            quizArray.push(obj)
        })
        return quizArray
            
    }

    const startExam = (e) => {
        console.log(e.target.title)
        var token = localStorage.getItem('token');
        if (pass === 'password'){
             axios.get(`https://quiz-portal-api.herokuapp.com/api/quiz/getQuizByName/${e.target.title}`, {headers: {
                'x-auth-token': token,
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
        }
            }).then(res=>{
                let quizarr = setArray(res.data.quizData)
                history.push({pathname:'/QuestionPage',state:quizarr})}).catch(e=>console.log(e))
        
       
        }
        else
            console.log("error")
    }
    
    return (
        <div className="ExamCard">
        <div className="ExamCard-header">
            <label>{title}</label>
        </div>
        <div className="ExamCard-body">
            <label>No of question: {nques}</label>
            <label>Time: 20mins</label>

        </div>
        <div className="ExamCard-footer">
            <input type="text" onChange={(e) => setPass(e.target.value)} placeholder="passcode" className="ExamCard-Password" />
            <button onClick={startExam} id={id} title={title}>Start Exam</button>
        </div>
    </div>
    );
}

export default ExamCard;