import React from "react";
import ExamCard from "./ExamCard";
import "./StudentDashboard.css";
const StudentDashboard = ()=>{
    return(
        <div className="TeacherDashboard">
            <div className="AssignedPapers">
                <h1> AssignedPapers</h1>
                <div className="ExamCard-container">
                 <ExamCard type='teacher'/>
                 <ExamCard type='teacher'/>
                 <ExamCard type='teacher'/>
                 <ExamCard type='teacher'/>
                 </div>
                 
            </div>
    
        </div>
    )
}

export default StudentDashboard