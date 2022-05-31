import axios from "axios";
import React,{useEffect, useState} from "react";
import ExamCard from "./ExamCard";
import "./StudentDashboard.css";
const StudentDashboard = ()=>{
    const [examArray,setExamArray] = useState([]);
    var token = localStorage.getItem('token');
    useEffect(()=>{
        axios.get('https://quiz-portal-api.herokuapp.com/api/quiz/getAllQuiz/', {headers: {
            'x-auth-token': token,
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
    }
        }).then(res=>setExamArray(res.data.quiz)).catch(e=>console.log(e))
    },[])


    let examList = examArray.map((val,idx)=>{
        return (<ExamCard key={idx} id={idx} title={val.name} nques={val.totalQuestions}/>)
    })
    
    return(
        <div className="studentDashboard">
            <div className="Now">
                <h1> Now </h1>
                <div className="ExamCard-container">
                 {examList}
                 </div>
                 
            </div>
            {/* <div className="Upcoming">
                <h1> Upcoming </h1>
                <div className="ExamCard-container">
                 <ExamCard/>
                 <ExamCard/>
                 <ExamCard/>
                 <ExamCard/>
                 </div>
            </div>
            <div className="Results">
                <h1> Results </h1>
                <div className="ExamCard-container">
                 <ExamCard/>
                 <ExamCard/>
                 <ExamCard/>
                 <ExamCard/>
                 </div>
            </div> */}
        </div>
    )
}

export default StudentDashboard