import React from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import "./pages.css";

function Prizes(){
    return(
        <>
          <header>
          <Header/>
          <NavBar />
        </header>
        <form id="addPrizeForm">
            <label for = "prize-name">Prize </label>
            <input type="text"></input>
            <label for ="description">Description</label>
            <input type="text"></input>
            <label for = "points">Point value</label>
            <input type="text"></input>
            <label for="inventory">Number Available</label>
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
            </table>
            
        </div>
        </>
    )
}

export default Prizes;