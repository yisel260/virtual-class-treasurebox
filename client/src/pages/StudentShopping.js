import React ,{useEffect,useState} from 'react';
import PrizeCard from '../components/PrizeCard';

function StudenShopping({studentUser}){
    const [prizes, setPrizes]= useState([])
    const [refreshPage, setRefreshPage] = useState(false);
  
  
    useEffect(() => {
      fetch("/prizes")
        .then((res) => res.json())
        .then((data) => {
          setPrizes(data);
        });
    }, [refreshPage]);
  

    return(
    <>
    <p>Hello {studentUser.name}!</p>
    <p>Pick your prizes! </p>
    {prizes.map(((prize)=>{
        return(
            <div>
                <PrizeCard prize={prize} key={prize.id}/>
            </div>
        )
    }))}
    
    </>
    )
}

export default StudenShopping;