import React, { useState} from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./QuestionSet.css"
const QuestionSet=(props)=>{
    const history = useHistory();
    const [id,setId] = useState(0);
    const [question,setQuestion] = useState("");
    const [option1,setOption1] = useState("");
    const [option2,setOption2] = useState("");
    const [option3,setOption3] = useState("");
    const [option4,setOption4] = useState("");
    const [answer,setAnswer] = useState("");
    const title =props.location.state.title;
    const nques = props.location.state.nques;
    console.log(props);
    const [questionArray,setQuestionArray]=useState([
        {
             "question":"",
             "option1":"",
             "option2":"",
             "option3":"",
             "option4":"",
             "answer":"",
             "key":1
        },
        {
            "question":"",
            "option1":"",
            "option2":"",
            "option3":"",
            "option4":"",
            "answer":"",
            "key":2
       },
       {
        "question":"",
        "option1":"",
        "option2":"",
        "option3":"",
        "option4":"",
        "answer":"",
        "key":3
   },
   {
    "question":"",
    "option1":"",
    "option2":"",
    "option3":"",
    "option4":"",
    "answer":"",
    "key":4
},
{
    "question":"",
    "option1":"",
    "option2":"",
    "option3":"",
    "option4":"",
    "answer":"",
    "key":5
},
{
    "question":"",
    "option1":"",
    "option2":"",
    "option3":"",
    "option4":"",
    "answer":"",
    "key":6
},
{
    "question":"",
    "option1":"",
    "option2":"",
    "option3":"",
    "option4":"",
    "answer":"",
    "key":7
},
{
    "question":"",
    "option1":"",
    "option2":"",
    "option3":"",
    "option4":"",
    "answer":"",
    "key":8
},    {
    "question":"",
    "option1":"",
    "option2":"",
    "option3":"",
    "option4":"",
    "answer":"",
    "key":9
},    {
    "question":"",
    "option1":"",
    "option2":"",
    "option3":"",
    "option4":"",
    "answer":"",
    "key":10
},
{
    "question":"",
    "option1":"",
    "option2":"",
    "option3":"",
    "option4":"",
    "answer":"",
    "key":11
},
{
   "question":"",
   "option1":"",
   "option2":"",
   "option3":"",
   "option4":"",
   "answer":"",
   "key":12
},
{
"question":"",
"option1":"",
"option2":"",
"option3":"",
"option4":"",
"answer":"",
"key":13
},
{
"question":"",
"option1":"",
"option2":"",
"option3":"",
"option4":"",
"answer":"",
"key":14
},
{
"question":"",
"option1":"",
"option2":"",
"option3":"",
"option4":"",
"answer":"",
"key":15
},
{
"question":"",
"option1":"",
"option2":"",
"option3":"",
"option4":"",
"answer":"",
"key":16
},
{
"question":"",
"option1":"",
"option2":"",
"option3":"",
"option4":"",
"answer":"",
"key":17
},
{
"question":"",
"option1":"",
"option2":"",
"option3":"",
"option4":"",
"answer":"",
"key":18
},    {
"question":"",
"option1":"",
"option2":"",
"option3":"",
"option4":"",
"answer":"",
"key":19
},    {
"question":"",
"option1":"",
"option2":"",
"option3":"",
"option4":"",
"answer":"",
"key":20
}
    ])
    const init=(q="",o1="",o2="",o3="",o4="",a="")=>{
        setQuestion(q)
        setOption1(o1)
        setOption2(o2)
        setOption3(o3)
        setOption4(o4)
        setAnswer(a)
    }
    const clickQuestion=(e)=>{
        setId(parseInt(e.target.id))
        console.log(id,"oj")
        if(questionArray[parseInt(e.target.id)].question=="")
            init()
        else
            init(questionArray[parseInt(e.target.id)].question,questionArray[parseInt(e.target.id)].option1,questionArray[parseInt(e.target.id)].option2,questionArray[parseInt(e.target.id)].option3,questionArray[parseInt(e.target.id)].option4,questionArray[parseInt(e.target.id)].answer)
        
        console.log(id)
    }
    const nextQuestion=()=>{
        if(id==nques-1){
            document.getElementById("next").disabled = true;
        }
           
        
        else{
            document.getElementById("prev").disabled = false;
            console.log(id)
            if(questionArray[id].question=="")
                init()
            else
              init(questionArray[id].question,questionArray[id].option1,questionArray[id].option2,questionArray[id].option3,questionArray[id].option4,questionArray[id].answer)
            setId(id+1);
        }
    }
    const prevQuestion=()=>{
        if(id<1){
            document.getElementById("prev").disabled = true;
        }
        else{
            
            document.getElementById("next").disabled = false;
            console.log(id)
            if(questionArray[id-1].question=="")
                init()
           else
            init(questionArray[id-1].question,questionArray[id-1].option1,questionArray[id-1].option2,questionArray[id-1].option3,questionArray[id-1].option4,questionArray[id-1].answer)
           setId(id-1);
        }
    }
    const saveQuestion=(e)=>{
        e.preventDefault();
        // console.log(question,option1,option2,option3,option4,answer)
        questionArray[id].question=question;
        questionArray[id].option1=option1;
        questionArray[id].option2=option2;
        questionArray[id].option3 = option3;
        questionArray[id].option4 = option4;
        questionArray[id].answer = answer;
       
        console.log(questionArray)
        nextQuestion()
        if(id!=nques-1){
            init()
        }
        
        console.log("submit");
    }
    const submitQuestion=()=>{
        console.log(questionArray);
        let qobj =[]
        questionArray.forEach((val,idx)=>{
           if(val.question!=""){
               let obj={'question':val.question,'options':[val.option1,val.option2,val.option3,val.option4]}
                qobj.push(obj)
           }       
         })

        let ansarr =[]
        questionArray.forEach((val,idx)=>{
            if(val.question!="")
                ansarr.push(val.answer);
        })

        console.log(qobj,"qobj")
        console.log(ansarr,"ansarr")
        let payload = {
            "name": title,
            "questions": qobj,
            "answers": ansarr,
            "totalQuestions":nques,
            "creator":localStorage.getItem('userId')

        }
        var token = localStorage.getItem('token')
     
        console.log(payload,"payload")
        console.log(token,"token")
        axios.post('https://quiz-portal-api.herokuapp.com/api/quiz/createQuiz/', payload,{ 
            headers: {
                'x-auth-token': token,
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            }
            
        }
        
   )
        .then(res=>{console.log(res.data)})
        .catch(e=>console.log(e))
        history.push("/TeacherDashboard");
    }
   
    console.log(props.location.state.nques)
    var but_list=[]
    for(var i=0;i<parseInt(nques);i++)
            but_list.push(<button className="numberbutton" id={i} onClick={clickQuestion}>{i+1}</button>)

    return ( 
        <div className="QuestionSet">
            <div className="QuestionContainer">
                <div className="QuestionBox">
                    <div className="Question">
                      <h2>{parseInt(id)+1} <textarea type="text" onChange={e=>setQuestion(e.target.value)} placeholder="Enter the question" value={question} required/></h2>
                    </div>
                    <div className="Options">


                    <label>(A) <input type="text" onChange={e=>setOption1(e.target.value)} placeholder="Enter the option " value={option1} required/></label>
                    <label>(B) <input type="text" onChange={e=>setOption2(e.target.value)} placeholder="Enter the option " value={option2} required/></label>
                    <label>(C) <input type="text" onChange={e=>setOption3(e.target.value)} placeholder="Enter the option " value={option3} required/></label>
                    <label>(D) <input type="text" onChange={e=>setOption4(e.target.value)} placeholder="Enter the option " value={option4} required/></label>
                    <label>(Answer :) <input type="text" onChange={e=>setAnswer(e.target.value)} placeholder="Enter the Option" value={answer} required/></label>
                    </div>
                    <div className="QuestionButton">
                        <button className="prev" id ="prev" onClick={prevQuestion}>Prev</button>
                        <button className="next" id = "next" onClick={nextQuestion}>next</button> 
                        <button className="save"  onClick={saveQuestion}>save</button>
                        <button className="submit" type="submit" onClick={submitQuestion}>submit</button>
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

export default QuestionSet;