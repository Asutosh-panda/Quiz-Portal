import React, { useEffect, useState } from "react";
import "./QuestionPage.css"
import { useHistory } from "react-router-dom";
import axios from "axios";
import Timer from './Timer';
import Loader from "./Loader";

const QuestionPage=()=>{
    const [id,setId] = useState(0);
    const history = useHistory();
    // const [key,setKey] = useState(1)
    const[submitAnswer,setSubmitAnswer] = useState("")
    const quizArray = history.location.state;
    console.log(quizArray,"ojovf")
    
    console.log(quizArray)
    
    
    //disable button at 0 and 20
    const clickQuestion=(e)=>{
        setId(parseInt(e.target.id))
        if(submitAnswer!=="")
         document.getElementById(submitAnswer).checked = true
        if(quizArray[parseInt(e.target.id)].submit!==""){
        document.getElementById(quizArray[parseInt(e.target.id)].submit).checked=true
    }
    else{
    if(submitAnswer!="")
                    document.getElementById(submitAnswer).checked = false
    }
        console.log(id)
    }
    const nextQuestion=()=>{
       
        if(id>quizArray.length-2){
           document.getElementById("next").disabled = true;
          
        }
        else{
            document.getElementById("prev").disabled = false;
            
            if(submitAnswer != ""){
                console.log(document.getElementById(submitAnswer),"fs")
                document.getElementById(submitAnswer).checked = true
            }

            if(quizArray[id].submit !=""){
                document.getElementById(quizArray[id].submit).checked=true
            }
            else
                if(submitAnswer!="")
                    document.getElementById(submitAnswer).checked = false
            setId(id+1);
        }
            
    }
    const prevQuestion=()=>{
        if(id<1){
            document.getElementById("prev").disabled = true;
         }
         else{
            document.getElementById("next").disabled = false;
             // console.log("option to be checked",quizArray[id].submit)
             if(submitAnswer!="")
                 document.getElementById(submitAnswer).checked = true
             if(quizArray[id-1].submit!=""){
                 document.getElementById(quizArray[id-1].submit).checked=true
             }
             else{
                 if(submitAnswer!="")
                  document.getElementById(submitAnswer).checked = false
             }
             setId(id-1);
         }
    }
    const submitQuestion=(e)=>{
        e.preventDefault();
        let sure = prompt("do you want to submit? (y/n)")
        if(sure==="yes" || sure==="y" || sure==="Y"){
            let ansarr=[]
            document.getElementById("loader").style.visibility = "visible"
            quizArray.forEach(element => {
                let ans = element[element.submit]
                ansarr.push(ans)
            })
            let payload={
                "userId":localStorage.getItem("userId"),
                "quizName":localStorage.getItem("quizName"),
                "answers":ansarr
            }
            var token = localStorage.getItem("token");
            axios.post(`https://quiz-portal-api.herokuapp.com/api/result/getResult`, payload,{headers: {
                'x-auth-token': token,
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
        }
            }).then(res=>{
                console.log(res.data,"result")
                history.push({pathname:'/Result',state:res.data})
                
            }   )    
        }
            
           
        }
      
    
    const setAnswer=(e)=>{
        setSubmitAnswer(e.target.value)
        // console.log(e.target.id)
        // document.getElementById(e.target.id).checked = false
    }
    const saveQuestion=()=>{
        quizArray[id].submit = submitAnswer
        console.log(quizArray)
        if(id<quizArray.length-1){
           
            nextQuestion()
            document.getElementById(submitAnswer).checked = false
        }
        console.log(quizArray,"after submit")
    }

    var but_list=[]
    for(var i=0;i<quizArray.length;i++)
            but_list.push(<button className="numberbutton" id={i} onClick={clickQuestion}>{i+1}</button>)

    return ( <>
        <div className="questionpage_all">
        <Timer/>
        <div className="QuestionPage">
        
            <div className="QuestionsContainer">
                <div className="QuestionBox">
                    <div className="Question">
                      <h2>{quizArray[id].key} {quizArray[id].question}?</h2>
                    </div>
                    <div className="Options" onChange={setAnswer}>
                    
                    <label><input type="radio" id="option1" value="option1" name="question" /> (A) {quizArray[id].option1}</label>
                    <label><input type="radio" id="option2" value="option2" name="question" /> (B) { quizArray[id].option2}</label>
                    <label><input type="radio" id="option3" value="option3" name="question" /> (C) { quizArray[id].option3}</label>
                    <label><input type="radio" id="option4" value="option4" name="question" /> (D) { quizArray[id].option4}</label>
                    </div>
                    <div className="QuestionButton">
                    <div className="sub-main">
                        <button className="prev" id="prev" onClick={prevQuestion}><span>Prev</span></button>
                        </div>
                        <div className="sub-main">
                        <button className="next" id="next" onClick={nextQuestion}><span>Next</span></button>
                        </div>
                        <button className="save" onClick={saveQuestion}>Save</button>
                        <button className="submit" type="submit" onClick={submitQuestion}>Submit</button>
                    </div>
                </div>
            </div>
            <div className="NumberContainer">
                        <h1>Questions</h1>
                        <div className="NumberButtons">
                        {but_list}
                        </div>
            </div>
        </div>
        </div>
        <div id="loader" style={{visibility:"hidden"}}>
         <Loader  />
         </div>
         </>
    )
}

export default QuestionPage;