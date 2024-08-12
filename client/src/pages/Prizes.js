import React, { useEffect, useState } from "react";
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import "./pages.css";
import AddPrizeForm from "../components/AddPrizeForm";
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
                </tr>
                {prizes?(
                 prizes.map((prize) => (
              <>
                <tr key={prize.id}>
                  {/* <td>{prize.name}</td> */}
                  <td>{prize.description}</td>
                  <td>{prize.inventory}</td>
                  <td>{prize.number_requested}</td>
                  <td>{prize.inventory - prize.number_requested}</td>


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