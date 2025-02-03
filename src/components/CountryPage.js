import React from 'react';
import './CountryPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSun,
  faPray,
  faPersonWalking,
  faHandsHelping,
  faSpa,
  faMountain,
  faUtensils,
  faUserCheck,
  faMapMarkedAlt,
  faMapMarkerAlt,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const CountryPage = () => {
  const wellnessServices = [
    {
      title: 'Ayurvedic Wellness',
      description: "Discover the ancient secrets of Ayurveda, tailored to your unique dosha. Experience rejuvenation and balance.",
      icon: faSpa,
    },
    {
      title: 'Yoga and Meditation',
      description: 'Join our classes for Hatha, Ashtanga, and Kundalini yoga as well as meditation sessions to calm your mind.',
      icon: faPersonWalking,
    },
    {
      title: 'Healthy Cuisine',
      description: "Savor the flavors of India with our specially crafted, nutrient-rich meals tailored to your wellness goals.",
      icon: faUtensils,
    },
  ];

  const resorts = [
    {
      name: 'Aayana Wellness Retreat',
      location: 'Kerala',
      image: 'https://s3.ezgif.com/tmp/ezgif-39d4f7b72f861.jpg',
      detailsUrl: '/india/aayana-wellness',
    },
    {
      name: 'Ananda in the Himalayas',
      location: 'Uttarakhand',
      image: 'https://s3.ezgif.com/tmp/ezgif-37562ea81df8a.jpg',
      detailsUrl: '/india/ananda-in-the-himalayas',
    },
    {
      name: 'Shreyas Retreat',
      location: 'Bangalore',
      image: 'https://s1.ezgif.com/tmp/ezgif-199c97f7c3298.jpg',
      detailsUrl: '/india/shreyas-retreat',
    },
  ];

  const additionalContent = [
    {
      image: 'https://via.placeholder.com/300/FF5733/FFF?text=Retreat+Experience',
      text: 'Unwind in enchanting surroundings where nature meets traditional practices.',
    },
    {
      image: 'https://via.placeholder.com/300/33FF57/FFF?text=Wellness+Treatments',
      text: 'Experience rejuvenating Ayurvedic treatments designed to heal the body and mind.',
    },
    {
      image: 'https://via.placeholder.com/300/3357FF/FFF?text=Serene+Locations',
      text: 'Discover serene locations for relaxation and self-discovery.',
    },
  ];

  return (
    <div className="country-page">
      {/* Header Section */}
      <div className="header-section" style={{ backgroundImage: `url(https://fivelements.photoshelter.com/img/pixel.gif)` }}>
        <div className="header-text">
          <h1 style={{ color: '#F7DC6F' }}>India - The Land of Ayurveda</h1>
          <h2 style={{ color: '#F7DC6F' }}>Experience the ancient wisdom of Ayurveda and wellness</h2>
        </div>
      </div>

      {/* Services Section */}
      <section className="wellness-services" id="services">
        <div className="services-grid">
          {wellnessServices.map((service, index) => (
            <div key={index} className="service-box">
              <FontAwesomeIcon icon={service.icon} size="3x" className="service-icon" />
              <h3 style={{ color: '#F7DC6F' }}>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Join Us Section - Enhanced */}
      <section className="join-us-section" style={{ display: "flex", alignItems: "flex-start", margin: '20px 0' }}>
        <div className="join-us-image" style={{ flex: '1', marginRight: '20px' }}>
          <img src="https://s6.ezgif.com/tmp/ezgif-618f71bae86c3.jpg" alt="Wellness Plus Logo" className="logo-image" style={{ width: '100%', border: '1px solid #ccc', borderRadius: '8px' }} />
        </div>
        <div className="join-us-text" style={{ flex: '2' }}>
          <h2 style={{ color: '#F7DC6F' }}>Join the Wellness Journey</h2>
          <h3 style={{ color: '#F7DC6F' }}>Explore Unique Experiences and Tranquil Spots for Your Wellness Journey</h3>
          <p style={{ color: '#F7DC6F' }}>
            Immerse yourself in India's rich traditions and discover hidden gems that offer rejuvenation and tranquility. From serene beaches to serene hilltops, each destination offers a unique experience that nurtures your mind, body, and spirit.
          </p>
          <p style={{ color: '#F7DC6F' }}>
            Experience ancient Ayurvedic treatments, yoga retreats, and holistic wellness programs designed to restore your inner balance. With expert guidance and lush landscapes, you will embark on a transformative journey that connects you to nature and your innermost self.
          </p>
          <p style={{ color: '#F7DC6F' }}>
            Whether you seek adventure through yoga workshops or relaxation in luxury wellness resorts, India promises an unforgettable odyssey. Uncover the serenity of hidden villages, engage with local healers, and nourish your body with fresh, wholesome cuisine.
          </p>
          <p style={{ color: '#F7DC6F' }}>
            Join us as we explore the best of Indian wellness and health resorts, crafted to provide an enriching experience tailored to your needs. Together, we’ll create a journey that shines with the healing and harmony of India's timeless wellness culture.
          </p>
        </div>
      </section>

      {/* Resorts Intro Section */}
      <section className="resorts-intro" style={{ padding: '20px 0', backgroundColor: '#f5f5f5', textAlign: 'center' }}>
        <h2 style={{ color: '#F7DC6F' }}>Explore Our Top Resorts</h2>
        <p style={{ color: '#555' }}>
          Each resort is uniquely designed to offer an immersive experience in the heart of nature, paired with authentic wellness practices that soothe the mind, body, and spirit. Discover peaceful retreats that specialize in Ayurvedic healing and enjoy personalized services amidst breathtaking landscapes.
        </p>
      </section>

      {/* Resorts Section */}
      <section className="resorts-section">
        <div className="resort-grid">
          {resorts.map((resort, index) => (
            <div key={index} className="resort-box">
              <img src={resort.image} alt={resort.name} className="resort-image" />
              <div className="resort-content">
                <h3 style={{ color: '#F7DC6F' }}>{resort.name}</h3>
                <p style={{ color: '#F7DC6F' }}>{resort.location}</p>
                <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" className="map-icon" />
                <p style={{ color: '#F7DC6F' }}>
                  <a href={resort.detailsUrl}>View Details</a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Content Section */}
      <section className="additional-content" style={{ margin: '20px 0' }}>
        <div className="content-item" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <img src={additionalContent[0].image} alt="Retreat Experience" style={{ width: '300px', height: 'auto', marginRight: '20px', borderRadius: '8px' }} />
          <div style={{ flex: '1' }}>
            <h3 style={{ color: '#F7DC6F' }}>Retreat Experience</h3>
            <p style={{ color: '#555' }}>
              {additionalContent[0].text}
            </p>
          </div>
        </div>
        <div className="content-item" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <div style={{ flex: '1' }}>
            <h3 style={{ color: '#F7DC6F' }}>Wellness Treatments</h3>
            <p style={{ color: '#555' }}>
              {additionalContent[1].text}
            </p>
          </div>
          <img src={additionalContent[1].image} alt="Wellness Treatments" style={{ width: '300px', height: 'auto', marginLeft: '20px', borderRadius: '8px' }} />
        </div>
        <div className="content-item" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={additionalContent[2].image} alt="Serene Locations" style={{ width: '300px', height: 'auto', marginRight: '20px', borderRadius: '8px' }} />
          <div style={{ flex: '1' }}>
            <h3 style={{ color: '#F7DC6F' }}>Serene Locations</h3>
            <p style={{ color: '#555' }}>
              {additionalContent[2].text}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CountryPage;