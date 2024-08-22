import React from 'react';
import "./pages.css"
import StudentViewClass from './StudenViewClass';
import TeacherHome from "./TeacherHome"
import LogInPage from './LogInPage';
import { useOutletContext } from 'react-router-dom';

function Home (){
  const context = useOutletContext()


 if (context.user){
    return (
      <>
      <TeacherHome />
      </>
    );
  } 
  else if(context.section) {
    return(
      <>
      < StudentViewClass/>
      </>
    )
  }
  else{
    return(<LogInPage/>)
  }
  
  
}

export default Home;
