import React,{useState} from "react";
import { useHistory } from "react-router-dom";

import PrevResult from "./PrevResult";
import "./TeacherDashboard.css";
const TeacherDashboard = ()=>{
    const history = useHistory()
    const [prev_exam,setPrev_exam] = useState([
     {
            title:"CN",
            date:"02.04.2022",
            nques :"5",
            time:"20",
        },
        {
            title:"CN",
            date:"02.04.2022",
            nques :"5",
            time:"20",
        },{
            title:"CN",
            date:"02.04.2022",
            nques :"5",
            time:"20",
        }
    ]);
    const examArray = prev_exam.map((exam,index) => {
        return(
            <PrevResult props={exam} key={index}/>
        )
    })
   
    const createQuiz = ()=>{ 
        history.push('/TeacherCard')
        
    }
    return(
        <div className="TeacherDashboard">
            <div className="AssignedPapers">
                <h1> Created Quiz </h1>
                <div className="AssignedPapers-container">
                <div className="AssignedPapers-previous">
                    {examArray}
                </div>
                <div className="CreateExam">
                    <i class="fa fa-plus" aria-hidden="true"  onClick={createQuiz} ></i>
                    <label> Create Exam </label>
                 </div>
                </div>
            </div>
    
        </div>
    )
}

export default TeacherDashboard