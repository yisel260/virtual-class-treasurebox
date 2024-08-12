import React from 'react';
import { useFormik } from "formik";
import * as yup from "yup";

function AddPrizeForm(user){

    const formik = useFormik({
        initialValues: {
            foto:"",
            description:"",
            point_value:"", 
            inventory:"",
            number_requested:"0",
            teacher_id:user.id,
        },
        onSubmit:(values,{resetForm})=>{
            fetch ("/prizes",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values,null,2),
            })
            .then((res)=>res.json())
            .then((data)=>{
                console.log(data);                
            })
            resetForm();
        }
    })

    return (
        <>
        <form onSubmit={formik.handleSubmit} id="addPrizeForm">

            <label htmlFor = "prize-foto">Foto</label>
            <input type="text"
            id='foto'
            onChange={formik.handleChange}
            value={formik.values.foto}></input>

            <label htmlFor ="description">Description</label>
            <input type="text"
             id='description'
             onChange={formik.handleChange}
             value={formik.values.description}></input>

            <label htmlFor = "points">Point value</label>
            <input type="text"
             id='point_value'
             onChange={formik.handleChange}
             value={formik.values.point_value}></input>

            <label htmlFor="inventory">Number Available</label>
            <input type="text"
             id='inventory'
             onChange={formik.handleChange}
             value={formik.values.inventory}></input>

            <input type="hidden"
            id='number_requested'
             onChange={formik.handleChange}
             value={formik.values.number_requested}></input>

            <input type="hidden"
            id='teacher_id'
             onChange={formik.handleChange}
             value={formik.values.teacher_id}></input>
             

            <input type="submit" value = "Add Prize"/>
            </form>
        </>
    
)}

export default AddPrizeForm