import React, {useEffect,useState} from "react" 
import LoginStudentCard from "../components/LoginStudentCard"


function StudentViewClass({section}){

    const [students,setStudents] = useState([])
    useEffect(() => {
        console.log("FETCH! ");
        fetch(`/studentsbysection/${section}`)
          .then((res) => res.json())
          .then((data) => {
            setStudents(data);
            console.log(data);
          });
      }, []);


    return(
        <>
        <p>You have made it to the page where the students log in</p>
        <p>{section}</p>
        {students.map(student=>{
            return(
             <LoginStudentCard student={student} key={student.id}/>)}
        )}
        </>
    )
}

export default StudentViewClass