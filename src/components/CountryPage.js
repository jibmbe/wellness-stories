import React from 'react';
import './CountryPage.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSun,
  faPray,              // Meditation
  faPersonWalking,      // Yoga
  faHandsHelping,       // Massage
  faSpa,
  faMountain,           // Retreats
  faUtensils,           // Culinary services
  faUserCheck,          // Replacing faCoach with faUserCheck
} from '@fortawesome/free-solid-svg-icons';

const CountryPage = () => {
  const wellnessServices = [
    {
      title: 'Meditation',
      description:
        "Meditation has deep roots in Indian culture, originating from ancient spiritual practices aimed at achieving inner peace and self-realization. Join our guided sessions to explore techniques like Transcendental Meditation and Mindfulness, allowing you to connect with your essence and cultivate tranquility amidst life's chaos.",
      icon: faPray,   // Using faPray for meditation
      image: `${process.env.PUBLIC_URL}/images/meditation.jpg`,
    },
    {
      title: 'Yoga',
      description:
        'Yoga, a profound practice that began in India thousands of years ago, unites the body, mind, and spirit. Our classes feature styles such as Hatha, Ashtanga, and Kundalini, guiding practitioners through postures and breathwork to enhance physical health and mental clarity. Embrace this holistic discipline as a pathway to well-being.',
      icon: faPersonWalking, // Using faPersonWalking for yoga
      image: `${process.env.PUBLIC_URL}/images/yoga.jpg`,
    },
    {
      title: 'Ayurvedic Massage Therapy',
      description:
        "Ayurvedic massage therapy is an essential component of India's traditional healing system. Utilizing herbal oils tailored to your dosha, our expert therapists provide soothing treatments that relieve tension and restore balance. Experience this ancient art of healing that promotes not just physical relaxation but also emotional rejuvenation, leaving you revitalized and centered.",
      icon: faHandsHelping, // Using faHandsHelping for massage
      image: `${process.env.PUBLIC_URL}/images/massage.jpg`,
    },
  ];

  const luxuryWellnessServices = [
    {
      title: 'Luxury Ayurveda Spa Treatments',
      description:
        'Indulge in personalized spa experiences steeped in Ayurvedic philosophy. Enjoy herbal facials, oil massages, and body scrubs that rejuvenate your skin and spirit, offering a luxurious retreat that embodies wellness and serenity.',
      icon: faSpa,
      image: `${process.env.PUBLIC_URL}/images/spa.jpg`,
    },
    {
      title: 'Heritage Wellness Retreats',
      description:
        'Embark on an exclusive retreat in breathtaking surroundings, designed to encourage tranquility and reflection. Our heritage retreats combine traditional wellness practices with local culture, offering an immersive experience that reconnects you to nature and your inner self.',
      icon: faMountain, // Using faMountain for retreats
      image: `${process.env.PUBLIC_URL}/images/private_retreat.jpg`,
    },
    {
      title: 'Gastronomic Ayurveda Cuisine',
      description:
        "Delight in our culinary offerings that marry taste and health. Drawing from Ayurvedic principles, our skilled chefs create meals that nourish the body, balancing flavors with wellness. Enjoy dishes made with organic and locally sourced ingredients, celebrating India's rich culinary heritage.",
      icon: faUtensils, // Using faUtensils for culinary services
      image: `${process.env.PUBLIC_URL}/images/gourmet_cuisine.jpg`,
    },
    {
      title: 'Personal Wellness Guide',
      description:
        "Our experienced wellness coaches offer guidance rooted in traditional Indian practices, helping you craft personalized wellness plans that encompass fitness, nutrition, and mindfulness. They are dedicated to supporting your journey towards holistic well-being.",
      icon: faUserCheck, // Using faUserCheck for coaching
      image: `${process.env.PUBLIC_URL}/images/personal_coach.jpg`,
    },
  ];

  const wellnessVideos = [
    {
      title: 'Meditation in India',
      src: 'x2wBS6sjpjM', // Just the video ID
    },
    {
      title: 'Yoga Practices from India',
      src: 'dAqQqmaI9vY', // Just the video ID
    },
    {
      title: 'Ayurveda and Holistic Healing',
      src: 'nwf_jNwNI4s', // Just the video ID
    },
  ];

  return (
    <div className="country-page">
      <div className="welcome-section">
        <FontAwesomeIcon icon={faSun} size="3x" color="#FFD700" />
        <h1>Welcome to Wellness in India</h1>
        <p>
          Experience the essence of India's ancient traditions and holistic approaches to wellness. From meditation and yoga to ayurvedic massage therapy and luxury spa treatments, we offer an array of transformative experiences. Our wellness journey is designed to nurture your body, calm your mind, and rejuvenate your spirit.
        </p>
      </div>

      {/* Luxury Wellness Services Section */}
      <section className="luxury-services">
        <h2>Luxury Wellness Services</h2>
        <div className="luxury-images">
          {luxuryWellnessServices.map((service, index) => (
            <div key={index} className="luxury-service-box">
              <img src={service.image} alt={service.title} className="luxury-image" />
              <h3>
                <FontAwesomeIcon icon={service.icon} /> {service.title}
              </h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        <div className="see-more">
          <a href="/luxury-packages" className="see-more-button">See More Luxury Wellness Treats</a>
        </div>
      </section>

      {/* Regular Wellness Services Section */}
      <section className="wellness-services">
        <h2>Wellness Services</h2>
        <div className="wellness-service-grid">
          {wellnessServices.map((service, index) => (
            <div key={index} className={`service-container ${index % 2 === 0 ? "normal" : "reverse"}`}>
              <div className="images-right">
                <img src={service.image} alt={service.title} className="service-image" />
              </div>
              <div className="content-left">
                <h3>
                  <FontAwesomeIcon icon={service.icon} /> {service.title}
                </h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Background Image Section */}
      <div
        className="background-section"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/backgroundhe.jpg)`,
          height: '100vh',
        }}
      >
        <div className="overlay">
          <h2>Our Philosophy</h2>
          <p>
            Our approach to wellness is deeply rooted in India's ancient traditions, emphasizing the balance of body, mind, and spirit. We believe that true wellness encompasses not only physical health but also emotional and mental serenity.
          </p>
          <p>
            With a profound respect for the environment, we integrate traditional wisdom with modern strategies. Our wellness coaches, trained in time-honored techniques, guide you through transformative experiences.
          </p>
          <p>
            Join us in promoting a lifestyle that cherishes health and cultivates a vibrant community, celebrating a holistic view of well-being.
          </p>
        </div>
      </div>

      {/* Wellness Videos Section */}
      <section className="wellness-videos">
        <h2>Our Wellness Videos</h2>
        <div className="video-gallery">
          {wellnessVideos.map((video, index) => (
            <div key={index} className="video-box">
              <h3>{video.title}</h3>
              <iframe
                src={`https://www.youtube.com/embed/${video.src}`}
                title={video.title}
                className="video-embed"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CountryPage;