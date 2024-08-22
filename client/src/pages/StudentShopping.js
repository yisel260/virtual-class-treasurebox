import React ,{useEffect,useState} from 'react';
import PrizeCard from '../components/PrizeCard';
import "./pages.css"

function StudenShopping({onStudentLogOut,studentUser}){
   const [prizes, setPrizes]= useState([])
   const [teacherId, setTeacherId] = useState("")
   const [prizesInCart, setPrizesInCart] = useState([])
   const [inCart, setInCart] = useState("")
   const [studentPoints,setStudentPoints] = useState(studentUser.points)
   const [myOrders, setMyOrders] = useState(studentUser.orders)
  
    useEffect(() => {
      fetch(`/sections/${studentUser.section_id}`)
      .then((res) =>res.json())
      .then((data) =>{
        setTeacherId(data.teacher_id)
        fetch(`/prizesbyteacher/${teacherId}`)
        .then((res) =>res.json())
        .then((data)=>{
           setPrizes(data)
        })
    })
    }, [teacherId]);

    function handleAddToCart(prize) {
        if (prize.point_value<=studentPoints){
            const cartItems = [...prizesInCart, prize];
            setPrizesInCart(cartItems);
            let points = studentPoints - prize.point_value;
            setStudentPoints(points);
            fetch(`/studentsById/${studentUser.id}` 
                ,{
                    method: 'PATCH',
                    headers: { 'Content-type':'application/json'
                    
                },
                body: JSON.stringify({
                    points:`${studentUser.points-=prize.point_value}`
                })
            })
                .then(res=>res.json())
                .then(data=>setStudentPoints(data.points))
            
        

        }
        else {
            alert("not enough points!")
        }
        
      }


    function handleRemoveFromCart(prize) {
            const cartItems = prizesInCart.filter((item)=>{
                return (item!== prize)
            });
            setPrizesInCart(cartItems);
            setStudentPoints(studentPoints + prize.point_value);

      }

    function sendOrder(){
        prizesInCart.forEach((prize)=>{
           const order = {
                status:"requested",
                student_id:studentUser.id,
                prize_id:prize.id
            }
            fetch(`/orders`,{
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                }, 
                body: JSON.stringify(order)
            })
            .then(res=>res.json())
            .then((newOrder)=>{
                let newOrderList= [...myOrders,newOrder]
                setMyOrders(newOrderList)})

            fetch(`/prizesById/${prize.id}`,{
                method: 'PATCH',
                headers: { 'Content-type':'application/json'
                
                },
                body: JSON.stringify({
                        foto : `${prize.foto}`,
                        description : `${prize.description}`,	
                        point_value :`${prize.point_value}`,
                        inventory : `${prize.inventory}`,
                        number_requested:`${prize.number_requested+=1}`,
                        teacher_id : `${prize.teacher_id}`

                    })
            })
            .then(res=>res.json())
        })
        setPrizesInCart([])

    }

  
    return(
    <>
        <div id="welcome-banner">
            <h3 id="student-name-banner">Hello {studentUser.name}!</h3>
            <button className="action-button"  onClick={onStudentLogOut}>Log Out</button>
        </div>
        <div className='info-display'>
            <p>Pick your prizes! </p>
            <p>You have {studentPoints} points to shop with!  </p>
        </div>
        <div id='prize-container'>
            {prizes.map(((prize)=>{
                return(
                    <div id='prize-card' key={prize.id}>
                        <PrizeCard handleRemoveFromCart={handleRemoveFromCart} handleAddToCart={handleAddToCart} prize={prize}  setInCart={setInCart} inCart={false}/>
                    </div>
                )
            }
            ))}
        </div>
        <h2>Your Shopping Cart</h2>

        <div className="cart" id='student-prize-container'>
            {prizesInCart.length>0?(<> {prizesInCart.map((prize)=>{
                   return (
                    <PrizeCard key={prize.id} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} prize={prize} setInCart={setInCart}  inCart = {true} />
                   )

                })}
                <button onClick={sendOrder}>Get Prizes!</button> </>):(<p>Your cart is empty!</p>)}
        </div>

        <h2>Your prizes are comming! </h2>

        <div id='student-order-container'>
            {myOrders.length>0?(<> {myOrders.map((order)=>{
                   return (
                    <div className='cart'>
                        <img className='prize-table-image' src={order.prize.foto}/>
                    </div>
                   )

                })}
               </>):(<p>No prizes ordered</p>)}
        </div>
    
    </>
    )
}

export default StudenShopping;