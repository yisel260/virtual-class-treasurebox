import React, {useEffect,useState} from "react" 
import LoginStudentCard from "../components/LoginStudentCard"
import StudentShopping from "./StudentShopping"
function StudentViewClass({onStudentLogIn,section}){

    const [students,setStudents] = useState([])
    const [studentUser, setStudentUser] = useState(null)

    useEffect(() => {
        console.log("FETCH! ");
        fetch(`/studentsbysection/${section}`)
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

if (studentUser){
    return (
        <StudentShopping studentUser={studentUser}/>
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