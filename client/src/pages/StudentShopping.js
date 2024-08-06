import React from 'react'; 


function StudenShopping({studentUser}){
    return(
    <>
    <p>Hello {studentUser.name}!</p>
    <p>Pick your prizes! </p>
    {/* <PrizeCard/> */}
    </>
    )
}

export default StudenShopping;