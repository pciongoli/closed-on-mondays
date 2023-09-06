// src/pages/HomePage.js
import React from "react";
import videoSrc from "../assets/video/homepage-video.mp4";
import "../styles/HomePage.css";

const HomePage = () => (
   <div className="home">
      <div className="hero">
         <video autoPlay loop muted playsInline className="hero-video">
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
         </video>
         <h1>Welcome to Closed On Mondays</h1>
      </div>

      <h2 className="introduction">
         Your destination for high-quality video editing. From short clips to
         full-length productions, we bring your vision to life.
      </h2>

      <div className="testimonials">
         <h2>What Our Clients Say</h2>
         <p>
            "Closed On Mondays provided exceptional editing services for our
            corporate videos. Highly recommended!"
            <br />- John Doe, CEO of ABC Corp
         </p>
         <p>
            "The attention to detail and creativity brought our documentary to
            life. Can't wait for our next project!"
            <br />- Jane Smith, Documentary Producer
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
         </ul>
      </div>
   </div>
);

export default HomePage;
