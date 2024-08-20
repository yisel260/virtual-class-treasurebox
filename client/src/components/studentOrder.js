import React , {useState, useEffect} from 'react';
import { useOutletContext } from 'react-router-dom';

function StudentOrder({student}){
    
 const context = useOutletContext()
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
        .then((data) => {
            fetch(`/prizesById/${data.prize_id}`,{
                method:'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    foto : `${order.prize.foto}`,
                    description : `${order.prize.description}`,	
                    point_value :`${order.prize.point_value}`,
                    inventory : `${order.prize.inventory-=1}`,
                    number_requested:`${order.prize.number_requested-=1}`,
                    teacher_id : `${order.prize.teacher_id}`
                })
            }).then(response => response.json())
            .then((prize) => {
              context.getPrizes(prize.teacher_id);
            }
            )

        })
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