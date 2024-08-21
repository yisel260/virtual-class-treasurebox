import React , {useState, useEffect} from 'react';
import { useOutletContext } from 'react-router-dom';

function StudentOrder({student,showOrders}){
    
    const context = useOutletContext()
    const [orders,setOrders]=useState()

    useEffect(()=>{
        getStudentOrders(student.id)
    console.log(orders)},[showOrders]
    )

    function handleChangeStatus(e, order){
        let newStatus = e.target.value
        fetch(`orderById/${order.id}`,{
            method: 'PATCH',
            headers: { 'Content-type':'application/json' },
            body: JSON.stringify({
                status: newStatus
            })
        })
        .then(res => res.json())
        .then((order) => {
          if (order.status=="fulfilled") 
            { fetch(`/prizesById/${order.prize_id}`,{
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
            )}

        else {
            fetch(`/prizesById/${order.prize_id}`,{
                method:'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    foto : `${order.prize.foto}`,
                    description : `${order.prize.description}`,	
                    point_value :`${order.prize.point_value}`,
                    inventory : `${order.prize.inventory+=1}`,
                    number_requested:`${order.prize.number_requested+=1}`,
                    teacher_id : `${order.prize.teacher_id}`
                })
            }).then(response => response.json())
            .then((prize) => {
              context.getPrizes(prize.teacher_id);
            }
            )

        }

        })
    }
    
    function handleDelete(e,order) {
        console.log(e.target)

        fetch(`/orderById/${order.id}`, {
            method: 'delete',
          })
            .then((res) => {
              if (res.ok) {
              getStudentOrders(order.student_id)
              }
            });

    }

    function getStudentOrders(studentId) {
        fetch(`/ordersByStudent/${studentId}`)
        .then(res=>res.json())
        .then((orders)=>{
            setOrders(orders)
        })
    }
    
    
    return (
        <div className='student-order-block' >
            <p id='student-order-name'>{student.name}</p>
            {orders?(
            <table>
                <tbody>
                   {orders.length>0? (<tr>
                        <th>Prize Description</th>
                        <th>Order Status</th>
                    </tr>):<p>No  orders</p>}
                        {orders.map((order) => {
                                    return (
                                <tr>
                                    <td> {order.prize.description}</td>
                                    <td> 
                                        <select  onChange={(e) => handleChangeStatus(e, order)}  id="student-order-status" name="student-order-status">
                                            <option value="requested" name="order-status-option">requested</option>
                                            <option value='fulfilled' name="order-status-option">fulfilled</option>
                                        </select> 
                                        <button onClick={(e) => handleDelete(e, order)} type="button">delete</button>
                                    </td>
                                </tr>
               )
            })}
            </tbody>
            </table>
            ):<p>No  orders</p>}
        </div>
    )
}
export default StudentOrder;