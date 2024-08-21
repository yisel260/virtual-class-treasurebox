import React, { useEffect, useState } from "react";
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import "./pages.css";
import AddPrizeForm from "../components/AddPrizeForm";
import EditPrizeForm from "../components/EditPrizeForm";
import { useOutletContext } from "react-router-dom";
import StudentOrder from "../components/studentOrder";
import PrizesDataTable from "../components/PrizesDataTable";

function Prizes(){
 const[updatePrize,setUpdatePrize] = useState(false)
 const[AddPrize,setAddPrize]=useState(false)
 const context = useOutletContext()
 const [prizeToUpdate,setPrizeToUpdate]=useState(null)
 const [showOrders,setShowOrders]=useState(false)
 const [showPrizeTable,setShowPrizeTable]=useState(true)

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

function handleAddPrizeClick(){
    setAddPrize(!AddPrize)
    setShowOrders(false)

}

function handleUpdatePrize(e){
    const selectedPrize= context.prizes.filter((prize)=>{
      return prize.id==e.target.value
    })
    setPrizeToUpdate(selectedPrize[0])
    setUpdatePrize(!updatePrize)
    setShowOrders(false)
}

function handlePrizeByStudentClick(){
  setShowOrders(!showOrders)
  setAddPrize(false)
  setUpdatePrize(false)

}

    return(
        <>
          <header>
          <Header/>
            <NavBar />
          <br/>
          </header>
          <br/>
          <button onClick={handleAddPrizeClick} className="choice-button">Add Prize</button>
          <button onClick={handlePrizeByStudentClick} className="choice-button">Student Prize Orders </button>
          <br/>
          {AddPrize?(<AddPrizeForm setAddPrize={setAddPrize} />):null}
          {updatePrize?(<EditPrizeForm updatePrize ={updatePrize} setUpdatePrize ={setUpdatePrize} prizeToUpdate={prizeToUpdate}/>):null}
          <br/>
          {showOrders?(<div id="student-order-container">{context.students.map((student)=>{
              return (
              <StudentOrder showOrders={showOrders} setShowOrders={setShowOrders} student={student} key={student.id}/>
            )})
              }</div>):null}
          <br/>
          {showPrizeTable?(<PrizesDataTable handleDeletePrize={handleDeletePrize}  handleUpdatePrize={handleUpdatePrize} />):null}
        </>
    )
}

export default Prizes;