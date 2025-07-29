
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate(); // hook for navigation

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Validate the form (simple validation check)
  const validateForm = () => {
    const { email, password } = formData;
    if (email && password) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here (you may want to handle authentication)

    // For demonstration, assume login is successful, and redirect to the home page
    navigate("/"); // Redirect to the home page
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="my-3">
                <label htmlFor="floatingInput">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={validateForm}
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
                  onBlur={validateForm}
                  placeholder="Password"
                />
              </div>
              <div className="my-3">
                <p>
                  New Here?{" "}
                  <Link to="/register" className="text-decoration-underline text-info">
                    Register
                  </Link>
                </p>
              </div>
              <div className="text-center">
                <button className="my-2 mx-auto btn btn-dark" type="submit" disabled={!isFormValid}>
                  Login
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

export default Login;
