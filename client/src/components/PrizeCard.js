import React ,{useEffect,useState} from 'react';
import "./component.css"

function PrizeCard({prize}){
   
return(
<>
<img className="prize-picture" src={prize.foto} alt="My Image" />
<p>{prize.description}</p>
<p>Points {prize.point_value}</p>
</>)
}


export default PrizeCard 