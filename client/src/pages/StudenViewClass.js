import React, {useEffect,useState} from "react" 
import LoginStudentCard from "../components/LoginStudentCard"
import StudentShopping from "./StudentShopping"
import { useOutletContext } from "react-router-dom"
import Header from "../components/Header"

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
          });
      }, []);

function onStudentLogIn(studentUser){
    setStudentUser(studentUser)
}

function onStudentLogOut(){
    setStudentUser(null)
}

function redirectHome(){
  context.setSection(null)}

if (studentUser){
    return (
        <StudentShopping onStudentLogOut={onStudentLogOut} studentUser={studentUser}/>
    )
}
else{
    return(
        <>
        <Header/>
        <h2>Welcome!</h2>
        <button onClick={redirectHome} id="different-class-btn" className="action-button" >Choose a different class</button>
        <br/>
        {students.map(student=>{
            return(
             <LoginStudentCard onStudentLogIn={onStudentLogIn} student={student} key={student.id}/>)}
        )}
        </>
    )}
}

export default StudentViewClass