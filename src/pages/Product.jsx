import React, { useState } from "react";
import { Footer, Navbar } from "../components";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation (check if the fields are not empty)
    if (name && email && message) {
      // Trigger the modal by calling showThanksPopup() after successful submission
      window.showThanksPopup();  // This will trigger the modal popup in the index.html file

      // Clear the form fields after submission (optional)
      setName("");
      setEmail("");
      setMessage("");
    } else {
      // Handle form validation error (optional)
      alert("Please fill in all fields.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1
          className="text-center"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 500,
            color: "black",
          }}
        >
          Contact Us
        </h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="form my-3">
                <label
                  htmlFor="Name"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 500,
                    color: "black",
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form my-3">
                <label
                  htmlFor="Email"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 500,
                    color: "black",
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form my-3">
                <label
                  htmlFor="Message"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 500,
                    color: "black",
                  }}
                >
                  Message
                </label>
                <textarea
                  rows={5}
                  className="form-control"
                  id="Message"
                  placeholder="Enter your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div className="text-center">
                <button
                  className="my-2 px-4 mx-auto btn btn-dark"
                  type="submit"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 500,
                    color: "black",
                  }}
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
