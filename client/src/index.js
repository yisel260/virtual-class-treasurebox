import React from "react";
import App from "./components/App";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import HomeLoggedIn from "./pages/HomeLoggedIn";



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLoggedIn />,
  }, 
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />)