import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes,Link } from "react-router-dom";
import Home from "./pages/Home";
import { Outlet, useOutletContext } from "react-router-dom";

function  App() {

 const [testVariable,setTestVariable]=useState("This information is coming from app")

  return (
    <>
     
    <BrowserRouter>
    <div>

     <div>
        <Link to="/">Home</Link>
        <Link to="/classes">Mange Classes</Link>
        <Link to="/prizes">Mangage Prizes</Link>

      </div>
    <Routes>
      <Route path = "/" element={<Home />} ></Route>
    </Routes>
    </div>
    </BrowserRouter>
    <Outlet context={{testVariable, setTestVariable}}/> 

    </>
    );
};
export default App;
