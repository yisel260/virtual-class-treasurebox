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
        to="/manageclasses"
        className="nav-link"
      >
        Manage Classes 
      </NavLink>
      <NavLink
        to="/manage prizes"
        className="nav-link"
      >
        Manage Prizes 
      </NavLink>
    </nav>
  );
};

export default NavBar;