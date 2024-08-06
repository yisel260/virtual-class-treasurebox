import React,{useEffect, useState} from 'react';
import { useFormik } from "formik";
import * as yup from "yup";


function LoginStudentCard({student}){
    //find way to set class id 
    //fetch students 
    //map over students creating a new card per student 
    const formik = useFormik({
        initialValues: {
          password: "",
        },
          onSubmit:(values)=>{
            console.log(values.password)
          }});
return(
        <>
                <div>
                    <p>{student.name}</p> 
                    <form onSubmit={formik.handleSubmit}>
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