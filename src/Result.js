import React from 'react'
import './Result.css'
import Loader from './Loader'
const Result = (props) => {

    const data = props.location.state
    console.log(data,"sip")
    let username = localStorage.getItem('username')
    let percentage = (data.obtainedMarks/data.totalMarks)*100

    return (
        <>
        <div className='ResultContainer'>
            <h1>Result</h1>
            <table >

                <tr className='table-head' id="tableHead" >
                    <th>Username</th>
                    <th>totalQuestions</th>
                    <th>Score</th>
                    <th>Percentage</th>
                </tr>
                <tr>
                    <td>{username}</td>
                    <td>{data.totalMarks}</td>
                    <td>{data.obtainedMarks}</td>
                    <td>{percentage}</td>
                </tr>
            </table>
        </div>
        </>
    )
}

export default Result;