import React, { useEffect, useState } from "react";
import "./QuestionPage.css"
import { useHistory } from "react-router-dom";
const QuestionPage=()=>{
    const [id,setId] = useState(0);
    const history = useHistory();
    // const [key,setKey] = useState(1)
    const[submitAnswer,setSubmitAnswer] = useState("")
    const quizArray = history.location.state;
    console.log(quizArray,"ojovf")
//     const [quizArray,setQuestionArray]=useState([
//         // {
//         //      "question":"",
//         //      "option1":"",
//         //      "option2":"",
//         //      "option3":"",
//         //      "option4":"",
//         //      "answer":"",
//         //      "submit":"",
//         //      "key":0
//         // },
// //         {
// //             "question":"Second",
// //             "option1":"1",
// //             "option2":"2",
// //             "option3":"3",
// //             "option4":"4",
// //             "answer":"option2",
// //             "submit":"",
// //             "key":2
// //        },
// //        {
// //         "question":"Third",
// //         "option1":"1",
// //         "option2":"2",
// //         "option3":"3",
// //         "option4":"4",
// //         "answer":"option3",
// //         "submit":"",
// //         "key":3
// //    },
// //    {
// //     "question":"Fourth",
// //     "option1":"1",
// //     "option2":"2",
// //     "option3":"3",
// //     "option4":"4",
// //     "answer":"option4",
// //     "submit":"",
// //     "key":4
// // },
// // {
// //     "question":"Five",
// //     "option1":"2",
// //     "option2":"3",
// //     "option3":"4",
// //     "option4":"5",
// //     "answer":"option4",
// //     "submit":"",
// //     "key":5
// // },
// // {
// //     "question":"",
// //     "option1":"",
// //     "option2":"",
// //     "option3":"",
// //     "option4":"",
// //     "answer":"",
// //     "key":6
// // },
// // {
// //     "question":"",
// //     "option1":"",
// //     "option2":"",
// //     "option3":"",
// //     "option4":"",
// //     "answer":"",
// //     "key":7
// // },
// // {
// //     "question":"",
// //     "option1":"",
// //     "option2":"",
// //     "option3":"",
// //     "option4":"",
// //     "answer":"",
// //     "key":8
// // },    {
// //     "question":"",
// //     "option1":"",
// //     "option2":"",
// //     "option3":"",
// //     "option4":"",
// //     "answer":"",
// //     "key":9
// // },    {
// //     "question":"",
// //     "option1":"",
// //     "option2":"",
// //     "option3":"",
// //     "option4":"",
// //     "answer":"",
// //     "key":10
// // },
// // {
// //     "question":"",
// //     "option1":"",
// //     "option2":"",
// //     "option3":"",
// //     "option4":"",
// //     "answer":"",
// //     "key":11
// // },
// // {
// //    "question":"",
// //    "option1":"",
// //    "option2":"",
// //    "option3":"",
// //    "option4":"",
// //    "answer":"",
// //    "key":12
// // },
// // {
// // "question":"",
// // "option1":"",
// // "option2":"",
// // "option3":"",
// // "option4":"",
// // "answer":"",
// // "key":13
// // },
// // {
// // "question":"",
// // "option1":"",
// // "option2":"",
// // "option3":"",
// // "option4":"",
// // "answer":"",
// // "key":14
// // },
// // {
// // "question":"",
// // "option1":"",
// // "option2":"",
// // "option3":"",
// // "option4":"",
// // "answer":"",
// // "key":15
// // },
// // {
// // "question":"",
// // "option1":"",
// // "option2":"",
// // "option3":"",
// // "option4":"",
// // "answer":"",
// // "key":16
// // },
// // {
// // "question":"",
// // "option1":"",
// // "option2":"",
// // "option3":"",
// // "option4":"",
// // "answer":"",
// // "key":17
// // },
// // {
// // "question":"",
// // "option1":"",
// // "option2":"",
// // "option3":"",
// // "option4":"",
// // "answer":"",
// // "key":18
// // },    {
// // "question":"",
// // "option1":"",
// // "option2":"",
// // "option3":"",
// // "option4":"",
// // "answer":"",
// // "key":19
// // },    {
// // "question":"",
// // "option1":"",
// // "option2":"",
// // "option3":"",
// // "option4":"",
// // "answer":"",
// // "key":20
// ])
    // const [questionArray,setQuestionArray] = useState([]);
    
    //     console.log("sdf")
    //     quizArray.questions.forEach(element => {
    //         let question = element.question;
    //         let option1 = element.options[0];
    //         let option2 = element.options[1];
    //         let option3 = element.options[2];
    //         let option4 = element.options[3];
    //         let obj = {
    //             "question": question,
    //             "option1": option1,
    //             "option2": option2,
    //             "option3": option3,
    //             "option4": option4,
    //             "submit":"",
    //             "key":key
    //         }
            
    //         setQuestionArray(prevState => [...prevState,obj])
    //         setKey(key+1)
           
    // })
    
    console.log(quizArray)
    
    
    //disable button at 0 and 20
    const clickQuestion=(e)=>{
        setId(parseInt(e.target.id))
        if(submitAnswer!=="")
         document.getElementById(submitAnswer).checked = true
        if(quizArray[parseInt(e.target.id)].submit!==""){
        document.getElementById(quizArray[parseInt(e.target.id)].submit).checked=true
    }
    else
    document.getElementById(submitAnswer).checked = false
        console.log(id)
    }
    const nextQuestion=()=>{
      
        if(id>=quizArray.totalQuestions){
           document.getElementById("next").disabled = true;
        }
        else{
            document.getElementById("prev").disabled = false;
            // console.log("option to be checked",quizArray[id].submit)
            if(submitAnswer!=="")
                document.getElementById(submitAnswer).checked = true
            if(quizArray[id+1].submit!==""){
                document.getElementById(quizArray[id+1].submit).checked=true
            }
            else
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
             if(submitAnswer!=="")
                 document.getElementById(submitAnswer).checked = true
             if(quizArray[id-1].submit!==""){
                 document.getElementById(quizArray[id-1].submit).checked=true
             }
             else
             document.getElementById(submitAnswer).checked = false
             setId(id-1);
         }
    }
    const submitQuestion=(e)=>{
        e.preventDefault();
        let sure = prompt("do you want to submit? (y/n)")
        if(sure==="yes" || sure==="y" || sure==="Y")
            history.push({pathname:'/Result',state:quizArray})
        console.log("submit",quizArray,"jh");
    }
    const setAnswer=(e)=>{
        setSubmitAnswer(e.target.value)
        // console.log(e.target.id)
        // document.getElementById(e.target.id).checked = false
    }
    const saveQuestion=()=>{
        console.log(submitAnswer,"submitAnswer")
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

    return ( 
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
                        <button className="prev" id="prev" onClick={prevQuestion}>Prev</button>
                        <button className="next" id="next" onClick={nextQuestion}>Next</button>
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
    )
}

export default QuestionPage;