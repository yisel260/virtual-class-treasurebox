import React from 'react';
import { useFormik } from "formik";
import * as yup from "yup";
import { useOutletContext } from 'react-router-dom';
import "./component.css";


function EditPrizeForm({prizeToUpdate,updatePrize,setUpdatePrize}){
    console.log(prizeToUpdate.foto)

    const context =useOutletContext()

    const formik = useFormik({
        initialValues: {
            foto:`${prizeToUpdate.foto}`,
            description:`${prizeToUpdate.description}`,
            point_value:`${prizeToUpdate.point_value}`, 
            inventory:`${prizeToUpdate.inventory}`,
            number_requested:`${prizeToUpdate.number_requested}`,
            teacher_id:`${context.user.id}`,
        },
        onSubmit:(values,{resetForm})=>{
            console.log(context.user.id)
            fetch (`/prizesById/${prizeToUpdate.id}`,{
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values,null,2),
            })
            .then((res)=>res.json())
            .then((data)=>{
                context.getPrizes(context.user.id)
                setUpdatePrize(!updatePrize)
            })
            resetForm();
        }
    })

    return (
        <>
        <form  onSubmit={formik.handleSubmit} id="update-prize-form">

            <label className="form-label" htmlFor = "prize-foto">Foto</label>
            <input type="text"
            id='foto'
            onChange={formik.handleChange}
            value={formik.values.foto}></input>

            <label className="form-label" htmlFor ="description">Description</label>
            <input type="text"
             id='description'
             onChange={formik.handleChange}
             value={formik.values.description}></input>
            <br/>
            <br/>
            <label className="form-label" htmlFor = "points">Point value</label>
            <input type="text"
             id='point_value'
             onChange={formik.handleChange}
             value={formik.values.point_value}></input>
        

            <label className="form-label" htmlFor="inventory">Number Available</label>
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
             <br/>
             <br/>

            <input className='action-button' type="submit" value = "Update Prize"/>
            </form>
        </>
    
)}

export default  EditPrizeForm 