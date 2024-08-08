import React, {useEffect, useState} from "react";
import Header from "../components/Header"
import NavBar from "../components/NavBar";
import StudentCard from "../components/StudentCard";

function TeacherHome({user,handleLogout}){

    const [teacherSections, setTeacherSections] = useState([])
    const [sectionSelected,setSectionSelected] = useState(null)
    const[students,setStudents]= useState([])

    // console.log(teacherSections[0])
    // console.log(teacherSections)
    useEffect(() => {
        fetch(`/sectionsbyteacher/${user.id}`)
        .then((res) =>res.json())
        .then(data=>{
           setTeacherSections(data);
      })
    
    }, []);

    useEffect(() => {
        console.log(teacherSections.length)
        if (teacherSections.length === 0) {
          console.log("Classes coming");
        } else {
          console.log("Second useEffect called");
          console.log(teacherSections);
          setSectionSelected(teacherSections[0].id);
        }
      }, [teacherSections]);

    useEffect(()=>{
        if (sectionSelected==null){
            console.log("No section selected");
        }
        else{
        console.log("Third UseEffect called")
        fetch(`/studentsbysection/${sectionSelected}`)
        .then(result => result.json())
        .then(data => {
            console.log(data)
          setStudents(data);
        })}},[sectionSelected]
    )

    return (
        <>
          <header>
            <Header onLogout={handleLogout} />
            <NavBar />
          </header>
          <main>
            {teacherSections === undefined ? (
              <p>Loading</p> ) : (
              <>
                {teacherSections.map((section) => (
                  <div id="class-button-div" key={section.id}>
                    <button className="class-button">{section.name}</button>
                  </div>
                ))}

                <p>the selected class is : {sectionSelected}</p>
              </>
            )}
            {students == null? (<p>students loading</p>):(students.map(student =>{
                                    console.log(student)

                return (<StudentCard student={student}  />
                )
            }))}
          </main>
        </>
      );
    }
    

export default TeacherHome