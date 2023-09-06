// src/pages/ServicesPage.js
import React from "react";
import "../styles/ServicesPage.css";

const ServicesPage = () => (
   <div className="services">
      <h1>Our Video Editing Services</h1>
      <div className="service-item">
         <div className="icon">
            <img
               src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M3 22v-20l18 10-18 10z'></path></svg>"
               alt="Commercial Video Editing"
            />
         </div>
         <div className="service-content">
            <h2>Commercial Video Editing</h2>
            <p>
               High-quality commercial video editing to promote your products or
               services to a wider audience.
            </p>
            <p className="price">Starting at $500</p>
         </div>
      </div>
      <div className="service-item">
         <div className="icon">
            <img
               src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 12l-12 8v-16l12 8zm12-1.5l-9 5.2v-10.3l9 5.1zm-12 10.5l12-8-6-4-6 4-12-8v16l12-8z'></path></svg>"
               alt="Documentary Editing"
            />
         </div>
         <div className="service-content">
            <h2>Documentary Editing</h2>
            <p>
               We bring your story to life with our professional documentary
               editing services.
            </p>
            <p className="price">Starting at $800</p>
         </div>
      </div>
      <div className="service-item">
         <div className="icon">
            <img
               src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><circle cx='12' cy='7' r='4'></circle><path d='M6 21c0-1.074.252-2.09.7-3h10.6c.448.91.7 1.926.7 3h-12z'></path></svg>"
               alt="Wedding & Event Video Editing"
            />
         </div>
         <div className="service-content">
            <h2>Wedding & Event Video Editing</h2>
            <p>
               Capture the special moments with our expert wedding and event
               video editing services.
            </p>
            <p className="price">Starting at $300</p>
         </div>
      </div>
      <div className="service-item">
         <div className="icon">
            <img
               src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M3 2v20h18v-20h-18zm4 18h-4v-2h4v2zm0-4h-4v-2h4v2zm0-4h-4v-2h4v2zm0-4h-4v-2h4v2zm14 12h-14v-2h14v2zm0-4h-14v-2h14v2zm0-4h-14v-2h14v2zm0-4h-14v-2h14v2z'></path></svg>"
               alt="Corporate Video Productions"
            />
         </div>
         <div className="service-content">
            <h2>Corporate Video Productions</h2>
            <p>
               Convey your company's message with sleek and professional
               corporate video productions.
            </p>
            <p className="price">Starting at $600</p>
         </div>
      </div>
      <div className="service-item">
         <div className="icon">
            <img
               src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M21.8 8.001c0-2.072-1.528-3.76-3.612-4.038-.694-.084-1.387-.129-2.083-.129h-.011c-3.155 0-6.31.046-9.465.129-2.085.277-3.613 1.965-3.613 4.038 0 .685-.012 1.37-.012 2.055v4.028c0 .686.012 1.37.012 2.055 0 2.072 1.528 3.76 3.613 4.038.694.084 1.387.129 2.083.129 3.155 0 6.31-.046 9.465-.129 2.084-.278 3.612-1.966 3.612-4.038 0-.685.012-1.37.012-2.055v-4.028c0-.685-.012-1.37-.012-2.055zm-12.207 7.341v-5.688l5.42 2.844-5.42 2.844z'></path></svg>"
               alt="YouTube Video Editing"
            />
         </div>
         <div className="service-content">
            <h2>YouTube Video Editing</h2>
            <p>
               Engage your audience with captivating YouTube videos, edited to
               perfection.
            </p>
            <p className="price">Starting at $250</p>
         </div>
      </div>
      <h2>Our Process</h2>
      <p>
         We follow a systematic approach to ensure you get the best results. Our
         process includes: Receiving raw footage, Analysis & Planning, Editing,
         Feedback & Revisions, Final Delivery.
      </p>
   </div>
);

export default ServicesPage;
