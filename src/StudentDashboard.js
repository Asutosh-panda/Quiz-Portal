import React from "react";
import ExamCard from "./ExamCard";
import "./StudentDashboard.css";
const StudentDashboard = ()=>{
    return(
        <div className="studentDashboard">
            <div className="Now">
                <h1> Now </h1>
                <div className="ExamCard-container">
                 <ExamCard/>
                 <ExamCard/>
                 <ExamCard/>
                 <ExamCard/>
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