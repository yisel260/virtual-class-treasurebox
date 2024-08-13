import React,{useState, useEffect} from 'react';
import "./pages.css"
import { useFormik, validateYupSchema } from 'formik';
import * as yup from "yup";
import StudentViewClass from './StudenViewClass';
import TeacherHome from "./TeacherHome"
import LogInPage from './LogInPage';
import { useOutletContext } from 'react-router-dom';

function Home (){
  const context = useOutletContext()
  console.log(context)
  
 
  function handleLogin(user) {
   context.setUser(user);
  }

 


 
 if (context.user){
  console.log(context.user)
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

    console.log(context.user)

    return(
      
    <>
    <LogInPage/>
    </>)
  }
  
  
}

export default Home;
