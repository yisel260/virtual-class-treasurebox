import React ,{useEffect,useState} from 'react';
import "./component.css"

function PrizeCard({prize, handleAddToCart, handleRemoveFromCart, inCart, setInCart}){
    

    function handlePrizeClick(){
    if (inCart==false) {
        handleAddToCart(prize)
        setInCart(!inCart)
    }
    else {
        handleRemoveFromCart(prize)
        setInCart(!inCart)
    }
        
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