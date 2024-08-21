import React from 'react';
import { useFormik } from "formik";
import * as yup from "yup";
import { useOutletContext } from 'react-router-dom';


function AddSectionForm({setStudentRoster,setAddSection,setAddStudent}){

    const context = useOutletContext()

const formik = useFormik({
    initialValues: {
        name:"",
        section_code:"", 
        teacher_id:`${context.user.id}`
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
            context.setSectionSelected(data.id)
            context.getSections(data.teacher_id)
            context.getStudents(data.id)

        })
        resetForm();
        setStudentRoster(true)
        setAddSection(false)
        setAddStudent(true)
    }
})
return(
    


    <div className="form-container">
    <br/>
    <h3>Add student</h3>

    < form id= "add-section-form" onSubmit={formik.handleSubmit}>
        <label htmlFor='name'>Class Name:</label>
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
        type='hidden'
        name='name'
        value={formik.values.teacher_id}
        onChange={formik.handleChange}
         />
        <button className="action-button" type="submit">Submit</button>
    </form>
    </div>

)
}

export default AddSectionForm