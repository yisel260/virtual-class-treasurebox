import React, {useEffect,useState} from "react" 
import LoginStudentCard from "../components/LoginStudentCard"
import StudentShopping from "./StudentShopping"
import { useOutletContext } from "react-router-dom"

function StudentViewClass({onStudentLogIn,section}){

    const context = useOutletContext()

    const [students,setStudents] = useState([])
    const [studentUser, setStudentUser] = useState(null)

    useEffect(() => {
        console.log("FETCH! ");
        fetch(`/studentsbysection/${context.section}`)
          .then((res) => res.json())
          .then((data) => {
            setStudents(data);
            console.log(data);
          });
      }, []);

function onStudentLogIn(studentUser){
    setStudentUser(studentUser)
    console.log(studentUser);
}

function onStudentLogOut(){
    setStudentUser(null)
    console.log(studentUser);
}


if (studentUser){
    return (
        <StudentShopping onStudentLogOut={onStudentLogOut} studentUser={studentUser}/>
    )
}
else{
    return(
        <>
        <p>You have made it to the page where the students log in</p>
        <p>{section}</p>
        {students.map(student=>{
            return(
             <LoginStudentCard onStudentLogIn={onStudentLogIn} student={student} key={student.id}/>)}
        )}
        </>
    )}
}

export default StudentViewClass