import React, {useEffect, useState} from "react";
import Header from "../components/Header"
import NavBar from "../components/NavBar";
import StudentCard from "../components/StudentCard";
import {Link,useOutletContext} from "react-router-dom"
import "./pages.css"

function TeacherHome({handleLogout}){

  const context = useOutletContext()
    return (
        <>
          <header>
            <Header onLogout={handleLogout} />
            <br/>
            <NavBar />
          </header>
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