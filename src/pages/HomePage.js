import React from "react";
import heroImage from "../assets/image/hero-image.png";
import collaborator1 from "../assets/image/collaborator1.png";
import collaborator2 from "../assets/image/collaborator2.png";
import "../styles/HomePage.css";

const HomePage = () => (
   <div className="home">
      <div className="hero">
         <img src={heroImage} alt="Hero Image" className="hero-image" />
      </div>

      <div className="clients-section">
         <h2>Our Collaborators</h2>
         <div className="client-images">
            <img src={collaborator1} alt="Collaborator 1" />
            <img src={collaborator2} alt="Collaborator 2" />
         </div>

         <div className="reviews-section">
            <h2>
               Don't just take our word for it. See what people say about us!
            </h2>
            <div className="review-videos">
               <iframe
                  width="200"
                  height="400"
                  src="https://www.tiktok.com/embed/v2/6914690665511144710?lang=en-US"
                  frameborder="0"
                  allowfullscreen
               ></iframe>
               <iframe
                  width="200"
                  height="400"
                  src="https://www.tiktok.com/embed/v2/6914338379173743878?lang=en-US"
                  frameborder="0"
                  allowfullscreen
               ></iframe>
               <iframe
                  width="200"
                  height="400"
                  src="https://www.tiktok.com/embed/v2/6914337171306466566?lang=en-US"
                  frameborder="0"
                  allowfullscreen
               ></iframe>
               <iframe
                  width="200"
                  height="400"
                  src="https://www.tiktok.com/embed/v2/6955938582553218310?lang=en-US"
                  frameborder="0"
                  allowfullscreen
               ></iframe>
               <iframe
                  width="200"
                  height="400"
                  src="https://www.tiktok.com/embed/v2/6955938582553218310?lang=en-US"
                  frameborder="0"
                  allowfullscreen
               ></iframe>
               {/* If you have more videos, you can continue to add them here */}
            </div>
         </div>
      </div>

      <h2 className="introduction">
         Your destination for high-quality video editing. From short clips to
         full-length productions, we bring your vision to life.
      </h2>
      <div className="action-buttons">
         <button onClick={() => (window.location.href = "/contact")}>
            Get in Contact with Us
         </button>
         <button onClick={() => (window.location.href = "/services")}>
            See How We Can Work with You
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
   </div>
);

export default HomePage;
