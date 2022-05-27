import React, { useState } from "react";
import "./QuestionSet.css"
const QuestionSet=()=>{
    const [id,setId] = useState(1);
    const [question,setQuestion] = useState("");
    const [option1,setOption1] = useState("");
    const [option2,setOption2] = useState("");
    const [option3,setOption3] = useState("");
    const [option4,setOption4] = useState("");
    const [answer,setAnswer] = useState("");

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
        if(questionArray[parseInt(e.target.id)-1].question=="")
            init()
        else
            init(questionArray[parseInt(e.target.id)-1].question,questionArray[parseInt(e.target.id)-1].option1,questionArray[parseInt(e.target.id)-1].option2,questionArray[parseInt(e.target.id)-1].option3,questionArray[parseInt(e.target.id)-1].option4,questionArray[parseInt(e.target.id)-1].answer)
        
        console.log(id)
    }
    const nextQuestion=()=>{
        if(id<20){
            
            console.log(id)
            if(questionArray[id].question=="")
                init()
            else
              init(questionArray[id].question,questionArray[id].option1,questionArray[id].option2,questionArray[id].option3,questionArray[id].option4,questionArray[id].answer)
            setId(id+1);
        }
    }
    const prevQuestion=()=>{
        if(id>1){
           
            console.log(id)
            if(questionArray[id-2].question=="")
                init()
           else
            init(questionArray[id-2].question,questionArray[id-2].option1,questionArray[id-2].option2,questionArray[id-2].option3,questionArray[id-2].option4,questionArray[id-2].answer)
           setId(id-1);
        }
    }
    const submitQuestion=(e)=>{
        e.preventDefault();
        // console.log(question,option1,option2,option3,option4,answer)
        questionArray[id-1].question=question;
        questionArray[id-1].option1=option1;
        questionArray[id-1].option2=option2;
        questionArray[id-1].option3 = option3;
        questionArray[id-1].option4 = option4;
        questionArray[id-1].answer = answer;
        init()
        console.log(questionArray)
        nextQuestion()
        console.log("submit");
    }
       
    var but_list=[]
    for(var i=1;i<=20;i++)
            but_list.push(<button className="numberbutton" id={i} onClick={clickQuestion}>{i}</button>)

    return ( 
        <div className="QuestionSet">
            <div className="QuestionContainer">
                <div className="QuestionBox">
                    <div className="Question">
                      <h2>{id} <textarea type="text" onChange={e=>setQuestion(e.target.value)} placeholder="Enter the question" value={question} required/></h2>
                    </div>
                    <div className="Options">
                    
                    <label>(A) <input type="text" onChange={e=>setOption1(e.target.value)} placeholder="Enter the option " value={option1} required/></label>
                    <label>(B) <input type="text" onChange={e=>setOption2(e.target.value)} placeholder="Enter the option " value={option2} required/></label>
                    <label>(C) <input type="text" onChange={e=>setOption3(e.target.value)} placeholder="Enter the option " value={option3} required/></label>
                    <label>(D) <input type="text" onChange={e=>setOption4(e.target.value)} placeholder="Enter the option " value={option4} required/></label>
                    <label>(Answer :) <input type="text" onChange={e=>setAnswer(e.target.value)} placeholder="Enter the Option" value={answer} required/></label>
                    </div>
                    <div className="QuestionButton">
                        <button className="prev" onClick={prevQuestion}>Prev</button>
                        <button className="next" onClick={nextQuestion}>next</button>
                        <button className="submit" type="submit" onClick={submitQuestion}>save</button>
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