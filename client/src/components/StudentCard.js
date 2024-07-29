import React from "react";
import "./component.css"

function StudentCard(students){
    return (
    <>
    <div id= "studentCard" >
        <div id="studentName">
            <p>student Name</p>
            <p>Points: 0</p>
            <button>+1 point </button>
        </div>

    </div>
    </>
)}

export default StudentCard;