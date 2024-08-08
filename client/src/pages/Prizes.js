import React, { useEffect, useState } from "react";
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import "./pages.css";

function Prizes(){

    const [prizes, setPrizes] = useState([{}]);
    const [refreshPage, setRefreshPage] = useState(false);
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted

  useEffect(() => {
    console.log("FETCH! ");
    fetch("/prizes")
      .then((res) => res.json())
      .then((data) => {
        setPrizes(data);
        console.log(data);
      });

  }, []);
    console.log ("rendering component"
    )
    return(
        <>
          <header>
          <Header/>
          <NavBar />
        </header>
        <form id="addPrizeForm">
            <label htmlFor = "prize-name">Prize </label>
            <input type="text"></input>
            <label htmlFor ="description">Description</label>
            <input type="text"></input>
            <label htmlFor = "points">Point value</label>
            <input type="text"></input>
            <label htmlFor="inventory">Number Available</label>
            <input type="text"></input>
            <input type="submit" value = "Add Prize"/>
            </form>
        <div>
            <table >
                <tr>
                    <th>Prize</th>
                    <th>Description</th>
                    <th>Available </th>
                    <th>Requested</th>
                    <th>Net Total</th>  
                </tr>
                {prizes === "undefined" ? (<p>Loading</p>) : (
                 prizes.map((prize) => (
              <>
                <tr key={prize.id}>
                  <td>{prize.name}</td>
                  <td>{prize.description}</td>
                  <td>{prize.available}</td>
                  <td>{prize.requested}</td>
                  <td>{prize.available - prize.requested}</td>


                </tr>
              </>
            ))
          )}
            </table>
            
        </div>
        </>
    )
}

export default Prizes;