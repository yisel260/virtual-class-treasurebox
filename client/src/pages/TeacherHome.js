import React, {useEffect, useState} from "react";
import Header from "../components/Header"
import NavBar from "../components/NavBar";
import StudentCard from "../components/StudentCard";

function TeacherHome({user,handleLogout}){

    const [teacherSections, setTeacherSections] = useState([])
    const [sectionSelected,setSectionSelected] = useState(null)
    const[students,setStudents]= useState(null)

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
          fetch(`/studentsbysection/${sectionSelected}`)
            .then(result => result.json())
            .then(data => {
              setStudents(data);
            });
        }
      }, [teacherSections]);


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
                <StudentCard />
              </>
            )}
          </main>
        </>
      );
    }
    

export default TeacherHome