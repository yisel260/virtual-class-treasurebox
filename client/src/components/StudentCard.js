import React,{useState} from "react";
import "./component.css"

function StudentCard({student}){
    const[studentPoints, setStudentPoints]=useState(student.points)

    function handleAddPoint(event){
        console.log(student.id)
        fetch(`/studentsById/${student.id}` 
        ,{
            method: 'PATCH',
            headers: { 'Content-type':'application/json'
            
        },
        body: JSON.stringify({
            points:`${student.points+=1}`
        })
    })
        .then(res=>res.json())
        .then(data=>setStudentPoints(data.points))
    }

    return (
    <>
    <div  >
        <div id="student-card">
            <p id="student-name">{student.name}</p>
            <p id ="student-points">Points: {student.points}</p>
            <button value= {student.id} id="add-points-btn" name="add-points-btn" onClick={handleAddPoint}>+1 point </button>
        </div>

    </div>
    </>
)}

export default StudentCard;