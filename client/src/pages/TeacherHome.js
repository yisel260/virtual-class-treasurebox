import React, {useEffect, useState} from "react";
import Header from "../components/Header"
import NavBar from "../components/NavBar";
import StudentCard from "../components/StudentCard";
import "./pages.css"

function TeacherHome({user,handleLogout}){

    const [teacherSections, setTeacherSections] = useState([])
    const [sectionSelected,setSectionSelected] = useState(null)
    const[students,setStudents]= useState([])

    useEffect(() => {
        fetch(`/sectionsbyteacher/${user.id}`)
        .then((res) =>res.json())
        .then(data=>{
           setTeacherSections(data);
      })
    
    }, []);

    useEffect(() => {
        if (teacherSections.length === 0) {
        } else {
          setSectionSelected(teacherSections[0].id);
        }
      }, [teacherSections]);

    useEffect(()=>{
        if (sectionSelected==null){
        }
        else{
        fetch(`/studentsbysection/${sectionSelected}`)
        .then(result => result.json())
        .then(data => {
          setStudents(data);
        })}},[sectionSelected]
    )

    return (
        <>
          <header>
            <Header onLogout={handleLogout} />
            <br/>
            <NavBar />
          </header>
          <br/>
          <main>
            {teacherSections === undefined ? (
              <p>Loading</p> ) : (
              <>
                {teacherSections.map((section) => (
                  <div className="class-button-div" key={section.id}>
                    <button  className="choice-button">{section.name}</button>
                  </div>
                ))}
              </>
            )}
            <br/><br/>

            {students == null? (<p>students loading</p>):(students.map(student =>{
                return (<StudentCard student={student} key={student.id} />
                )
            }))}
          </main>
        </>
      );
    }
    

export default TeacherHome