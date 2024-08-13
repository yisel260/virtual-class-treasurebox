import React ,{useEffect,useState} from 'react';
import PrizeCard from '../components/PrizeCard';
import { useOutletContext } from 'react-router-dom';
import "./pages.css"

function StudenShopping({onStudentLogOut,studentUser}){
   const [prizes, setPrizes]= useState([])
   const [teacherId, setTeacherId] = useState("")
  
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

  

    return(
    <>
    <div id="welcome-banner">
    <h3 id="student-name-banner">Hello {studentUser.name}!</h3>
    <button className="action-button" onClick={onStudentLogOut}>Log Out</button>
    </div>
    <div className='info-display'>
    <p>Pick your prizes! </p>
    <p>You have {studentUser.points} points to shop with!  </p>
    
    </div>
    <div id='prize-container'>
    {prizes.map(((prize)=>{
        return(
            <div id='prize-card' key={prize.id}>
                <PrizeCard prize={prize} />
            </div>
        )
    }
    ))}
    </div>
    <h2>Your prizes</h2>

    <div id='student-prize-container'>
        
    </div>
    
    </>
    )
}

export default StudenShopping;