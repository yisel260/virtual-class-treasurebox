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

  return (
    <>
   <RouterProvider router={router}/>
    </>)
};

export default App;
