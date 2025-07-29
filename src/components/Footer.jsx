import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="text-center bg-dark text-white py-3" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, color: "#2a2a2a" }}>
        <div className="container">
          <div className="row">
            {/* Brand Info */}
            <div className="col-md-6">
              <h5 style={{ fontFamily: "'Bodoni Moda', serif", fontWeight: 700, fontSize: "1.2rem" }}>
                Velven
              </h5>
              <p style={{ fontFamily: "'Bodoni Moda', serif", fontWeight: 400, fontSize: "0.9rem" }}>
                Velven offers luxury clothes that blend elegance with comfort. Our exquisite collections are designed for those who appreciate premium fashion.
              </p>
            </div>

            {/* Contact Info */}
            <div className="col-md-6">
              <h5 style={{ fontFamily: "'Bodoni Moda', serif", fontWeight: 700, fontSize: "1.2rem" }}>
                Contact Us
              </h5>
              <p style={{ fontFamily: "'Bodoni Moda', serif", fontWeight: 400, fontSize: "0.9rem" }}>
                <strong>Phone:</strong> <a href="tel:+918847463046" className="text-white" style={{ textDecoration: 'none' }}>+91 12345678</a>
              </p>
              <p style={{ fontFamily: "'Bodoni Moda', serif", fontWeight: 400, fontSize: "0.9rem" }}>
                <strong>Email:</strong> <a href="mailto:harshkumar040304@gmail.com" className="text-white" style={{ textDecoration: 'none' }}>harshkumar040304@gmail.com</a>
              </p>
            </div>
          </div>

          {/* Footer Credit */}
          <div className="d-flex align-items-center justify-content-center pt-3">
            <p className="mb-0" style={{
              fontFamily: "'Bodoni Moda', serif",
              fontWeight: 600,
              color: "#f1f1f1",
              letterSpacing: "0.5px",
              lineHeight: "1.4"
            }}>
              Made by <span style={{ fontWeight: 700 }}>Harsh Kumar</span>
            </p>
          </div>

          {/* Social Media */}
          <div className="d-flex justify-content-center pt-2">
            <a className="text-white fs-4 mx-2" href="https://github.com/Harshkumar040" target="_blank" rel="noreferrer">
              <i className="fa fa-github"></i>
            </a>
            {/* LinkedIn Icon */}
            <a className="text-white fs-4 mx-2" href="https://www.linkedin.com/in/harsh-kumar-a92265252/" target="_blank" rel="noreferrer">
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
