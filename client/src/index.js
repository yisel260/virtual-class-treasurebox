import React from "react";
import App from "./components/App";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import HomeLoggedIn from "./pages/HomeLoggedIn";
import ErrorPage from "./pages/ErrorPage";
import Classes from "./pages/Classes";
import Prizes from "./pages/Prizes";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage/>,
  }, 

  {
    path: "/classes",
    element: <Classes />,
    errorElement: <ErrorPage/>,
  }, 
  {
    path: "/prizes",
    element: <Prizes/>,
    errorElement: <ErrorPage/>,
  }, 
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />)