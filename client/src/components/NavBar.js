import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
    <br/>
    <nav className="navbar">
      <NavLink
        to="/"
        className="nav-link"
      >
        Home
      </NavLink>
      <NavLink
        to="/classes"
        className="nav-link"
      >
        Manage Classes 
      </NavLink>
      <NavLink
        to="/prizes"
        className="nav-link"
      >
        Manage Prizes 
      </NavLink>
    </nav>
    </>
  );
};

export default NavBar;