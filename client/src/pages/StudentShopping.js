import React ,{useEffect,useState} from 'react';
import PrizeCard from '../components/PrizeCard';

function StudenShopping({studentUser}){
    const [prizes, setPrizes]= useState([])
   const [teacherId, setTeacherId] = useState("")
  
    useEffect(() => {
      fetch(`/sections/${studentUser.section_id}`)
      .then((res) =>res.json())
      .then((data) =>{
        console.log (data)
        console.log(data.teacher_id)
        // setTeacherId((teacherId)=>setTeacherIDdata.teacher_id)
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
    <p>Hello {studentUser.name}!</p>
    <p>Pick your prizes! </p>
    <p>You have {studentUser.points} points to shop with!  </p>
    {prizes.map(((prize)=>{
        return(
            <div key={prize.id}>
                <PrizeCard prize={prize} />
            </div>
        )
    }

    ))}

    <div>
        <p>Your prizes</p>
        <p>display student prizes here</p> 
        
    </div>
    
    </>
    )
}

export default StudenShopping;