import React from "react";

const Blog = () => {
  // Sample data for the blog
  const mainPost = {
    title: "The Journey to Wellness",
    date: "January 1, 2023",
    description: "Join us as we explore the path to holistic wellness.",
    image: "https://images.pexels.com/photos/5310782/pexels-photo-5310782.jpeg?cs=srgb&dl=pexels-cottonbro-5310782.jpg&fm=jpg", // Example image URL
  };

  const blogPosts = [
    {
      title: "Finding Peace in Nature",
      date: "February 15, 2023",
      description:
        "Discover the healing power of the natural world by exploring serene landscapes, forests, and water bodies.",
      image: "https://images.pexels.com/photos/30445784/pexels-photo-30445784/free-photo-of-woman-in-traditional-indonesian-attire-in-lush-garden.jpeg?auto=compress&cs=tinysrgb&w=600", // Example image URL
      imageAlt: "Peaceful nature scene",
    },
    {
      title: "Mindful Meditation Techniques",
      date: "March 10, 2023",
      description:
        "Enhance your meditation practice with these techniques to achieve a deeper state of relaxation and self-awareness.",
      image: "https://images.pexels.com/photos/5384560/pexels-photo-5384560.jpeg?auto=compress&cs=tinysrgb&w=600", // Example image URL
      imageAlt: "Person meditating in nature",
    },
    {
      title: "The Power of Gratitude",
      date: "April 1, 2023",
      description:
        "Learn how focusing on gratitude can transform your life by fostering positive relationships and a more optimistic outlook.",
      image: "https://images.pexels.com/photos/3727566/pexels-photo-3727566.jpeg?auto=compress&cs=tinysrgb&w=600", // Example image URL
      imageAlt: "Person writing in a gratitude journal",
    },
    {
      title: "Nutrition for Optimal Health",
      date: "May 15, 2023",
      description:
        "Discover how proper nutrition and meal planning can improve your overall well-being by supporting your physical and mental health.",
      image: "https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=600", // Example image URL
      imageAlt: "Healthy plate with vegetables and fruits",
    },
    {
      title: "Embracing Mindfulness in Daily Life",
      date: "June 10, 2023",
      description:
        "Incorporate mindfulness into your daily routine to reduce stress and improve your focus by being present in the moment.",
      image: "https://media.istockphoto.com/id/1496615469/photo/serene-latin-woman-enjoy-sunset-with-gratitude.jpg?b=1&s=612x612&w=0&k=20&c=MNlSpp1AzVmzHsIlMrc52hQ5e70mfquJdLlmC_YP2OA=", // Example image URL
      imageAlt: "Person practicing yoga outdoors",
    },
    {
      title: "Wellness for a Happy Life",
      date: "July 1, 2023",
      description:
        "Learn how prioritizing wellness can lead to a more fulfilling and balanced life, filled with positivity and joy.",
      image: "https://images.pexels.com/photos/347135/pexels-photo-347135.jpeg?auto=compress&cs=tinysrgb&w=600", // Example image URL
      imageAlt: "Person smiling in a beautiful landscape",
    },
  ];

  const galleryImages = [
    {
      title: "Retreat Experience",
      src: "https://media.istockphoto.com/id/1429367591/photo/a-family-on-summer-holidays-stands-by-the-swimming-pool-and-enjoys-the-beautiful-sunset.jpg?b=1&s=612x612&w=0&k=20&c=3N0Cvy1XHAPAxPKeJm2qPYduJK0qphDMd-xSSKfK2kY=", // Example image URL
      alt: "People enjoying a retreat",
    },
    {
      title: "Nature Walk",
      src: "https://media.istockphoto.com/id/1269532812/photo/free-woman-breathing-clean-air-in-nature-forest-happy-girl-from-the-back-with-open-arms-in.jpg?b=1&s=612x612&w=0&k=20&c=dRHxeUZGpCFS6yjQdJpELgeV9clcNd51vqJkLeUx9v0=", // Example image URL
      alt: "Person walking in nature",
    },
    {
      title: "Group Meditation",
      src: "https://images.pexels.com/photos/3957803/pexels-photo-3957803.jpeg?auto=compress&cs=tinysrgb&w=600", // Example image URL
      alt: "People meditating together",
    },
    {
      title: "Wellness Workshop",
      src: "https://images.pexels.com/photos/25685910/pexels-photo-25685910/free-photo-of-side-view-of-woman-relaxing-on-grass-hills.jpeg?auto=compress&cs=tinysrgb&w=600", // Example image URL
      alt: "People participating in a workshop",
    },
    {
      title: "Sunrise Hike",
      src: "https://images.pexels.com/photos/2131842/pexels-photo-2131842.jpeg?auto=compress&cs=tinysrgb&w=600", // Example image URL
      alt: "People hiking at sunrise",
    },
    {
      title: "Yoga Practice",
      src: "https://images.pexels.com/photos/8534435/pexels-photo-8534435.jpeg?auto=compress&cs=tinysrgb&w=600", // Example image URL
      alt: "People practicing yoga",
    },
  ];

  return (
    <div style={styles.blogContainer}>
      {/* Header */}
      <h2 style={styles.blogTitle}>OUR BLOG</h2>
      <p style={styles.blogDescription}>
        Explore inspiring stories, wellness insights, and unforgettable moments from our retreat.
      </p>

      {/* Hero Blog Post */}
      <div style={styles.heroSection}>
        <img src={mainPost.image} alt={mainPost.title} style={styles.heroImage} />
        <div style={styles.heroContent}>
          <h3 style={styles.heroTitle}>{mainPost.title}</h3>
          <p style={styles.heroDate}>{mainPost.date}</p>
          <p style={styles.heroDescription}>{mainPost.description}</p>
          <button style={styles.heroButton} className="hero-button">
            Take a Virtual Tour
          </button>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div style={styles.blogGrid}>
        {blogPosts.map((post, index) => (
          <div key={index} style={styles.blogCard} className="blog-card">
            <img
              src={post.image}
              alt={post.title}
              style={styles.blogImage}
              className="blog-image"
            />
            <div style={styles.blogContent}>
              <h3 style={styles.blogPostTitle}>{post.title}</h3>
              <p style={styles.blogDate}>{post.date}</p>
              <p style={styles.blogText}>{post.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Gallery Section */}
      <h2 style={{ ...styles.blogTitle, marginTop: "50px" }}>OUR GALLERY</h2>
      <div style={styles.galleryContainer}>
        {galleryImages.map((image, index) => (
          <div
            key={index}
            style={{
              ...styles.galleryItem,
              animationDelay: `${index * 0.1}s`,
            }}
            className="galleryItem"
          >
            <img
              src={image.src}
              alt={image.alt}
              style={styles.galleryImage}
              loading="lazy"
              className="galleryImage"
            />
            <p style={styles.galleryCaption}>{image.title}</p>
          </div>
        ))}
      </div>

      {/* External CSS for animations */}
      <style>
        {`
          .hero-button:hover {
            background-color: #0A3D62;
            transform: scale(1.05);
          }

          .blog-card:hover {
            transform: scale(1.05);
            box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
          }

          .blog-image:hover {
            transform: scale(1.1);
            transition: transform 0.3s ease-in-out;
          }

          /* Gallery Animation */
          .galleryImage {
            transition: transform 0.3s ease-in-out;
            border-radius: 10px;
          }

          .galleryItem {
            opacity: 0;
            animation: slideIn 0.5s forwards;
          }

          @keyframes slideIn {
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          /* Responsive Styles */
          @media (max-width: 1200px) {
            .blog-grid {
              flex-direction: column;
              align-items: center;
            }

            .blogCard {
              width: 100%; // Full width on smaller screens
            }

            .heroSection {
              flex-direction: column; // Stack on smaller screens
            }

            .heroImage {
              width: 100%; // Full width for the image
              height: auto; // Keep aspect ratio
            }

            .heroContent {
              width: 100%;
            }
          }

          @media (max-width: 768px) {
            .blogTitle {
              fontSize: 32px; // Smaller title
            }

            .blogDescription {
              fontSize: 16px; // Smaller description text
            }

            .blogText {
              fontSize: 14px; // Smaller blog text
            }

            .galleryContainer {
              grid-template-columns: repeat(2, 1fr); // Reduce to two columns
            }
          }

          @media (max-width: 480px) {
            .blogTitle {
              fontSize: 28px; // Smaller title for mobile
            }

            .heroButton {
              padding: 10px 20px;
            }
          }
        `}
      </style>
    </div>
  );
};

// CSS Inside JS
const styles = {
  blogContainer: {
    width: "90%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "50px 0",
    fontFamily: "'Lora', serif",
    background: "linear-gradient(135deg, #fff 30%, #e8f8f5 70%)",
    position: "relative",
    overflow: "hidden",
  },
  blogTitle: {
    fontSize: "40px",
    fontWeight: "bold",
    color: "#0A3D62",
    textAlign: "left",
    marginBottom: "15px",
    fontFamily: "'Playfair Display', serif",
    borderLeft: "6px solid #F76C0D",
    paddingLeft: "12px",
  },
  blogDescription: {
    fontSize: "18px",
    color: "#555",
    textAlign: "left",
    maxWidth: "600px",
    marginBottom: "40px",
    lineHeight: "1.6",
  },
  heroSection: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    marginBottom: "50px",
    backgroundColor: "#E8F8F5",
    padding: "25px",
    borderRadius: "20px",
    transition: "0.3s",
  },
  heroImage: {
    width: "50%",
    height: "350px",
    objectFit: "cover",
    borderRadius: "15px",
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
    transition: "0.3s",
  },
  heroContent: {
    width: "50%",
  },
  heroTitle: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#0A3D62",
    marginBottom: "10px",
    fontFamily: "'Playfair Display', serif",
  },
  heroDate: {
    fontSize: "15px",
    color: "#888",
    marginBottom: "10px",
  },
  heroDescription: {
    fontSize: "18px",
    color: "#444",
    marginBottom: "20px",
    lineHeight: "1.6",
  },
  heroButton: {
    backgroundColor: "#F76C0D",
    color: "white",
    padding: "14px 28px",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.3s",
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
  },
  blogGrid: {
    display: "flex",
    gap: "20px",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  blogCard: {
    width: "32%",
    background: "white",
    boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.1)",
    borderRadius: "15px",
    overflow: "hidden",
    transition: "0.3s",
  },
  blogImage: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    transition: "0.3s",
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",
  },
  blogContent: {
    padding: "20px",
  },
  blogPostTitle: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#0A3D62",
    marginBottom: "5px",
    fontFamily: "'Playfair Display', serif",
  },
  blogDate: {
    fontSize: "14px",
    color: "#777",
    marginBottom: "10px",
  },
  blogText: {
    fontSize: "16px",
    color: "#444",
    lineHeight: "1.5",
  },
  galleryContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    marginTop: "30px",
  },
  galleryItem: {
    position: "relative",
    overflow: "hidden",
    borderRadius: "10px",
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)",
  },
  galleryImage: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    transition: "transform 0.3s",
    borderRadius: "10px",
  },
  galleryCaption: {
    textAlign: "center",
    fontSize: "16px",
    color: "#444",
    marginTop: "10px",
  },
};

export default Blog;