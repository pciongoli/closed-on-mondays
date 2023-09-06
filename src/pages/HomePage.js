// src/pages/HomePage.js
import React from "react";
import "../styles/HomePage.css";

const HomePage = () => (
   <div className="home">
      <h1>Welcome to Closed On Mondays</h1>
      <h2 className="introduction">
         Your destination for high-quality video editing. From short clips to
         full-length productions, we bring your vision to life.
      </h2>

      <div className="showcase">
         <h2>Showcase</h2>
         <video controls>
            <source src="showcase.mp4" type="video/mp4" />
            Your browser does not support the video tag.
         </video>
         <p className="showcase-caption">
            A glimpse of our recent projects. Excellence in every frame.
         </p>
      </div>

      <div className="cta-buttons">
         <button onClick={() => (window.location.href = "/services")}>
            View Our Services
         </button>
         <button onClick={() => (window.location.href = "/contact")}>
            Contact Us Today
         </button>
      </div>

      <div className="services-overview">
         <h2>Services We Offer</h2>
         <ul>
            <li>Commercial Video Editing</li>
            <li>Corporate Video Productions</li>
            <li>Documentary Editing</li>
            <li>Wedding & Event Video Editing</li>
            {/* You can add more services here */}
         </ul>
      </div>
   </div>
);

export default HomePage;
