// src/pages/ServicesPage.js
import React from "react";
import "../styles/ServicesPage.css";

const ServicesPage = () => (
   <div className="services">
      <h1>Our Video Editing Services</h1>

      <div className="service-item">
         <h2>Commercial Video Editing</h2>
         <p>
            High-quality commercial video editing to promote your products or
            services to a wider audience.
         </p>
      </div>

      <div className="service-item">
         <h2>Documentary Editing</h2>
         <p>
            We bring your story to life with our professional documentary
            editing services.
         </p>
      </div>

      <div className="service-item">
         <h2>Wedding & Event Video Editing</h2>
         <p>
            Capture the special moments with our expert wedding and event video
            editing services.
         </p>
      </div>

      <div className="service-item">
         <h2>Corporate Video Productions</h2>
         <p>
            Convey your company's message with sleek and professional corporate
            video productions.
         </p>
      </div>

      <div className="service-item">
         <h2>YouTube Video Editing</h2>
         <p>
            Engage your audience with captivating YouTube videos, edited to
            perfection.
         </p>
      </div>

      {/* You can add more services here */}
   </div>
);

export default ServicesPage;
