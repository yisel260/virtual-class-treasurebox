import { NavLink } from "react-router-dom";

/* define the NavBar component */
function NavBar() {
  return (
    <nav class="navbar">
      <NavLink
        to="/"
        /* add styling to Navlink */
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
  );
};

export default NavBar;