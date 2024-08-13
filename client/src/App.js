import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes,Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import { Outlet, useOutletContext } from "react-router-dom";
import LoginInPage from "./pages/LogInPage";
import TeacherHome from "./pages/TeacherHome";
import StudentViewClass from "./pages/StudenViewClass";
import Classes from "./pages/Classes";
import Prizes from "./pages/Prizes";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
function  App() {

 const [testVariable,setTestVariable]=useState("This information is coming from app")
 const [user,setUser]=useState("")
 
 useEffect(() => {
  fetch("/check_session").then((response) => {
    if (response.ok) {
      response.json().then((user) => setUser(user));
    }
  });
    }, []);

  return (
    <>
   <RouterProvider router={router}/>

    </>)
};

export default App;
