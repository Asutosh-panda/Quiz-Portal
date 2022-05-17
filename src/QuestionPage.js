import React from "react";
import "./QuestionPage.css"
const QuestionPage=()=>{
    var but_list=[]
    for(var i=1;i<=20;i++)
            but_list.push(<button className="numberbutton">{i}</button>)
    return ( 
        <div className="QuestionPage">
            <div className="QuestionsContainer">
                <div className="QuestionBox">
                    <div className="Question">
                      <h2>Q1. which is which of the followuing?</h2>
                    </div>
                    <div className="Options">
                    
                    <label><input type="radio" value="Option 1" name="question" /> (A) Option 1</label>
                    <label><input type="radio" value="Option 2" name="question" /> (B) Option 2</label>
                    <label><input type="radio" value="Option 3" name="question" /> (C) Option 3</label>
                    <label><input type="radio" value="Option 4" name="question" /> (D) Option 4</label>
                    </div>
                    <div className="QuestionButton">
                        <button className="prev">Prev</button>
                        <button className="next">next</button>
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