import React from "react";
import "../styles/PortfolioPage.css";

const projects = [
   //... (your existing projects here),
   {
      videoUrl: "https://assets.codepen.io/7125791/video+%281080p%29.mp4",
      title: "TikTok Example",
      details: "TikTok description...",
      technicalDetails: "Technical details...",
      category: "TikTok",
      type: "tiktok",
   },
   {
      audioUrl: "https://assets.codepen.io/7125791/audio_sample.mp3",
      title: "Audio Example",
      details: "Audio description...",
      technicalDetails: "Technical details...",
      category: "Audio",
      type: "audio",
   },
];

const PortfolioPage = () => {
   const renderProject = (project) => {
      if (project.type === "video") {
         return (
            <video controls>
               <source src={project.videoUrl} type="video/mp4" />
               Your browser does not support the video tag.
            </video>
         );
      } else if (project.type === "tiktok") {
         return (
            <iframe
               width="200"
               height="400"
               src={project.videoUrl}
               frameborder="0"
               allowfullscreen
            ></iframe>
         );
      } else if (project.type === "audio") {
         return <audio controls src={project.audioUrl}></audio>;
      }
   };

   return (
      <div className="portfolio">
         <h1>Portfolio</h1>
         <div className="filters">
            <a href="#video">Video</a>
            <a href="#tiktok">TikTok</a>
            <a href="#audio">Audio</a>
         </div>
         <div className="projects">
            <h2 id="video">Video</h2>
            {projects
               .filter((p) => p.type === "video")
               .map((project, index) => (
                  <div className="project" key={index}>
                     <div className="media-preview">
                        {renderProject(project)}
                     </div>
                     <h3 className="project-title">{project.title}</h3>
                     <p className="project-details">{project.details}</p>
                     <p className="technical-details">
                        {project.technicalDetails}
                     </p>
                  </div>
               ))}
            <h2 id="tiktok">TikTok</h2>
            {projects
               .filter((p) => p.type === "tiktok")
               .map((project, index) => (
                  <div className="project" key={index}>
                     <div className="media-preview">
                        {renderProject(project)}
                     </div>
                     <h3 className="project-title">{project.title}</h3>
                     <p className="project-details">{project.details}</p>
                     <p className="technical-details">
                        {project.technicalDetails}
                     </p>
                  </div>
               ))}
            <h2 id="audio">Audio</h2>
            {projects
               .filter((p) => p.type === "audio")
               .map((project, index) => (
                  <div className="project" key={index}>
                     <div className="media-preview">
                        {renderProject(project)}
                     </div>
                     <h3 className="project-title">{project.title}</h3>
                     <p className="project-details">{project.details}</p>
                     <p className="technical-details">
                        {project.technicalDetails}
                     </p>
                  </div>
               ))}
         </div>
      </div>
   );
};

export default PortfolioPage;
