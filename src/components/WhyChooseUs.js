import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Include carousel styles

const WhyChooseUs = () => {
  return (
    <div>
      {/* Add Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lora:wght@400;700&display=swap"
        rel="stylesheet"
      />

      {/* Include CSS for animations, background design, and responsive styles */}
      <style>
        {`
          @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes slideIn {
            from {
              transform: translateX(-100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          .story-section {
            position: relative;
            padding: 80px 40px; 
            background: linear-gradient(to bottom right, rgba(255, 255, 255, 0.9), rgba(242, 242, 242, 0.7));
            border-radius: 30px; 
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
            overflow: hidden;
          }
          /* Arc styles for decoration */
          .arc {
            position: absolute;
            width: 300px; 
            height: 300px; 
            border-radius: 50%;
            border: 2px dashed rgba(129, 129, 129, 0.3);
            opacity: 0.5;
          }
          .arc-top-left { top: -50px; left: -50px; transform: rotate(135deg); }
          .arc-bottom-right { bottom: -10px; right: -50px; transform: rotate(-45deg); }
          .arc-low-left { bottom: -70px; left: -50px; transform: rotate(45deg); }
          .arc-low-right { bottom: -70px; right: -50px; transform: rotate(-135deg); }
          
          .image-circle {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            height: 450px; /* Increased height for better layout */
            overflow: hidden;
          }
          .story-image {
            position: absolute;
            border-radius: 50%; /* Makes the images circular */
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4); /* Enhanced shadow for depth */
            width: 180px; /* Increased width */
            height: 180px; /* Maintain aspect ratio */
            transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth scaling effect on hover */
            border: 5px solid #FFFFFF; /* White border for frame effect */
          }

          /* Circular positioning of images */
          .story-image1 { transform: translate(-50%, -100%); } /* Top Center */
          .story-image2 { transform: translate(100%, -30%); } /* Top Right */
          .story-image3 { transform: translate(100%, 30%); } /* Bottom Right */
          .story-image4 { transform: translate(50%, 100%); } /* Bottom Center */
          .story-image5 { transform: translate(-100%, 30%); } /* Bottom Left */
          .story-image6 { transform: translate(-100%, -30%); } /* Top Left */

          /* Adding hover effect to images */
          .story-image:hover {
            transform: scale(1.15); /* Scale up on hover */
            z-index: 10; /* Raise image above others on hover */
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8); /* Enhanced shadow on hover */
          }

          .view-more {
            display: inline-block;
            margin-top: 20px;
            padding: 10px 20px;
            background-color: #1F3A6B;
            color: #fff;
            text-align: center;
            border-radius: 30px;
            text-decoration: none;
            transition: background-color 0.3s ease;
          }

          .view-more:hover {
            background-color: #FF6F30; /* Change color on hover */
          }

          /* Responsive Styles */
          @media (max-width: 1200px) {
            .story-section {
              padding: 60px 20px; /* Adjust padding for smaller screens */
            }
            .image-circle {
              height: 350px; /* Adjust height of image circle */
            }
            .story-image {
              width: 150px; /* Smaller image size */
              height: 150px; /* Maintain aspect ratio */
            }
          }

          @media (max-width: 768px) {
            section {
              flex-direction: column; /* Stack the sections */
              align-items: center; /* Center align items */
            }
            img {
              height: 250px; /* Reduce image height */
            }
            h2 {
              font-size: 2rem; /* Smaller font size */
            }
            p {
              font-size: 1rem; /* Smaller paragraph size */
            }
          }

          @media (max-width: 480px) {
            .view-more {
              width: 100%; /* Full width button */
              padding: 15px; /* Increase padding */
            }
          }
        `}
      </style>

      {/* Why Choose Us Section */}
      <section
        style={{
          position: "relative",
          padding: "100px 40px",
          background: "#fff",
          color: "#000",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "40px",
          overflow: "hidden",
          borderRadius: "30px",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.15)",
        }}
      >
        {/* Arcs Around the Section */}
        <div className="arc arc-top-left"></div>
        <div className="arc arc-bottom-right"></div>
        <div className="arc arc-low-left"></div>
        <div className="arc arc-low-right"></div>

        {/* Large Leaf Icon - Background Effect */}
        {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((position, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              ...{
                'top-left': { top: "0px", left: "0px" },
                'top-right': { top: "0px", right: "0px" },
                'bottom-left': { bottom: "0px", left: "0px" },
                'bottom-right': { bottom: "0px", right: "0px" },
              }[position],
              width: "150px", 
              height: "150px",
              opacity: 0.3, 
              zIndex: 0,
              animation: "rotate 3s linear infinite",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 150"
              fill="none"
              stroke="#FF6F30"
              strokeWidth="2"
              style={{ width: "100%", height: "100%" }}
            >
              <path d="M50 0 C 75 10, 100 50, 50 150 C 0 50, 25 10, 50 0" fill="#27ae60" />
              <path d="M50 50 L 30 100 L 70 100 Z" fill="#1F3A6B" />
              <path d="M50 0 L 45 35 L 55 35 Z" fill="#FF6F30" />
            </svg>
          </div>
        ))}

        {/* Image on the Left */}
        <div
          style={{
            flex: 1,
            maxWidth: "600px", 
            borderRadius: "30px", 
            overflow: "hidden",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.2)",
            animation: "slideIn 2s ease-in-out",
          }}
        >
          <img
            src="/images/why-choose-us-image.jpg"
            alt="Why Choose Us"
            style={{
              width: "100%",
              height: "300px", // Set a fixed height for uniformity
              objectFit: "cover",
              borderRadius: "30px",
              animation: "slideIn 0.5s forwards",
            }}
          />
        </div>

        {/* Text Box with "Why Choose Us" Content on the Right */}
        <div
          style={{
            flex: 1,
            padding: "50px",
            background: "rgba(0, 0, 0, 0.05)",
            borderRadius: "30px",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.1)",
            color: "#444",
            animation: "fadeIn 2s ease-in-out",
          }}
        >
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "2.5rem",
              fontWeight: "bold",
              color: "#1F3A6B",
              marginBottom: "20px",
            }}
          >
            WHY CHOOSE US?
          </h2>
          <p
            style={{
              fontFamily: "'Lora', serif",
              fontSize: "1.25rem",
              lineHeight: "1.8",
              color: "#555",
            }}
          >
            We bring compassionate care and world-class medical expertise to you, ensuring that you
            and your loved ones receive the highest level of service. Our team of experienced professionals is here
            to guide you through every step of your healthcare journey.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="story-section">
        {/* Arcs in Our Story Section */}
        <div className="arc arc-top-left"></div>
        <div className="arc arc-bottom-right"></div>
        <div className="arc arc-low-left"></div>
        <div className="arc arc-low-right"></div>

        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#1F3A6B",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          HIGHLIGHTS
        </h2>
        <p style={{
          fontFamily: "'Lora', serif",
          fontSize: "1.2rem",
          lineHeight: "1.8",
          color: "#555",
          textAlign: "center",
          maxWidth: "800px",
          margin: "0 auto 40px auto"
        }}>
          Our journey began with a vision to provide exceptional care to our community. 
          Over the years, we have evolved into a trusted healthcare provider, blending 
          clinical excellence with compassion. Our dedicated team works tirelessly 
          to ensure that every patient feels valued and cared for as we continue to 
          elevate the standards of healthcare in our region. 
          We believe that every individual's story matters, and we are committed to listening 
          to your needs, providing personalized solutions, and making your healthcare experience 
          as comfortable and supportive as possible.
        </p>

        {/* Arrange Images in a Circular Layout */}
        <div className="image-circle">
          <img
            src="/images/story-image1.jpg"
            alt="Story Image 1"
            className="story-image story-image1"
          />
          <img
            src="/images/story-image2.jpg"
            alt="Story Image 2"
            className="story-image story-image2"
          />
          <img
            src="/images/story-image3.jpg"
            alt="Story Image 3"
            className="story-image story-image3"
          />
          <img
            src="/images/story-image4.jpg"
            alt="Story Image 4"
            className="story-image story-image4"
          />
          <img
            src="/images/story-image5.jpg"
            alt="Story Image 5"
            className="story-image story-image5"
          />
          <img
            src="/images/story-image6.jpg"
            alt="Story Image 6"
            className="story-image story-image6"
          />
        </div>
        
        {/* View More Button */}
        <div style={{ textAlign: "center" }}>
          <a href="/our-full-story" className="view-more">View More</a>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;