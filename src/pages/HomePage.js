// src/pages/HomePage.js
import React from "react";
import "../styles/HomePage.css";

const HomePage = () => (
   <div className="home">
      <h1>Welcome to Closed On Mondays</h1>
      <h2 className="introduction">
         Your destination for professional video editing services.
      </h2>

      <div className="showcase">
         <h2>Showcase</h2>
         <video controls>
            <source src="showcase.mp4" type="video/mp4" />
            Your browser does not support the video tag.
         </video>
      </div>

      <div className="cta-buttons">
         <button onClick={() => (window.location.href = "/services")}>
            View Services
         </button>
         <button onClick={() => (window.location.href = "/contact")}>
            Get in Touch
         </button>
      </div>

      <div className="services-overview">
         <h2>Services Overview</h2>
         <p>We offer a wide range of video editing services, including...</p>
         {/* You can add more details or list the services here */}
      </div>
   </div>
);

export default HomePage;
