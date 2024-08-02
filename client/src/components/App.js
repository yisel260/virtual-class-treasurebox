import React, { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../pages/Home";

function  App() {
  
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/check_session").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogin(user) {
    setUser(user);
  }

  function handleLogout() {
    setUser(null);
  }

  return (
    <>
    <BrowserRouter>
      <Route path="/" element={<Home />} />
    </BrowserRouter>
    </>
    );
};
export default App;
