import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
   <div>
    
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/ManageClasses">Mange Classes</Link>
        <Link className="nav-link" to="/ManagePrizes">Mangage Prizes</Link>
    </div>
    </>
  );
};

export default NavBar;