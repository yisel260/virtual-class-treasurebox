import { Link, useOutlet } from "react-router-dom";
import { useOutletContext, useNavigate } from "react-router-dom";

function NavBar() {
  const context = useOutletContext()
  const navigate = useNavigate();

  function handleLogout() {
    console.log("handleLogout called");

    fetch("/logout", {
      method: "DELETE",
    }).then(() => {
      context.setUser(null)
      navigate("/")
    });
}
  return (
    <>
   <div id="navbar">
        <br/>
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/ManageClasses">Mange Classes</Link>
        <Link className="nav-link" to="/ManagePrizes">Manage Prizes</Link>
        <button id ="logout" className="action-button" onClick={handleLogout}>Logout</button>

    </div>
    </>
  );
};

export default NavBar;