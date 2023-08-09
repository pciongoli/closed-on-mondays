// src/pages/PortfolioPage.js
import React from "react";
import "../styles/PortfolioPage.css";

const PortfolioPage = () => (
   <div className="portfolio">
      <h1>Portfolio</h1>
      <div className="projects">
         {/* Example project */}
         <div className="project">
            <div className="video-preview">
               <video controls>
                  <source src="project1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
               </video>
            </div>
            <h3 className="project-title">Project Title 1</h3>
            <p className="project-details">
               Description and details about the project...
            </p>
            <p className="technical-details">
               Technical details, software used, etc...
            </p>
         </div>

         {/* You can add more projects similarly */}
      </div>
   </div>
);

export default PortfolioPage;
