import React ,{useEffect,useState} from 'react';
import PrizeCard from '../components/PrizeCard';
import { useOutletContext } from 'react-router-dom';
import "./pages.css"

function StudenShopping({onStudentLogOut,studentUser}){
   const [prizes, setPrizes]= useState([])
   const [teacherId, setTeacherId] = useState("")
   const [prizesInCart, setPrizesInCart] = useState([])

  
    useEffect(() => {
      fetch(`/sections/${studentUser.section_id}`)
      .then((res) =>res.json())
      .then((data) =>{
        console.log (data)
        setTeacherId(data.teacher_id)
        fetch(`/prizesbyteacher/${teacherId}`)
        .then((res) =>res.json())
        .then((data)=>{
           setPrizes(data)
        })
    })
    }, [teacherId]);

    function handleAddToCart(prize) {
        if (prize.point_value<studentUser.points){
            const cartItems = [...prizesInCart, prize];
            console.log(cartItems);
            setPrizesInCart(cartItems);

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
                // .then(data=>setStudentPoints(data.points))
            
        

        }
        else {
            alert("not enough points!")
        }
        
      }


    return(
    <>
        <div id="welcome-banner">
            <h3 id="student-name-banner">Hello {studentUser.name}!</h3>
            <button className="action-button"  onClick={onStudentLogOut}>Log Out</button>
        </div>
        <div className='info-display'>
            <p>Pick your prizes! </p>
            <p>You have {studentUser.points} points to shop with!  </p>
        </div>
        <div id='prize-container'>
            {prizes.map(((prize)=>{
                return(
                    <div id='prize-card' key={prize.id}>
                        <PrizeCard handleAddToCart={handleAddToCart} prize={prize} />
                    </div>
                )
            }
            ))}
        </div>
        <h2>Your prizes</h2>

        <div id='student-prize-container'>
            {prizesInCart.length>0?( prizesInCart.map((prize)=>{
                   return (
                    <img className="prize-picture" src={prize.foto} alt={prize.description}/>
                   )

                })):(<p>Your cart is empty!</p>)}
                
        </div>
    
    </>
    )
}

export default StudenShopping;