// src/components/NavBar.js
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

function NavBar() {
   return (
      <nav className="navbar">
         <h1 className="title">Closed On Mondays</h1>
         <div className="links">
            <Link to="/">Home</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
         </div>
      </nav>
   );
}

export default NavBar;
