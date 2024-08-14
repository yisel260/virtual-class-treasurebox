import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import "./component.css";


import { useOutlet, useOutletContext } from "react-router-dom";

function AddStudentForm({}){
  const context = useOutletContext()
  console.log(context.sectionSelected)
// const formSchema= yup.object().shape(
//     {
//       name: yup.string().required("must enter a name").max(20),
//       password: yup.string().required("must enter a pasword").max(20),
//       points: yup.number().required("Must a point value in number form"),
//       section_id: yup.number().required("must enter a school name")
//     })

  const formik = useFormik({
      initialValues: {
        name: "",
        password: "",
        points:"",  
        section_id:context.sectionSelected,
      },
    //   validationSchema: formSchema,
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

<form onSubmit={formik.handleSubmit}>

        <label htmlFor="name"> Name: </label>
        <input
        id="name"
        name="name"
        onChange={formik.handleChange}
        value={formik.values.name}
        />

        <label htmlFor="password">Password: </label>
        <input
        id="password"
        name="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        />

        <label htmlFor="points">Points: </label>
        <input
        id="points"
        name="points"
        onChange={formik.handleChange}
        value={formik.values.points}
        />

        <input
        type="hidden"
        id="section_id"
        name="section_id"
        onChange={formik.handleChange}
        value={formik.values.section_id}
        
        />
        <button className="action-button" type="submit">Submit</button>
        </form>
        </>
)
}

export default AddStudentForm 