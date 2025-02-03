import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel CSS
import { useNavigate } from 'react-router-dom';  // Updated import

const HeroSection = () => {
  const navigate = useNavigate();  // Use useNavigate instead of useHistory
  const [showWellnessResorts, setShowWellnessResorts] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const resorts = {
    india: [
      { name: "Aayana Wellness", id: "/india/aayana-wellness" },
      { name: "Ananda in the Himalayas", id: "/india/ananda-in-the-himalayas" },
      { name: "Shreyas Retreat", id: "/india/shreyas-retreat" },
    ],
    vietnam: [
      { name: "Amanoi Resort", id: "/vietnam/amanoi-resort" },
      { name: "Fusion Maia", id: "/vietnam/fusion-maia" },
      { name: "Six Senses Ninh Van Bay", id: "/vietnam/six-senses-ninh-van-bay" },
    ],
    indonesia: [
      { name: "The Wellness Haven Bali", id: "/indonesia/the-wellness-haven-bali" },
      { name: "Mandapa, a Ritz-Carlton Reserve", id: "/indonesia/mandapa-a-ritz-carlton-reserve" },
      { name: "Fivelements Retreat Bali", id: "/indonesia/fivelements-retreat-bali" },
    ],
    thailand: [
      { name: "Chiva-Som", id: "/thailand/chiva-som" },
      { name: "Kamalaya", id: "/thailand/kamalaya" },
      { name: "The Sanctuary Thailand", id: "/thailand/the-sanctuary-thailand" },
    ],
    malaysia: [
      { name: "The Andaman Resort", id: "/malaysia/the-andaman-resort" },
      { name: "Shangri-La's Rasa Ria Resort", id: "/malaysia/shangri-las-resa-ria-resort" },
      { name: "Banyan Tree Lang Co", id: "/malaysia/banyan-tree-lang-co" },
    ],
  };

  const countries = Object.keys(resorts);

  const slides = [
    {
      type: 'wellness',
      image: "/images/wellness1.jpg",
      heading: "Luxury Wellness Redefined",
      paragraph: "Discover a haven of health, tranquility, and rejuvenation. Explore personalized packages tailored to your needs.",
      subText: "Escape the ordinary, find your peace, and transform your wellness.",
    },
    {
      type: 'country',
      image: "/images/country1.jpg",
      country: "India",
      paragraph: "Experience the diversity and richness of culture while embracing wellness.",
    },
    {
      type: 'wellness',
      image: "/images/wellness2.jpg",
      heading: "Health Retreat Awaits",
      paragraph: "Embrace a journey to holistic wellness with our tranquil retreats.",
      subText: "Rejuvenate your mind, body, and soul with our exclusive health retreats.",
    },
    {
      type: 'country',
      image: "/images/country2.jpg",
      country: "Vietnam",
      paragraph: "Breathe in the natural beauty and wellness of Vietnam.",
    },
    {
      type: 'wellness',
      image: "/images/wellness3.jpg",
      heading: "Stay Balanced, Stay Healthy",
      paragraph: "Join us for a path towards a balanced, healthy lifestyle.",
      subText: "Let our expert guides show you the way to ultimate health.",
    },
    {
      type: 'country',
      image: "/images/country3.jpg",
      country: "Indonesia",
      paragraph: "Find your balance amidst the vibrant culture and serene landscapes.",
    },
    {
      type: 'wellness',
      image: "/images/wellness4.jpg",
      heading: "Embrace a Life of Wellness",
      paragraph: "Transform your lifestyle with our expert-led programs.",
      subText: "Your journey to wellness begins here.",
    },
    {
      type: 'country',
      image: "/images/country4.jpg",
      country: "Thailand",
      paragraph: "Discover tranquility in Thailand's breathtaking natural beauty.",
    },
    {
      type: 'wellness',
      image: "/images/wellness5.jpg",
      heading: "Journey Towards Wellness",
      paragraph: "Ignite your passion for health and wellness.",
      subText: "Step into a life of vitality.",
    },
    {
      type: 'country',
      image: "/images/country5.jpg",
      country: "Malaysia",
      paragraph: "Unwind in Malaysia's beautiful resorts and wellness centers.",
    },
  ];

  const handleCountryClick = (country) => {
    setSelectedCountry(selectedCountry === country ? null : country);
    if (country) {
      navigate(`/country/${country}`); // Using navigate for redirection
    }
  };

  return (
    <div>
      <div style={styles.heroContainer}>
        {/* Carousel */}
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={5000}
          transitionTime={800}
          style={{ height: "100%" }}
        >
          {slides.map((slide, index) => renderSlide(slide, index))}
        </Carousel>

        {/* Title and Logo */}
        <div style={styles.titleContainer}>
          <div style={styles.logoContainer}>
            <img src="/images/images.jpg" alt="Wellness Logo" style={styles.logo} />
          </div>
          <h1 style={styles.pageTitle}>Wellness Plus Health 4 All</h1>
        </div>

        {/* Menu */}
        <div style={styles.menuContainer}>
          <ul style={styles.menuList}>
            <li
              style={styles.menuItem}
              onClick={() => setShowWellnessResorts(!showWellnessResorts)}
              aria-label="Toggle Wellness Resorts"
            >
              Wellness Resorts
            </li>
            <li style={styles.menuItem}>About</li>
            <li style={styles.menuItem}>Contact</li>
            <li style={styles.menuItem}>Blog</li>
          </ul>
        </div>

        {/* Country List Modal */}
        {showWellnessResorts && (
          <div style={styles.countryContainer}>
            <h2 style={styles.countryHeader}>Select a Country</h2>
            <div style={styles.countryList}>
              {countries.map((country) => (
                <div key={country} style={styles.countryItem}>
                  <h4 style={styles.countryName} onClick={() => handleCountryClick(country)}>
                    {country.charAt(0).toUpperCase() + country.slice(1)}
                  </h4>
                  {selectedCountry === country && (
                    <div style={styles.resortList}>
                      {resorts[country].map((resort) => (
                        <a key={resort.name} href={resort.id} style={styles.resortItem}>
                          {resort.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Inline styles for CSS animations */}
      <style>
        {`
          @keyframes slideIn {
            from {
              transform: translateY(-20px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
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
        `}
      </style>
    </div>
  );
};

// Helper function
const renderSlide = (slide, index) => (
  <div key={index} style={styles.carouselImageWrapper}>
    <img
      src={slide.image}
      alt={`Slide ${index + 1}`}
      style={styles.carouselImage}
    />
    {slide.type === 'wellness' && (
      <div style={styles.overlayText}>
        <h2 style={styles.overlayHeading}>{slide.heading}</h2>
        <p style={styles.overlayParagraph}>{slide.paragraph}</p>
        <p style={styles.overlaySubText}>{slide.subText}</p>
      </div>
    )}
    {slide.type === 'country' && (
      <div style={styles.overlayText}>
        <h2 style={styles.countryOverlayHeading}>{slide.country}</h2>
        <p style={styles.countryOverlayParagraph}>{slide.paragraph}</p>
      </div>
    )}
  </div>
);

// Styles
const styles = {
  heroContainer: {
    position: "relative",
    height: "100vh",
    color: "#fff",
    fontFamily: "'Lora', sans-serif",
    overflow: "hidden",
    zIndex: 1,
  },
  carouselImageWrapper: {
    position: "relative",
    textAlign: "center",
  },
  carouselImage: {
    maxWidth: "100%",
    height: "100vh",
    objectFit: "cover",
  },
  titleContainer: {
    position: "absolute",
    top: 50,
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    marginRight: "15px",
  },
  logo: {
    width: "120px",
    height: "auto",
  },
  pageTitle: {
    fontSize: "2.5rem",
    fontFamily: "'Playfair Display', serif",
    textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7)",
    color: "#fff",
    maxWidth: "700px",
  },
  menuContainer: {
    position: "absolute",
    top: 160,
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 10,
    background: "#001F3F",
    padding: "10px 30px",
    borderRadius: "30px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
  },
  menuList: {
    listStyleType: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    gap: "30px",
    flexDirection: "row",
    alignItems: "center",
    fontFamily: "'Lora', sans-serif",
    fontSize: "1.2rem",
    color: "#fff",
  },
  menuItem: {
    position: "relative",
    cursor: "pointer",
    padding: "10px 20px",
    borderRadius: "30px",
    color: "#fff",
    fontWeight: "bold",
    transition: "background 0.3s, transform 0.3s",
  },
  countryContainer: {
    position: "absolute",
    top: "220px",
    left: "50%",
    transform: "translateX(-50%)",
    background: "#ffffff",
    zIndex: 20,
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    width: "80%",
    maxHeight: "400px",
    overflowY: "scroll",
    animation: "slideIn 0.5s ease",
  },
  countryHeader: {
    fontSize: "24px",
    textAlign: "center",
    marginBottom: "10px",
  },
  countryList: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: "10px",
  },
  countryItem: {
    padding: "10px",
    cursor: "pointer",
    borderBottom: "1px solid #ddd",
    position: "relative",
    flexBasis: "20%",
    textAlign: "center",
    margin: "10px",
    backgroundColor: "#f8f8f8",
    borderRadius: "10px",
  },
  countryName: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#001F3F",
    cursor: "pointer",
    margin: "10px 0",
  },
  resortList: {
    marginTop: "10px",
    marginLeft: "0",
    textAlign: "left",
    display: "block",
  },
  resortItem: {
    display: "block",
    padding: "5px 0",
    color: "#001F3F",
    textDecoration: "none",
    animation: "fadeIn 0.5s ease",
    fontSize: "18px",
  },
  overlayText: {
    position: "absolute",
    bottom: "20px",
    left: "20px",
    color: "#fff",
    textAlign: "left",
  },
  countryOverlayHeading: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#fff",
    marginBottom: "10px",
  },
  countryOverlayParagraph: {
    fontSize: "1.2rem",
    marginTop: "10px",
    color: "#fff",
  },
};

export default HeroSection;