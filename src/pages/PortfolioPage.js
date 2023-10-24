import React from "react";
import "../styles/PortfolioPage.css";

const projects = [
   {
      mediaUrl: "https://assets.codepen.io/7125791/video+%281080p%29.mp4",
      title: "Video Title 1",
      details: "Video description...",
      technicalDetails: "Technical details...",
      type: "video",
   },
   {
      mediaUrl: "https://assets.codepen.io/7125791/video+%281080p%29.mp4",
      title: "Video Title 2",
      details: "Video description...",
      technicalDetails: "Technical details...",
      type: "video",
   },
   {
      mediaUrl:
         "https://www.tiktok.com/embed/v2/6914690665511144710?lang=en-US",
      title: "TikTok Title 1",
      details: "TikTok description...",
      technicalDetails: "Technical details...",
      type: "tiktok",
   },
   {
      mediaUrl:
         "https://www.tiktok.com/embed/v2/6914338379173743878?lang=en-US",
      title: "TikTok Title 2",
      details: "TikTok description...",
      technicalDetails: "Technical details...",
      type: "tiktok",
   },
   {
      mediaUrl: "https://assets.codepen.io/7125791/audio_sample.mp3",
      title: "Audio Title 1",
      details: "Audio description...",
      technicalDetails: "Technical details...",
      type: "audio",
   },
   {
      mediaUrl: "https://assets.codepen.io/7125791/audio_sample.mp3",
      title: "Audio Title 2",
      details: "Audio description...",
      technicalDetails: "Technical details...",
      type: "audio",
   },
];

const PortfolioPage = () => {
   const renderMedia = (project) => {
      if (project.type === "video") {
         return (
            <video controls>
               <source src={project.mediaUrl} type="video/mp4" />
               Your browser does not support the video tag.
            </video>
         );
      } else if (project.type === "tiktok") {
         return (
            <iframe
               width="200"
               height="400"
               src={project.mediaUrl}
               frameborder="0"
               allowfullscreen
            ></iframe>
         );
      } else if (project.type === "audio") {
         return <audio controls src={project.mediaUrl}></audio>;
      }
   };

   return (
      <div className="portfolio">
         <h1>A little taste of what we do</h1>
         <div className="filters">
            <a href="#video">Video</a>
            <a href="#tiktok">TikTok</a>
            <a href="#audio">Audio</a>
         </div>

         <section id="video">
            <div className="projects">
               <h2>Video</h2>
               {projects
                  .filter((p) => p.type === "video")
                  .map((project, index) => (
                     <div className="project" key={index}>
                        <div className="media-preview">
                           {renderMedia(project)}
                        </div>
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-details">{project.details}</p>
                        <p className="technical-details">
                           {project.technicalDetails}
                        </p>
                     </div>
                  ))}
            </div>
         </section>

         <section id="tiktok">
            <div className="projects">
               <h2>TikTok</h2>
               {projects
                  .filter((p) => p.type === "tiktok")
                  .map((project, index) => (
                     <div className="project" key={index}>
                        <div className="media-preview">
                           {renderMedia(project)}
                        </div>
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-details">{project.details}</p>
                        <p className="technical-details">
                           {project.technicalDetails}
                        </p>
                     </div>
                  ))}
            </div>
         </section>

         <section id="audio">
            <div className="projects">
               <h2>Audio</h2>
               {projects
                  .filter((p) => p.type === "audio")
                  .map((project, index) => (
                     <div className="project" key={index}>
                        <div className="media-preview">
                           {renderMedia(project)}
                        </div>
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-details">{project.details}</p>
                        <p className="technical-details">
                           {project.technicalDetails}
                        </p>
                     </div>
                  ))}
            </div>
         </section>
      </div>
   );
};

export default PortfolioPage;
