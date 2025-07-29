import React, { useState } from 'react';
import { Footer, Navbar } from "../components";

const AboutPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const productDetails = {
    mensClothing: {
      title: "Men's Clothing",
      img: "https://images.pexels.com/photos/3054982/pexels-photo-3054982.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Discover timeless style with our men's clothing collection. From tailored suits for formal events to comfortable, everyday wear, each piece is crafted with attention to detail. Elevate your wardrobe with luxury that never goes out of fashion."
    },
    womensClothing: {
      title: "Women's Clothing",
      img: "https://images.pexels.com/photos/29249091/pexels-photo-29249091/free-photo-of-chic-woman-in-white-fur-coat-on-city-street.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Indulge in the elegance of our women's clothing collection. Designed for the modern woman who appreciates both luxury and comfort, our pieces range from chic dresses to sophisticated outerwear."
    },
    jewelry: {
      title: "Jewelry",
      img: "https://images.pexels.com/photos/11826231/pexels-photo-11826231.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Our jewelry collection is for those who seek to add a touch of opulence to their look. From diamond necklaces to delicate bracelets, each piece is crafted with precision and care."
    }
  };

  const handleImageClick = (category) => {
    setModalContent(productDetails[category]);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent(null);
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, color: "#2a2a2a" }}>Velven</h1>
        <hr />
        <p className="lead text-center" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, color: "#2a2a2a" }}>
          Welcome to Velven, where luxury meets sophistication.<br></br> <br></br> Discover our premium collections, and elevate your style with timeless elegance.
<br></br>
          At Luxious, we believe that fashion is more than just clothing—it’s an experience, a statement, and a way of life. Our brand, Velven, is dedicated to redefining elegance through a carefully curated selection of premium, luxurious garments. Every piece in our collection is a testament to meticulous craftsmanship, blending timeless styles with modern sophistication to create an unforgettable aesthetic.
          <br /><br />
          Our Mission: Our mission at Velven is to offer a luxurious shopping experience that transcends trends, connecting each customer with garments that reflect their unique sense of style and sophistication. We are driven by a commitment to excellence, bringing you designs that are as exclusive as they are exceptional.
         <br /><br />
          The Velven Difference: Our collections celebrate the art of refinement. From the sourcing of premium materials to the precision in tailoring, Velven stands as a hallmark of quality and luxury. Each season, we introduce new pieces that embody innovation, elegance, and a dedication to sustainable, ethical craftsmanship.
          <br /><br />
           Join the Velven Legacy: We invite you to experience the allure of true luxury. With Velven, your wardrobe becomes a sanctuary of elegance, a reflection of individuality, and a tribute to the art of timeless style.
      </p>


        <h2 className="text-center py-4" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, color: "#2a2a2a" }}>Our Products</h2>
        <div className="row">
          {/* Men's Clothing Card */}
          <div className="col-md-4 col-sm-6 mb-3 d-flex justify-content-center">
            <div className="card h-100 text-center" style={{ width: '18rem' }}>
              <img
                className="card-img-top img-fluid"
                src="https://images.pexels.com/photos/3054982/pexels-photo-3054982.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Men's Clothing"
                style={{ height: '250px', objectFit: 'cover' }}
                onClick={() => handleImageClick('mensClothing')}  // Trigger the modal on click
              />
              <div className="card-body">
                <h5 className="card-title" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, color: "#2a2a2a" }}>Men's Clothing</h5>
              </div>
            </div>
          </div>

          {/* Women's Clothing Card */}
          <div className="col-md-4 col-sm-6 mb-3 d-flex justify-content-center">
            <div className="card h-100 text-center" style={{ width: '18rem' }}>
              <img
                className="card-img-top img-fluid"
                src="https://images.pexels.com/photos/29249091/pexels-photo-29249091/free-photo-of-chic-woman-in-white-fur-coat-on-city-street.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Women's Clothing"
                style={{ height: '250px', objectFit: 'cover' }}
                onClick={() => handleImageClick('womensClothing')}  // Trigger the modal on click
              />
              <div className="card-body">
                <h5 className="card-title" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, color: "#2a2a2a" }}>Women's Clothing</h5>
              </div>
            </div>
          </div>

          {/* Jewelry Card */}
          <div className="col-md-4 col-sm-6 mb-3 d-flex justify-content-center">
            <div className="card h-100 text-center" style={{ width: '18rem' }}>
              <img
                className="card-img-top img-fluid"
                src="https://images.pexels.com/photos/11826231/pexels-photo-11826231.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Jewelry"
                style={{ height: '250px', objectFit: 'cover' }}
                onClick={() => handleImageClick('jewelry')}  // Trigger the modal on click
              />
              <div className="card-body">
                <h5 className="card-title" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, color: "#2a2a2a" }}>Jewelry</h5>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Section - Displaying content for clicked image */}
        {showModal && modalContent && (
          <div className="modal" style={{ display: 'block', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', paddingTop: '50px' }}>
            <div className="modal-content" style={{ margin: 'auto', backgroundColor: 'white', padding: '20px', width: '40%', borderRadius: '8px' }}>
              <h2>{modalContent.title}</h2>
              <img src={modalContent.img} alt={modalContent.title} style={{ width: '80%', borderRadius: '8px', marginBottom: '20px' }} />
              <p>{modalContent.description}</p>
              <button onClick={closeModal} style={{ backgroundColor: '#2a2a2a', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>Close</button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
