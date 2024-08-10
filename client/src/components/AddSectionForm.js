import React from 'react';
import { useFormik } from "formik";
import * as yup from "yup";


function AddSectionForm({user, setSectionSelected}){

const formik = useFormik({
    initialValues: {
        name:"",
        section_code:"", 
        teacher_id:`${user.id}`
    },
    onSubmit:(values,{resetForm})=>{
        fetch ("/sections",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values,null,2),
        })
        .then((res)=>res.json())
        .then((data)=>{
            setSectionSelected(data.name)
        })
        resetForm();
    }
})
return(
    <>
    <form onSubmit={formik.handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input 
        type='text'
        name='name'
        value={formik.values.name}
        onChange={formik.handleChange}
         />

        <label htmlFor='section_code'>Class Code:</label>
        <input 
        type='text'
        name='section_code'
        value={formik.values.section_code}
        onChange={formik.handleChange}
         /> 

        <label htmlFor='teacher_id'></label>
        <input 
        type='text'
        name='name'
        value={formik.values.teacher_id}
        onChange={formik.handleChange}
         />
        <button className="action-button" type="submit">Submit</button>
    </form>
    </>
)
}

export default AddSectionForm