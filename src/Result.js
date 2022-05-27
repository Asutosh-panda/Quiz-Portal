import React from 'react'
import './Result.css'
const Result = (props) => {

    const data = props.location.state
  
    return (
        <div className='ResultContainer'>
            <h1>Result</h1>
            <table >
                <tr>
                    <th>Question</th>
                    <th>Correct Answer</th>
                    <th>Your Answer</th>
                    <th>Outcome</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.question}</td>
                            <td>{val[val.answer]}</td>
                            <td>{val[val.submit]}</td>
                            {val.submit === val.answer ?
                            <td> "Correct" </td>: <td> "Wrong"</td>}
                         
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default Result;