import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    validateForm();
  };

  // Validate the form
  const validateForm = () => {
    const { name, email, password } = formData;
    setIsFormValid(name && email && password);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Registered:", formData);
    setIsRegistered(true); // Show thank-you message
    setTimeout(() => navigate("/"), 5000); // Redirect to home page after 5 seconds
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        {!isRegistered ? (
          <>
            <h1 className="text-center">Register</h1>
            <hr />
            <div className="row my-4 h-100">
              <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                <form onSubmit={handleSubmit}>
                  <div className="my-3">
                    <label htmlFor="floatingName">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="floatingName"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter Your Name"
                    />
                  </div>
                  <div className="my-3">
                    <label htmlFor="floatingEmail">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="floatingEmail"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                    />
                  </div>
                  <div className="my-3">
                    <label htmlFor="floatingPassword">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="floatingPassword"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Password"
                    />
                  </div>
                  <div className="my-3">
                    <p>
                      Already have an account?{" "}
                      <Link to="/login" className="text-decoration-underline text-info">
                        Login
                      </Link>
                    </p>
                  </div>
                  <div className="text-center">
                    <button className="my-2 mx-auto btn btn-dark" type="submit" disabled={!isFormValid}>
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </>
        ) : (
          <div className="container my-5 py-5 text-center">
            <div
              className="p-4"
              style={{
                backgroundColor: "#343a40",
                color: "white",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            >
              <h1>Thank You for Registering!</h1>
              <p className="lead">You have successfully registered. Welcome to our community!</p>
              <p>We’re excited to have you onboard. Feel free to explore and enjoy all our features.</p>
              <button
                className="btn btn-light mt-4"
                onClick={() => navigate("/")}
              >
                Go to Home Page
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Register;
