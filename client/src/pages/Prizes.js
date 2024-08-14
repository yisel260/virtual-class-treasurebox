import React, { useEffect, useState } from "react";
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import "./pages.css";
import AddPrizeForm from "../components/AddPrizeForm";
import EditPrizeForm from "../components/EditPrizeForm";
import { useOutletContext } from "react-router-dom";

function Prizes(){
 const[updatePrize,setUpdatePrize] = useState(false)
 const context = useOutletContext()
 const [prizeToUpdate,setPrizeToUpdate]=useState(null)

 function handleDeletePrize(e) {
  const prizeId = e.target.value;

  fetch(`/prizesById/${prizeId}`, {
    method: 'DELETE',
  })
    .then((res) => {
      if (res.ok) {
        context.getPrizes(context.user.id);
      }
    });
}

function handleUpdatePrize(e){
  const selectedPrize= context.prizes.filter((prize)=>{
    return prize.id==e.target.value
  })
  setPrizeToUpdate(selectedPrize[0])
  setUpdatePrize(!updatePrize)
}

    return(
        <>
          <header>
          <Header/>
          <NavBar />
          <br/>
        </header>
        <br/>
         <AddPrizeForm/>
        <br/>
        {updatePrize?(<EditPrizeForm updatePrize ={updatePrize} setUpdatePrize ={setUpdatePrize} prizeToUpdate={prizeToUpdate}/>):null}

        {/* <EditPrizeForm/> */}
        <div>
          <br/>
          <table>
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Available</th>
                  <th>Requested</th>
                  <th>Net Total</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {context.prizes ? (
                  context.prizes.map((prize) => (
                    <tr key={prize.id}>
                      <td>{prize.description}</td>
                      <td>{prize.inventory}</td>
                      <td>{prize.number_requested}</td>
                      <td>{prize.inventory - prize.number_requested}</td>
                      <td><button value={prize.id} onClick={handleDeletePrize}>delete</button></td>
                      <td><button value={prize.id} onClick={handleUpdatePrize}>Update</button></td>
                      </tr>
                  ))
                ) : (<p>Loading</p>)}
              </tbody>
            </table>
            
        </div>
        </>
    )
}

export default Prizes;