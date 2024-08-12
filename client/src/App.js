import React, { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Outlet, useOutletContext } from "react-router-dom";

function  App() {

 const [testVariable,setTestVariable]=("This information is coming from app")
  return (
    <>
    <BrowserRouter>
      <Route path="/" element={<Home />} />
    </BrowserRouter>
    <Outlet context={{testVariable, setTestVariable}}/>
    </>
    );
};
export default App;
