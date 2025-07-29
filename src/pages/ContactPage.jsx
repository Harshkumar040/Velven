import React, { useState } from "react";
import { Footer, Navbar } from "../components";
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false); // Popup visibility state

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate form
  const validateForm = () => {
    const { name, email, message } = formData;
    setIsFormValid(
      name.trim() !== "" && email.trim() !== "" && message.trim() !== ""
    );
  };


  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setIsFormValid(false);
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      // Show popup
      setIsPopupVisible(true);
    }
  };

  // Close modal and reset form
  const closeModal = () => {
    setIsPopupVisible(false);
    resetForm();
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, color: "black" }}>
          Contact Us
        </h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="form my-3">
                <label htmlFor="name" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, color: "black" }}>Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={validateForm}
                  placeholder="Enter your name"
                />
              </div>
              <div className="form my-3">
                <label htmlFor="email" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, color: "black" }}>Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={validateForm}
                  placeholder="name@example.com"
                />
              </div>
              <div className="form my-3">
                <label htmlFor="message" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, color: "black" }}>Message</label>
                <textarea
                  rows={5}
                  className="form-control"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={validateForm}
                  placeholder="Enter your message"
                />
              </div>
              <div className="text-center">
                <button
                  className="my-2 px-4 mx-auto btn btn-dark"
                  type="submit"
                  disabled={!isFormValid}
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, color: "pitch black" }}
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Modal controlled with React state */}
      {isPopupVisible && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Thank You!</h5>
                <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                Thanks for submitting your message!
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-dark" onClick={closeModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default ContactPage;



