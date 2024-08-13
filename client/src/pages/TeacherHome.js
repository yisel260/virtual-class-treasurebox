import React, {useEffect, useState} from "react";
import Header from "../components/Header"
import NavBar from "../components/NavBar";
import StudentCard from "../components/StudentCard";
import {Link,useOutletContext} from "react-router-dom"
import "./pages.css"

function TeacherHome({handleLogout}){

  const context = useOutletContext()


    // const [teacherSections, setTeacherSections] = useState([])
    // const [sectionSelected,setSectionSelected] = useState(null)
    // const[students,setStudents]= useState([])

    // useEffect(() => {
    //     fetch(`/sectionsbyteacher/${user.id}`)
    //     .then((res) =>res.json())
    //     .then(data=>{
    //        setTeacherSections(data);
    //   })
    
    // }, []);

    // useEffect(() => {
    //     if (teacherSections.length === 0) {
    //     } else {
    //       setSectionSelected(teacherSections[0].id);
    //     }
    //   }, [teacherSections]);

    // useEffect(()=>{
    //     if (sectionSelected==null){
    //     }
    //     else{
    //     fetch(`/studentsbysection/${sectionSelected}`)
    //     .then(result => result.json())
    //     .then(data => {
    //       setStudents(data);
    //     })}},[sectionSelected]
    // )

    return (
        <>
          <header>
            <Header onLogout={handleLogout} />
            <br/>
            <NavBar />
          </header>

          <div>
        <Link to="/teacherhome">Home</Link>
        <Link to="/classes">Mange Classes</Link>
        <Link to="/prizes">Mangage Prizes</Link>

      </div>
          <br/>
          <main>
            {context.sections? (
              <>
                {context.sections.map((section) => (
                  <div className="class-button-div" key={section.id}>
                    <button  className="choice-button">{section.name}</button>
                  </div>
                ))}
              </>
            ):<p>sections will load shortly</p>}
            <br/><br/>

            {context.students?(context.students.map(student =>{
                return (<StudentCard student={student} key={student.id} />
                )
            })):(<p>Students coming</p>)}
          </main>
        </>
      );
    }
    

export default TeacherHome