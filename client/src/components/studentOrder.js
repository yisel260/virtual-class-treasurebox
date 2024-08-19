import React , {useState, useEffect} from 'react';
import { useOutletContext } from 'react-router-dom';

function StudentOrder({student}){

    function handleChangeStatus(e, order){
        console.log(e)
        let newStatus = e.target.value
    
        fetch(`orderById/${order.id}`,{
            method: 'PATCH',
            headers: { 'Content-type':'application/json' },
            body: JSON.stringify({
                status: newStatus
            })
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    
    return (
        <div className='student-order'>
            <p>{student.name}</p>
            {student.orders.map((order) => {
                return (
                    <>
                        <p>{order.prize.description}
                        <select onChange={(e) => handleChangeStatus(e, order)}  id="student-order-status" name="student-order-status">
                            <option value={order.status} name="order-status-option">{order.status}</option>
                            <option value={order.status === "requested" ? "fulfilled" : "requested"} name="order-status-option">
                                {order.status === "requested" ? "fulfilled" : "requested"}</option>
                            {order.status === "fulfilled" ? (<button type="button">delete order</button>) : null}
                        </select> 
                        </p>
                    </>
               )
           })}
        </div>
    )
}
export default StudentOrder;