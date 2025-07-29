
import React from "react";

const Home = () => {
  return (
    <>
      <div 
        className="hero border-1 pb-3" 
        style={{ 
          backgroundColor: "#f4f4f4",
          padding: "3rem 0",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <div className="card bg-dark text-white border-0 mx-3" style={{ 
          maxWidth: "1200px", 
          position: "relative",
          overflow: "hidden",
          borderRadius: "10px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)"
        }}>
          <img
            className="card-img img-fluid"
            src="./assets/main2.png.jpg"
            alt="Card"
            style={{
              filter: "brightness(0.7)", // Brighter than before
              objectFit: "cover",
              width: "100%",
              height: "auto",
              maxHeight: "500px"
            }}
          />
          <div 
            className="card-img-overlay d-flex align-items-center"
            style={{ 
              background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8))", // Gradient overlay
              color: "#ffffff"
            }}
          >
            <div className="container text-center" style={{ padding: "0 2rem" }}>
              <h5 
                className="card-title fs-1 fw-lighter" 
                style={{ 
                  fontFamily: "'Playfair Display', serif", 
                  fontWeight: 600, 
                  color: "#ffffff",
                  fontSize: "2.5rem",
                  letterSpacing: "0.05em",
                  textShadow: "3px 3px 6px rgba(0, 0, 0, 0.9)" // Enhanced shadow for clarity
                }}
              >
                Exquisite New Season Arrivals
              </h5>
              <p 
                className="card-text fs-5 d-none d-sm-block mt-3" 
                style={{ 
                  fontFamily: "'Playfair Display', serif", 
                  fontWeight: 300, 
                  color: "#f5f5f5",
                  fontSize: "1.2rem",
                  lineHeight: "1.8",
                  maxWidth: "700px",
                  margin: "0 auto",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)"
                }}
              >
                Discover Velven's curated selection of this season's finest. Each piece crafted to elevate elegance and redefine luxury. Indulge in the art of refinement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
