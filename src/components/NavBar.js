import React, { useState } from "react";
import "../styles/NavBar.css";

const NavBar = () => {
   const [isOpen, setIsOpen] = useState(false);

   const toggleMenu = () => {
      setIsOpen(!isOpen);
   };

   return (
      <nav className="navbar">
         <div className="nav-logo">
            <h2>Closed On Mondays</h2>
         </div>
         <div className="menu-icon" onClick={toggleMenu}>
            <i className="fas fa-bars"></i>
         </div>
         <ul className={isOpen ? "nav-links active" : "nav-links"}>
            <li>
               <a href="/">Home</a>
            </li>
            <li>
               <a href="/portfolio">Portfolio</a>
            </li>
            <li>
               <a href="/services">Services</a>
            </li>
            <li>
               <a href="/contact">Contact</a>
            </li>
         </ul>
      </nav>
   );
};

export default NavBar;
