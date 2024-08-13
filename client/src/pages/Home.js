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

  function handleLogout() {
    context.setUser(null);
  }

// const formik = useFormik(
//   {
//     initialValues:{
//       sectionCode:"",
//     },
//     onSubmit: (values)=>{
//       fetch(`/sections/${values.sectionCode}`)
//       .then((res) =>{
//         if (res.ok){
//           res.json()
//           .then((data) => {
//             setSection(data);
//             setSection(data.id)
//         })
//         }
//         else {
//           console.log("class not found");
//           alert("Ooopsie that class code could not be found. ")
//         }
//       })
//     }
//   }
// )
 
 if (context.user){
  console.log(context.user)
    return (
      <>
      <TeacherHome  handleLogout={handleLogout}/>
      </>
    );
  } 
  // else if(section) {
  //   return(
  //     <>
  //     < StudentViewClass handleLogout = {handleLogout}/>
  //     </>
  //   )
  // }
  
  else{

    console.log(context.user)

    return(
      
    <>
    <LogInPage/>
    </>)
  }
  
  
}

export default Home;
