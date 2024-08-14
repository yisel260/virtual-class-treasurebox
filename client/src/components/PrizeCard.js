import React ,{useEffect,useState} from 'react';
import "./component.css"

function PrizeCard({prize,handleAddToCart}){
   
    function handlePrizeClick(){
        handleAddToCart(prize)
    }
   
return(
<>
<div >
<img onClick={handlePrizeClick} className="prize-picture" src={prize.foto} alt="My Image" />
<p >{prize.description}</p>
<p >Points {prize.point_value}</p>
</div>

</>)
}


export default PrizeCard 