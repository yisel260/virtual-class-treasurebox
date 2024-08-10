import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";



function AddStudentForm({sectionSelectedId}){
// const formSchema= yup.object().shape(
//     {
//       name: yup.string().required("must enter a name").max(20),
//       password: yup.string().required("must enter a pasword").max(20),
//       points: yup.number().required("Must a point value in number form"),
//       section_id: yup.number().required("must enter a school name")
//     })

console.log(sectionSelectedId)
  const formik = useFormik({
      initialValues: {
        name: "",
        password: "",
        points:"",  
        section_id:sectionSelectedId,
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
        .then((res) => {
          if (res.status === 201) {
            console.log("student added successfully")
          }
        })
        resetForm();
      }
      })
return (
    <>
    
   

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