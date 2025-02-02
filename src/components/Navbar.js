import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Font Awesome
import "@fontsource/playfair-display"; // Elegant font
import "@fontsource/lora"; // Complementary font

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPackagesOpen, setIsPackagesOpen] = useState(false);
  const [hoveredPackage, setHoveredPackage] = useState(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleMouseOverPackages = () => setIsPackagesOpen(true);
  const handleMouseOutPackages = () => setIsPackagesOpen(false);

  const packages = [
    { name: "Luxury Escape", details: "A top-notch luxury package." },
    { name: "Adventure Thrill", details: "An adventurous experience for thrill-seekers." },
    { name: "Wellness Retreat", details: "A relaxing package for wellness lovers." },
    { name: "Family Getaway", details: "Perfect for family vacations and bonding." }
  ];

  return (
    <>
      {/* Navbar */}
      <nav
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          padding: "10px 20px",
          background: "linear-gradient(90deg, rgba(0, 128, 0, 0.8), rgba(255, 165, 0, 0.9))", // Green to Orange
          borderRadius: "0 10px 10px 0",
          zIndex: "1000",
          boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.5)",
        }}
      >
        <button
          onClick={toggleMenu}
          style={{
            background: "none",
            border: "none",
            color: "navy", // Hamburger icon color set to navy blue
            fontSize: "28px",
            cursor: "pointer",
            transition: "transform 0.3s ease, color 0.3s",
          }}
          aria-label="Toggle menu"
          tabIndex="0"
          onMouseOver={(e) => {
            e.target.style.transform = "rotate(90deg)";
            e.target.style.color = "lightgrey"; // Color on hover
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "rotate(0deg)";
            e.target.style.color = "navy"; // Revert hover color to navy
          }}
        >
          <i className="fas fa-bars" aria-hidden="true"></i>
        </button>
      </nav>

      {/* Slide-out Menu */}
      {isMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.85)", // Darkened background
            backdropFilter: "blur(10px)",
            color: "white",
            zIndex: "999",
            display: "flex",
            flexDirection: "column",
            animation: "slideIn 0.4s ease-out, fadeIn 0.3s ease-in",
            overflowY: "auto",
          }}
        >
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            style={{
              position: "absolute",
              top: "15px",
              right: "15px",
              background: "none",
              border: "none",
              fontSize: "28px",
              color: "white",
              cursor: "pointer",
              transition: "transform 0.3s",
            }}
            aria-label="Close menu"
            tabIndex="0"
            onMouseOver={(e) => (e.target.style.transform = "rotate(-90deg)")}
            onMouseOut={(e) => (e.target.style.transform = "rotate(0deg)")}
          >
            <i className="fas fa-times" aria-hidden="true"></i>
          </button>

          {/* Menu Columns */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-around",
              padding: "50px 20px",
              flexWrap: "wrap",
            }}
          >
            <ul
              style={{
                listStyle: "none",
                padding: "0",
                margin: "0",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              {["Home", "Wellness", "Accommodation", "Dining", "Experience"].map((item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                    style={{
                      textDecoration: "none",
                      color: "white", // Text color changed to white
                      fontWeight: "bold",
                      fontSize: "24px",
                      fontFamily: "Playfair Display, serif",
                      padding: "10px 15px",
                      borderRadius: "8px",
                      transition: "background-color 0.3s, transform 0.2s",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = "rgba(255, 165, 0, 0.5)"; // Orange background on hover
                      e.target.style.transform = "scale(1.1)";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.transform = "scale(1)";
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/packages"
                  style={{
                    textDecoration: "none",
                    color: "white", // Text color changed to white
                    fontWeight: "bold",
                    fontSize: "24px",
                    padding: "10px 15px",
                    borderRadius: "8px",
                    transition: "background-color 0.3s, transform 0.2s",
                  }}
                >
                  Packages
                </a>
              </li>
            </ul>
          </div>

          {isPackagesOpen && (
            <div
              style={{
                position: "fixed",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.75)",
                color: "white",
                zIndex: "998",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "50px 20px",
              }}
            >
              <h2 style={{ fontFamily: "Playfair Display, serif" }}>{hoveredPackage ? hoveredPackage.name : "Smart Packages"}</h2>
              {hoveredPackage && (
                <p style={{ fontSize: "18px", margin: "20px 0", fontFamily: "Lora, serif" }}>{hoveredPackage.details}</p>
              )}
              <ul
                style={{
                  listStyle: "none",
                  padding: "0",
                  margin: "20px 0",
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                  textAlign: "center",
                }}
              >
                {packages.map((pkg) => (
                  <li key={pkg.name}>
                    <a
                      href={`/packages/${pkg.name.toLowerCase().replace(/\s+/g, "")}`}
                      style={{
                        textDecoration: "none",
                        color: "white", // Text color changed to white
                        fontWeight: "bold",
                        fontSize: "18px",
                        padding: "8px 15px",
                        borderRadius: "5px",
                        backgroundColor: "rgba(255, 165, 0, 0.2)", // Orange background
                        transition: "background-color 0.3s",
                      }}
                      onMouseOver={(e) => (e.target.style.backgroundColor = "rgba(255, 165, 0, 0.4)")} // Darker orange on hover
                      onMouseOut={(e) => (e.target.style.backgroundColor = "rgba(255, 165, 0, 0.2)")}
                    >
                      {pkg.name}
                    </a>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setIsPackagesOpen(false)}
                style={{
                  background: "none",
                  border: "none",
                  color: "white", // Text color changed to white
                  fontSize: "24px",
                  cursor: "pointer",
                  transition: "color 0.3s",
                }}
                aria-label="Close packages"
                tabIndex="0"
                onMouseOver={(e) => (e.target.style.color = "lightgrey")}
                onMouseOut={(e) => (e.target.style.color = "white")}
              >
                <i className="fas fa-times" aria-hidden="true"></i> Close
              </button>
            </div>
          )}

          {/* Social Media Icons */}
          <div
            style={{
              position: "absolute",
              bottom: "30px",
              left: "20px",
              display: "flex",
              gap: "20px",
            }}
          >
            {["facebook", "instagram", "youtube"].map((platform) => (
              <a
                key={platform}
                href={`https://${platform}.com`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "white", // Text color changed to white
                  fontSize: "26px",
                  transition: "color 0.3s, transform 0.2s",
                }}
                onMouseOver={(e) => {
                  e.target.style.color = "lightgrey"; // Color on hover
                  e.target.style.transform = "scale(1.2)";
                }}
                onMouseOut={(e) => {
                  e.target.style.color = "white"; // Revert hover color
                  e.target.style.transform = "scale(1)";
                }}
              >
                <i className={`fab fa-${platform}`} aria-hidden="true"></i>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Animation Keyframes */}
      <style>
        {
          `@keyframes slideIn { from { transform: translateX(-100%); } to { transform: translateX(0); } }
           @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }`
        }
      </style>

      {/* Responsive Styles */}
      <style>
        {`
          @media (max-width: 768px) {
            nav {
              padding: 5px 15px;
            }
            .navbar-button {
              font-size: 24px; /* Smaller hamburger icon */
            }

            /* Slide-out Menu */
            .slide-out-menu {
              padding: 30px 15px; /* Reduce padding */
            }

            .menu-item {
              font-size: 20px; /* Smaller font size for links */
              padding: 8px 10px; /* Reduce padding */
            }

            .social-media-icons {
              bottom: 15px; /* Closer to the bottom for mobile */
              left: 10px; /* Adjust left position */
            }
          }

          @media (max-width: 480px) {
            nav {
              padding: 5px 10px; /* Further reduce padding */
            }

            .navbar-button {
              font-size: 22px; /* Even smaller hamburger icon */
            }

            .slide-out-menu {
              padding: 20px 10px; /* Further reduce padding */
            }

            .menu-item {
              font-size: 18px; /* Smaller font size for links */
            }
          }
        `}
      </style>
    </>
  );
};

export default Navbar;