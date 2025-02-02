import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const logo = `${process.env.PUBLIC_URL}/images/images.jpg`;

const Footer = () => {
  return (
    <footer style={styles.footer}>
      {/* Footer Content */}
      <div style={styles.footerContainer}>
        <div style={styles.linksContainer}>
          <h2 style={styles.footerTitle}>Connect With Us</h2>
          <div style={styles.linkColumns}>
            <div style={styles.linkColumn}>
              <h3 style={styles.columnTitle}>Company</h3>
              <a style={styles.link} href="#home">Home</a>
              <a style={styles.link} href="#about">About Us</a>
              <a style={styles.link} href="#services">Services</a>
            </div>
            <div style={styles.linkColumn}>
              <h3 style={styles.columnTitle}>Resources</h3>
              <a style={styles.link} href="#blog">Blog</a>
              <a style={styles.link} href="#gallery">Gallery</a>
              <a style={styles.link} href="#faq">FAQ</a>
            </div>
            <div style={styles.linkColumn}>
              <h3 style={styles.columnTitle}>Support</h3>
              <a style={styles.link} href="#contact">Contact Us</a>
              <a style={styles.link} href="#privacy">Privacy Policy</a>
              <a style={styles.link} href="#terms">Terms of Service</a>
            </div>
          </div>
          <div style={styles.socialIcons}>
            <a style={styles.iconLink} href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} style={styles.icon} />
            </a>
            <a style={styles.iconLink} href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} style={styles.icon} />
            </a>
            <a style={styles.iconLink} href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} style={styles.icon} />
            </a>
            <a style={styles.iconLink} href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} style={styles.icon} />
            </a>
          </div>
        </div>

        {/* Logo Section on the Right */}
        <div style={styles.logoContainer}>
          <img src={logo} alt="Company Logo" style={styles.logo} />
        </div>
      </div>

      {/* Footer Bottom */}
      <div style={styles.footerBottom}>
        <p style={styles.footerText}>&copy; 2025 Wellness Plus Health 4 All. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

// CSS Inside JS
const styles = {
  footer: {
    backgroundColor: '#0A3D62', // Navy blue
    color: 'white',
    padding: '40px 20px',
    position: 'relative',
    overflow: 'hidden',
    transition: 'background-color 0.3s',
  },
  footerContainer: {
    display: 'flex',
    flexDirection: 'row', // Change to row to position logo on the right
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end', // Aligns logo to the right
    marginLeft: 'auto', // Pushes the logo to the far right
    marginTop: '20px',
  },
  logo: {
    maxWidth: '150px', // Adjust size as necessary
  },
  footerTitle: {
    fontSize: '24px',
    marginBottom: '20px',
    fontFamily: "'Playfair Display', serif",
    color: '#F76C0D', // Orange
  },
  linksContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', 
    marginRight: '20px',
  },
  linkColumns: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%', // Take up full width
    marginBottom: '20px',
  },
  linkColumn: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: '20px',
  },
  columnTitle: {
    fontSize: '20px',
    marginBottom: '10px',
    color: '#F76C0D', // Orange
  },
  link: {
    margin: '5px 0', // Adjust margin for vertical spacing
    fontSize: '16px',
    color: '#E8F8F5', // Light green
    textDecoration: 'none',
    transition: 'color 0.3s',
  },
  socialIcons: {
    marginTop: '10px',
    display: 'flex', // Align social icons horizontally
  },
  iconLink: {
    color: '#E8F8F5', // Light green
    margin: '0 10px',
    transition: 'transform 0.3s',
  },
  icon: {
    fontSize: '30px',
  },
  footerBottom: {
    marginTop: '20px',
    borderTop: '1px solid #F76C0D', // Orange
    paddingTop: '10px',
    textAlign: 'center',
  },
  footerText: {
    color: '#E8F8F5', // Light green
  },
};

// Responsive styles
const mediaQueries = {
  '@media (min-width: 768px)': {
    footerContainer: {
      flexDirection: 'row', // Use row direction on larger screens
    },
    logoContainer: {
      marginTop: '0', // Remove top margin on larger screens
    },
    linksContainer: {
      alignItems: 'flex-start', // Keep links aligned to the left
    },
    linkColumns: {
      flexDirection: 'row', // Arrange link columns in a row on larger screens
    },
    linkColumn: {
      marginRight: '20px', // Add margin between link columns
    },
    footerTitle: {
      fontSize: '28px', // Increase title size for larger screens
    },
    columnTitle: {
      fontSize: '22px', // Increase column title size for larger screens
    },
  },
};

export default Footer;