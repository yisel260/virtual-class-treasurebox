import React,{useEffect, useState} from 'react';
import { useFormik } from "formik";
import * as yup from "yup";


function LoginStudentCard({onStudentLogIn, student}){
    //find way to set class id 
    //fetch students 
    //map over students creating a new card per student 
    const formik = useFormik({
        initialValues: {
          password: "",
          studentUserName:`${student.name}`,
        },
          onSubmit:(values)=>{
            console.log(values)
            fetch("/studentlogin", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
              }).then((r) => {
                if (r.ok) {
                  console.log("Response status:", r.status);
                  r.json().then((studentUser) => onStudentLogIn(studentUser));
                }
                else console.log("response not ok")
              }); 
          }});
return(
        <>
                <div key={student.id}>
                    <p>{student.name}</p> 
                    <form onSubmit={formik.handleSubmit}>
                    <input type='hidden' id="name" name="name" value={formik.studentUserName}></input>
                    <label>password:</label>
                    <input type="text" 
                    id="password"
                    name="password"
                    value={formik.values.password} 
                    onChange={formik.handleChange}
                    placeholder=""></input>
                    <input className="action-button" type="submit" value = "log in!"/>
                    </form>
                </div>   
        
        </>
)}

export default LoginStudentCard