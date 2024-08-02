import "./component.css"
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

function SignUpForm(){
  const [teachers, setTeachers] = useState([{}]);
  const [refreshPage, setRefreshPage] = useState(false);
  
  
  useEffect(() => {
    console.log("FETCH! ");
    fetch("/teachers")
      .then((res) => res.json())
      .then((data) => {
        setTeachers(data);
        console.log(data);
      });
  }, [refreshPage]);

  const formSchema= yup.object().shape(
    {
      fname: yup.string().required("must enter a name").max(20),
      lname: yup.string().required("must enter a last name").max(20),
      email: yup.string().email("Invalid email").required("Must enter email"),
      school: yup.string().required("must enter a school name")
    })
  
  const formik = useFormik({
      initialValues: {
        fname: "",
        lname: "",
        email: "",
        school: "",
      },
      validationSchema: formSchema,
      onSubmit: (values) => {
        fetch("/teachers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values, null, 2),
        }).then(
          (res) => {
          if (res.status === 200) {
              console.log(res)         
             }
            }
          )
        },
    });

   return( <>
    <div id="sign-up">
    <h3>Sign up</h3>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="fname">First Name: </label>
          <input
            id="fname"
            name="fname"
            onChange={formik.handleChange}
            value={formik.values.fname}
          /><br/><br/>

          <label htmlFor="lname">Last Name: </label>
          <input
            id="lname"
            name="lname"
            onChange={formik.handleChange}
            value={formik.values.lname}
          /><br/><br/>

          <label htmlFor="school">School: </label>
          <input
            id="school"
            name="school"
            onChange={formik.handleChange}
            value={formik.values.school}
          /><br/><br/>

          <label htmlFor="email">E-mail: </label>
          <input
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            
          /><br/><br/>
          <button  type="submit">Submit</button>

        
      </form>
    </div>
    </>
)}
export default SignUpForm;