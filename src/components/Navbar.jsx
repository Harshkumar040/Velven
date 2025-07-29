import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const state = useSelector(state => state.handleCart);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark py-3 sticky-top" style={{ backgroundColor: '#000000' }}>
            <div className="container">
                <NavLink 
                    className="navbar-brand fw-bold fs-4 px-2" 
                    to="/" 
                    style={{ 
                        fontFamily: "'Merriweather', serif", 
                        fontWeight: 700, 
                        fontSize: "1.8rem", 
                        color: "#ffffff", 
                        letterSpacing: "0.02em"
                    }}
                > 
                    Velven
                </NavLink>

                <button 
                    className="navbar-toggler mx-2" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}>
                            <NavLink 
                                className="nav-link text-light px-3 py-2" 
                                to="/" 
                                style={{ fontSize: "1rem", letterSpacing: "0.02em" }}
                                activeClassName="active-link"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}>
                            <NavLink 
                                className="nav-link text-light px-3 py-2" 
                                to="/product" 
                                style={{ fontSize: "1rem", letterSpacing: "0.02em" }}
                                activeClassName="active-link"
                            >
                                Products
                            </NavLink>
                        </li>
                        <li className="nav-item" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}>
                            <NavLink 
                                className="nav-link text-light px-3 py-2" 
                                to="/about" 
                                style={{ fontSize: "1rem", letterSpacing: "0.02em" }}
                                activeClassName="active-link"
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}>
                            <NavLink 
                                className="nav-link text-light px-3 py-2" 
                                to="/contact" 
                                style={{ fontSize: "1rem", letterSpacing: "0.02em" }}
                                activeClassName="active-link"
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                    <div className="buttons text-center">
                        <NavLink 
                            to="/login" 
                            className="btn btn-outline-light m-2" 
                            style={{ fontSize: "1rem", letterSpacing: "0.1em" }}
                        >
                            <i className="fa fa-sign-in-alt mr-1"></i> Login
                        </NavLink>
                        <NavLink 
                            to="/register" 
                            className="btn btn-outline-light m-2" 
                            style={{ fontSize: "1rem", letterSpacing: "0.1em" }}
                        >
                            <i className="fa fa-user-plus mr-1"></i> Register
                        </NavLink>
                        <NavLink 
                            to="/cart" 
                            className="btn btn-outline-light m-2" 
                            style={{ fontSize: "1rem", letterSpacing: "0.1em" }}
                        >
                            <i className="fa fa-cart-shopping mr-1"></i> Cart ({state.length})
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
