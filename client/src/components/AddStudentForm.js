import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import "./component.css";
import {useOutletContext } from "react-router-dom";

function AddStudentForm({}){
  const context = useOutletContext()
  console.log(context.sectionSelected)
const formSchema= yup.object().shape(
    {
      name: yup.string().required("You must enter a student name").max(20),
      password: yup.string().required("You must enter a pasword").max(20),
      points:  yup
      .number()
      .integer()
      .required("Must enter points")
      .typeError("Please enter a number for points"),
      section_id: yup.number().required()
    })

  const formik = useFormik({
      initialValues: {
        name: "",
        password: "",
        points:"0",  
        section_id:context.sectionSelected,
      },
      validationSchema: formSchema,
      onSubmit: (values,{resetForm}) => {
        console.log("onSubmit called")
        fetch("/students", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values, null, 2),
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          context.getStudents(data.section_id)
        })
        resetForm()
      }
      })
return (
    <>
    
   <br/><br/>
    <div className="form-container">
    <h3>Add student</h3>

    <form id= "add-student-form" onSubmit={formik.handleSubmit}>

        <label htmlFor="name"> Name: </label>
        <input
        id="name"
        name="name"
        onChange={formik.handleChange}
        value={formik.values.name}
        />
        <p style={{ color: "red" }}> {formik.errors.name}</p>


        <label htmlFor="password">Password: </label>
        <input
        id="password"
        name="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        />

        <p style={{ color: "red" }}> {formik.errors.password}</p>


        <label htmlFor="points">Points: </label>
        <input
        id="points"
        name="points"
        onChange={formik.handleChange}
        value={formik.values.points}
        />
        <p style={{ color: "red" }}> {formik.errors.points}</p>


        <input
        type="hidden"
        id="section_id"
        name="section_id"
        onChange={formik.handleChange}
        value={formik.values.section_id}
        
        />
        <button className="action-button" type="submit">Submit</button>
        </form>
        </div>
        </>
)
}

export default AddStudentForm 