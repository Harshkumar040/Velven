import React from "react"; 
import { Footer, Navbar } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { Link } from "react-router-dom";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, color: "#2a2a2a" }}>Your Cart is Empty</h4>
            <Link to="/" className="btn btn-outline-dark mx-4">
              <i className="fa fa-arrow-left"></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const addItem = (product) => {
    dispatch(addCart(product));
  };

  const removeItem = (product) => {
    dispatch(delCart(product));
  };

  const ShowCart = () => {
    let subtotal = 0;
    let shipping = 310; // Shipping charge updated to 200 RS
    let totalItems = 0;
    state.map((item) => {
      subtotal += item.price * item.qty;
    });

    state.map((item) => {
      totalItems += item.qty;
    });

    return (
      <>
        <section className="h-100 gradient-custom">
          <div className="container py-5">
            <div className="row d-flex justify-content-center my-4">
              <div className="col-md-8">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, color: "#2a2a2a" }}>Item List</h5>
                  </div>
                  <div className="card-body">
                    {state.map((item) => (
                      <div key={item.id}>
                        <div className="row d-flex align-items-center">
                          <div className="col-lg-3 col-md-12">
                            <div className="bg-image rounded" data-mdb-ripple-color="light">
                              <img src={item.image} alt={item.title} width={100} height={75} />
                            </div>
                          </div>
                          <div className="col-lg-5 col-md-6">
                            <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, color: "#2a2a2a" }}>
                              <strong>{item.title}</strong>
                            </p>
                          </div>
                          <div className="col-lg-4 col-md-6">
                            <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                              <button className="btn px-3" onClick={() => removeItem(item)}>
                                <i className="fas fa-minus"></i>
                              </button>
                              <p className="mx-5">{item.qty}</p>
                              <button className="btn px-3" onClick={() => addItem(item)}>
                                <i className="fas fa-plus"></i>
                              </button>
                            </div>
                            <p className="text-start text-md-center" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, color: "#2a2a2a" }}>
                              <strong>{item.qty} x RS {item.price}</strong>
                            </p>
                          </div>
                        </div>
                        <hr className="my-4" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-header py-3 bg-light">
                    <h5 className="mb-0" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, color: "#2a2a2a" }}>Order Summary</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, color: "#2a2a2a" }}>
                        Products ({totalItems})
                        <span>Rs {Math.round(subtotal)}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center px-0" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, color: "#2a2a2a" }}>
                        Shipping
                        <span>Rs {shipping}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, color: "#2a2a2a" }}>
                          <strong >Total amount</strong>
                        </div>
                        <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, color: "#2a2a2a" }}>
                          <strong >Rs {Math.round(subtotal + shipping)}</strong>
                        </span>
                      </li>
                    </ul>
                    <Link to="/checkout" className="btn btn-dark btn-lg btn-block" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, color: "white" }}>
                      Go to checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, color: "#2a2a2a" }}>Cart</h1>
        <hr />
        {state.length > 0 ? <ShowCart /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
