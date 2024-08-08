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
    <div id= "studentCard" >
        <div id="studentName">
            <p>{student.name}</p>
            <p>Points: {student.points}</p>
            <button value= {student.id} id="add-points-button" name="add-points-button" onClick={handleAddPoint}>+1 point </button>
        </div>

    </div>
    </>
)}

export default StudentCard;