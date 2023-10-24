// src/pages/HomePage.js
import React from "react";
import videoSrc from "../assets/video/homepage-video.mp4";
import "../styles/HomePage.css";

const HomePage = () => (
   <div className="home">
      <div className="hero">
         <img
            src="https://via.placeholder.com/1920x1080"
            alt="Hero Image"
            className="hero-image"
         />
         <h1>Welcome to Closed Monday</h1>
      </div>

      <div className="clients-section">
         <h2>Who We Work With</h2>
         <div className="client-images">
            <img src="https://via.placeholder.com/150" alt="Client 1" />
            <img src="https://via.placeholder.com/150" alt="Client 2" />
            <img src="https://via.placeholder.com/150" alt="Client 3" />
            <img src="https://via.placeholder.com/150" alt="Client 4" />
            <img src="https://via.placeholder.com/150" alt="Client 5" />
         </div>

         <div className="reviews-section">
            <h2>Watch the Reviews</h2>
            <div className="review-videos">
               <video width="200" controls>
                  <source
                     src="https://via.placeholder.com/200x112"
                     type="video/mp4"
                  />
                  Your browser does not support the video tag.
               </video>
               <video width="200" controls>
                  <source
                     src="https://via.placeholder.com/200x112"
                     type="video/mp4"
                  />
                  Your browser does not support the video tag.
               </video>
               <video width="200" controls>
                  <source
                     src="https://via.placeholder.com/200x112"
                     type="video/mp4"
                  />
                  Your browser does not support the video tag.
               </video>
               <video width="200" controls>
                  <source
                     src="https://via.placeholder.com/200x112"
                     type="video/mp4"
                  />
                  Your browser does not support the video tag.
               </video>
               <video width="200" controls>
                  <source
                     src="https://via.placeholder.com/200x112"
                     type="video/mp4"
                  />
                  Your browser does not support the video tag.
               </video>
            </div>

            <div className="action-buttons">
               <button onClick={() => (window.location.href = "/contact")}>
                  Get in Contact with Us
               </button>
               <button onClick={() => (window.location.href = "/services")}>
                  See How We Can Work with You
               </button>
            </div>
         </div>
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
