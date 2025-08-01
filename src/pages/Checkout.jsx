
import React, { useState } from "react";
import { Footer, Navbar } from "../components";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Checkout = () => {
  const state = useSelector((state) => state.handleCart);
  const navigate = useNavigate();
  const [isCheckoutComplete, setIsCheckoutComplete] = useState(false);

  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4
              className="p-3 display-5"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 500,
                color: "#2a2a2a",
              }}
            >
              No item in Cart
            </h4>
            <Link to="/" className="btn btn-outline-dark mx-4">
              <i className="fa fa-arrow-left"></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const handleCheckout = (event) => {
    event.preventDefault();
    setIsCheckoutComplete(true); // Show thank-you message
  };

  const ShowCheckout = () => {
    let subtotal = 0;
    let shipping = 200.0;
    let totalItems = 0;
    state.forEach((item) => {
      subtotal += item.price * item.qty;
      totalItems += item.qty;
    });

    return (
      <div className="container py-5">
        <div className="row my-4">
          <div className="col-md-5 col-lg-4 order-md-last">
            <div className="card mb-4" style={{ backgroundColor: "#f9f9f9" }}>
              <div
                className="card-header py-3"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 500,
                  color: "#2a2a2a",
                  backgroundColor: "#ffffff",
                }}
              >
                <h5 className="mb-0">Order Summary</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li
                    className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 500,
                      color: "#2a2a2a",
                    }}
                  >
                    Products ({totalItems}) <span>₹{Math.round(subtotal)}</span>
                  </li>
                  <li
                    className="list-group-item d-flex justify-content-between align-items-center px-0"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 500,
                      color: "#2a2a2a",
                    }}
                  >
                    Shipping <span>₹{shipping}</span>
                  </li>
                  <li
                    className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 500,
                      color: "#2a2a2a",
                    }}
                  >
                    <div>
                      <strong>Total amount</strong>
                    </div>
                    <span>
                      <strong>₹{Math.round(subtotal + shipping)}</strong>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-7 col-lg-8">
            <div className="card mb-4" style={{ backgroundColor: "#f9f9f9" }}>
              <div
                className="card-header py-3"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 500,
                  color: "#2a2a2a",
                  backgroundColor: "#ffffff",
                }}
              >
                <h4 className="mb-0">Billing Address</h4>
              </div>
              <div className="card-body">
                <form className="needs-validation" onSubmit={handleCheckout} noValidate>
                  <div className="row g-3">
                    <div className="col-sm-6 my-1">
                      <label
                        htmlFor="firstName"
                        className="form-label"
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontWeight: 500,
                          color: "#2a2a2a",
                        }}
                      >
                        First name
                      </label>
                      <input type="text" className="form-control" id="firstName" required />
                      <div
                        className="invalid-feedback"
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontWeight: 500,
                          color: "#2a2a2a",
                        }}
                      >
                        Valid first name is required.
                      </div>
                    </div>
                    <div className="col-sm-6 my-1">
                      <label
                        htmlFor="lastName"
                        className="form-label"
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontWeight: 500,
                          color: "#2a2a2a",
                        }}
                      >
                        Last name
                      </label>
                      <input type="text" className="form-control" id="lastName" required />
                      <div
                        className="invalid-feedback"
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontWeight: 500,
                          color: "#2a2a2a",
                        }}
                      >
                        Valid last name is required.
                      </div>
                    </div>
                    <div className="col-12 my-1">
                      <label
                        htmlFor="email"
                        className="form-label"
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontWeight: 500,
                          color: "#2a2a2a",
                        }}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="you@example.com"
                        required
                      />
                      <div
                        className="invalid-feedback"
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontWeight: 500,
                          color: "#2a2a2a",
                        }}
                      >
                        Please enter a valid email address.
                      </div>
                    </div>
                    <div className="col-12 my-1">
                      <label
                        htmlFor="address"
                        className="form-label"
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontWeight: 500,
                          color: "#2a2a2a",
                        }}
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder="1234 Main St"
                        required
                      />
                      <div
                        className="invalid-feedback"
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontWeight: 500,
                          color: "#2a2a2a",
                        }}
                      >
                        Please enter your shipping address.
                      </div>
                    </div>
                    <div
                      className="col-md-5 my-1"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 500,
                        color: "#2a2a2a",
                      }}
                    >
                      <label htmlFor="country" className="form-label">
                        Country
                      </label>
                      <select className="form-select" id="country" required>
                        <option value="">Choose...</option>
                        <option>India</option>
                      </select>
                      <div className="invalid-feedback">Please select a valid country.</div>
                    </div>
                    <div
                      className="col-md-3 my-1"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 500,
                        color: "#2a2a2a",
                      }}
                    >
                      <label htmlFor="zip" className="form-label">
                        Zip
                      </label>
                      <input type="text" className="form-control" id="zip" required />
                      <div className="invalid-feedback">Zip code required.</div>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <h4
                    className="mb-3"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 500,
                      color: "#2a2a2a",
                    }}
                  >
                    Payment
                  </h4>
                  <div className="row gy-3">
                    <div
                      className="col-md-6"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 500,
                        color: "#2a2a2a",
                      }}
                      >
                      <label htmlFor="cc-name" className="form-label">
                        Name on card
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="cc-name"
                        required
                      />
                      <small className="text-muted">
                        Full name as displayed on card
                      </small>
                      <div className="invalid-feedback">
                        Name on card is required
                      </div>
                    </div>
                    <div
                      className="col-md-6"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 500,
                        color: "#2a2a2a",
                      }}
                    >
                      <label htmlFor="cc-number" className="form-label">
                        Credit card number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="cc-number"
                        required
                      />
                      <div className="invalid-feedback">
                        Credit card number is required
                      </div>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <button
                    className="w-100 btn"
                    type="submit"
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 500,
                    }}
                  >
                    Continue to checkout


                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
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
            color: "#2a2a2a",
          }}
        >
          Checkout
        </h1>
        <hr />
        {isCheckoutComplete ? (
          <div className="text-center">
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 500,
                color: "black",
              }}
            >
              Thank you for your purchase!
            </h3>
            <button
              className="btn btn-primary mt-3"
              onClick={() => navigate("/")}
              style={{
                backgroundColor: "black",
                color: "white",
                fontFamily: "'Playfair Display', serif",
                fontWeight: 500,
              }}
            >
              Go to Home
            </button>
          </div>
        ) : state.length ? (
          <ShowCheckout />
        ) : (
          <EmptyCart />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
