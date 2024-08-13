import React, { useEffect, useState } from "react";
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import "./pages.css";
import AddPrizeForm from "../components/AddPrizeForm";
import { useOutletContext } from "react-router-dom";

function Prizes(){

 const context = useOutletContext()
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
        <div>
            <table >
                <tr>
                    {/* <th>Prize</th> */}
                    <th>Description</th>
                    <th>Available </th>
                    <th>Requested</th>
                    <th>Net Total</th>  
                    <th></th>
                    <th></th>  
                </tr>
                {context.prizes?(
                 context.prizes.map((prize) => (
              <>
                <tr key={prize.id}>
                  {/* <td>{prize.name}</td> */}
                  <td>{prize.description}</td>
                  <td>{prize.inventory}</td>
                  <td>{prize.number_requested}</td>
                  <td>{prize.inventory - prize.number_requested}</td>
                  <td><button>delete</button></td>
                  <td><button>Update</button></td>
            </tr>
      

              </>
            ))
          ): (<p>Loading</p>) }
            </table>
            
        </div>
        </>
    )
}

export default Prizes;