import React, {useEffect, useState} from "react";
import Header from "../components/Header"
import NavBar from "../components/NavBar";
import StudentCard from "../components/StudentCard";
import {Link,useOutletContext} from "react-router-dom"
import "./pages.css"
import SectionSelector from "../components/SectionSelector";

function TeacherHome({handleLogout}){

  const context = useOutletContext()
    return (
        <>
          <header>
            <Header onLogout={handleLogout} />
            <NavBar />
          </header>
          <br/>
          <main>
           <SectionSelector/>
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