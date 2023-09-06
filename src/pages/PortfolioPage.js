// src/pages/PortfolioPage.js
import React from "react";
import "../styles/PortfolioPage.css";

const projects = [
   {
      videoUrl: "https://assets.codepen.io/7125791/video+%281080p%29.mp4",
      title: "Project Title 1",
      details: "Description and details about the project...",
      technicalDetails: "Technical details, software used, etc...",
   },
   ,
   {
      videoUrl: "https://assets.codepen.io/7125791/video+%281080p%29.mp4",
      title: "Project Title 4",
      details: "Description and details about the fourth project...",
      technicalDetails: "Technical details, software used, etc...",
   },
   {
      videoUrl: "https://assets.codepen.io/7125791/video+%281080p%29.mp4",
      title: "Project Title 3",
      details: "Description and details about the third project...",
      technicalDetails: "Technical details, software used, etc...",
   },
   {
      videoUrl: "https://assets.codepen.io/7125791/video+%281080p%29.mp4",
      title: "Project Title 2",
      details: "Description and details about the second project...",
      technicalDetails: "Technical details, software used, etc...",
   }, // Add more project objects here
];

const PortfolioPage = () => (
   <div className="portfolio">
      <h1>Portfolio</h1>
      <div className="projects">
         {projects.map((project, index) => (
            <div className="project" key={index}>
               <div className="video-preview">
                  <video controls>
                     <source src={project.videoUrl} type="video/mp4" />
                     Your browser does not support the video tag.
                  </video>
               </div>
               <h3 className="project-title">{project.title}</h3>
               <p className="project-details">{project.details}</p>
               <p className="technical-details">{project.technicalDetails}</p>
            </div>
         ))}
      </div>
   </div>
);

export default PortfolioPage;
