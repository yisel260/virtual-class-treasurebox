import React from "react";
import { useOutletContext } from "react-router-dom";


function PrizesDataTable({handleDeletePrize,  handleUpdatePrize}){
    const context = useOutletContext()
    return(
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
                <td><img className="prize-table-image"src={prize.foto} alt={prize.description}/></td>
                <td>{prize.description}</td>
                <td>{prize.inventory}</td>
                <td>{prize.number_requested}</td>
                <td>{prize.inventory - prize.number_requested}</td>
                <td>
                  <button value={prize.id} onClick={handleDeletePrize}>delete</button>
                  <button value={prize.id} onClick={handleUpdatePrize}>Update</button>
                  </td>
                </tr>
            ))
          ) : (<p>Loading</p>)}
        </tbody>
      </table>
    )
}
export default PrizesDataTable