import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Link } from 'react-router-dom';   
import toast from 'react-hot-toast';

const Products = () => {
  const productData = [
    {
      id: 1,
      title: 'Men\'s T-Shirt',
      price: 3100,
      description: 'A stylish and comfortable t-shirt for men.',
     image: 'https://i.pinimg.com/236x/71/c9/91/71c9919d476d0c0e406d3617069d529e.jpg',
      category: 'men',
    },
    {
      id: 2,
      title: 'Women\'s Dress',
      price: 7000,
      description: 'A beautiful and elegant dress for women.',
      image:"https://i.pinimg.com/236x/c5/8f/54/c58f54f83ffda7b888fed8c7bb0caa9b.jpg",
      category: 'women',
    },
    {
      id: 3,
      title: 'Necklace',
      price: 71000,
      description: 'A stunning necklace for any occasion.',
      image: 'https://i.pinimg.com/236x/ea/44/cc/ea44ccfec05a9d794b1df24c0dbf7da9.jpg',
      category: 'jewelry',
    },
    {
      id: 4,
      title: 'Men\'s Jeans',
      price: 3500,
      description: 'Durable and fashionable jeans for men.',
      image: 'https://i.pinimg.com/236x/67/97/a1/6797a1cd034caec2da437db5defe4e0b.jpg',
      category: 'men',
    },
    {
      id: 5,
      title: 'Women\'s Blouse',
      price: 4100,
      description: 'A classic and versatile blouse for women.',
      image: 'https://i.pinimg.com/236x/95/18/e9/9518e9e714d59a624bd988a173c56f52.jpg',
      category: 'women',
    },
    {
      id: 6,
      title: 'Bracelet',
      price: 11000,
      description: 'A delicate and elegant bracelet.',
      image: 'https://i.pinimg.com/236x/2c/83/2c/2c832c448f1d162be1c43e407d93fb41.jpg',
      category: 'jewelry',
    },
    {
      id: 7,
      title: 'Men\'s Shirt',
      price: 7100,
      description: 'A formal shirt for men.',
      image: 'https://i.pinimg.com/736x/6a/bd/07/6abd0766523303ffe09d06ee95be0c53.jpg',
      category: 'men',
    },
    {
      id: 8,
      title: 'Women\'s Skirt',
      price: 8100,
      description: 'A stylish and feminine skirt.',
      image: 'https://i.pinimg.com/236x/77/03/d7/7703d7a4ade88e6562f67bbaea213f61.jpg',
      category: 'women',
    },
    {
      id: 9,
      title: 'Earrings',
      price: 41000,
      description: 'A pair of elegant earrings.',
      image: 'https://i.pinimg.com/236x/81/08/ec/8108ec5c15f67d1b6fb5de15a6dba25d.jpg',
      category: 'jewelry',
    },
    {
      id: 10,
      title: 'Men\'s Hoodie',
      price: 7000,
      description: 'A cozy and comfortable hoodie for men.',
      image: 'https://i.pinimg.com/236x/48/c9/40/48c94079d6eca2488f1b7cee8446a518.jpg',
      category: 'men',
    },
    {
      id: 11,
      title: 'Women\'s Sweater',
      price: 9000,
      description: 'A warm and stylish sweater for women.',
      image: 'https://i.pinimg.com/236x/ae/b6/88/aeb68838622c8aa37fc3686f399f72be.jpg',
      category: 'women',
    },
    {
      id: 12,
      title: 'Ring',
      price: 41000,
      description: 'A beautiful and timeless ring.',
      image: 'https://i.pinimg.com/474x/3e/a0/b0/3ea0b063fda9a9005c1160b041c60663.jpg',
      category: 'jewelry',
    },
    {
      id: 13,
      title: 'Men\'s Jacket',
      price: 11000,
      description: 'A stylish and functional jacket for men.',
      image: 'https://i.pinimg.com/236x/5d/ff/81/5dff810b67a560d48a29cc6c27c13e0c.jpg',
      category: 'men',
    },
    {
      id: 14,
      title: 'Women\'s Coat',
      price: 21000,
      description: 'A warm and elegant coat for women.',
      image: 'https://i.pinimg.com/236x/36/47/84/36478417dff491f7bec33581eb21cba1.jpg',
      category: 'women',
    },
    {
      id: 15,
      title: 'Pendant',
      price: 51000,
      description: 'A delicate and meaningful pendant.',
      image: 'https://i.pinimg.com/736x/1e/2e/ef/1e2eef8f96b755253888133f0874cc07.jpg',
      category: 'jewelry',
    },
    {
      id: 16,
      title: 'Men\'s Shoes',
      price: 7000,
      description: 'Comfortable and stylish shoes for men.',
      image: 'https://i.pinimg.com/236x/49/e4/30/49e4303f27f639206afbd96e57999e96.jpg',
      category: 'men',
    },
    {
      id: 17,
      title: 'Women\'s Boots',
      price: 8100,
      description: 'Warm and stylish boots for women.',
      image: 'https://i.pinimg.com/236x/29/de/dc/29dedc270efd4bbc87b3f92eecff28ca.jpg',
      category: 'women',
    },
    {
      id: 18,
      title: 'Anklet',
      price: 31000,
      description: 'A dainty and feminine anklet.',
      image: 'https://i.pinimg.com/236x/0b/8e/3c/0b8e3c44a70b7b9ef4a806dcbb210d2d.jpg',
      category: 'jewelry',
    },
    {
      id: 19,
      title: 'Men\'s Belt',
      price: 1500,
      description: 'A stylish and functional belt for men.',
      image: 'https://i.pinimg.com/236x/b8/df/9d/b8df9d2e1b11538613214a8d4b4b9b70.jpg',
      category: 'men',
    },
    {
      id: 20,
      title: 'Women\'s Bag',
      price: 11000,
      description: 'A stylish and practical bag for women.',
      image: 'https://i.pinimg.com/236x/0d/5c/92/0d5c925c9acbd41fdcd0e842718016b8.jpg',
      category: 'women',
    },
  ];
  const [data, setData] = useState(productData);
  const [filter, setFilter] = useState(productData);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  const filterProduct = (category) => {
    setSelectedCategory(category);
    const updatedList = data.filter((item) => item.category === category);
    setFilter(updatedList);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons text-center py-5" style={{ marginBottom: '20px' }}>
          {['all', 'men', 'women', 'jewelry'].map((category) => (
            <button
              key={category}
              className={`btn btn-outline-dark btn-lg m-2 ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => {
                if (category === 'all') setFilter(data);
                else filterProduct(category);
                setSelectedCategory(category);
              }}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 300,
                color: 'black',
                backgroundColor: 'white',
                cursor: 'pointer',
              }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="row justify-content-center">
          {filter.map((product) => (
            <div key={product.id} className="col-md-3 col-sm-4 col-12 mb-4">
              <div className="card text-center h-100 border-0 shadow-sm" style={{ minHeight: '100%' }}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="card-img-top p-3"
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                    maxHeight: '250px',
                    cursor: 'pointer',
                  }}
                  onClick={() => setSelectedProduct(product)}
                />
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 300,
                      color: 'black',
                    }}
                  >
                    {product.title}
                  </h5>
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 300,
                      color: 'black',
                    }}
                  >
                    {product.description}
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li
                    className="list-group-item lead"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 300,
                      color: 'black',
                    }}
                  >
                    ₹ {product.price}
                  </li>
                </ul>
                <div className="card-body">
                  <Link
                    to={`/product/${product.id}`}
                    className="btn"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 300,
                      color: 'white',
                      backgroundColor: 'black',
                    }}
                  >
                    Buy Now
                  </Link>
                  <button
                    className="btn"
                    onClick={() => {
                      toast.success('Added to cart');
                      addProduct(product);
                    }}
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 300,
                      color: 'white',
                      backgroundColor: 'black',
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="container my-3 py-3">
      <div className="row">
        <div className="col-12 text-center">
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 300,
              color: 'black',
            }}
          >
            Latest Products
          </h2>
          <hr />
        </div>
      </div>
      {loading ? <Skeleton height={330} /> : <ShowProducts />}

      {/* Modal for Product Details */}
      {selectedProduct && (
        <div
          className="modal show"
          style={{
            display: 'block',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1000,
            padding: '50px 0',
          }}
          onClick={closeModal}
        >
          <div
            className="modal-dialog"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '400px', // Reduced width for a smaller modal
              margin: '0 auto',
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '10px',
            }}
          >
            <div className="modal-header" style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h5>{selectedProduct.title}</h5>
              <button
                type="button"
                className="close"
                onClick={closeModal}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                }}
              >
                &times;
              </button>
            </div>
            <div className="modal-body" style={{ textAlign: 'center' }}>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                style={{
                  width: '100%', // Adjust width to make the image smaller
                  height: 'auto',
                  objectFit: 'contain',
                  maxWidth: '300px', // Limit the max width of the image
                  marginBottom: '20px',
                }}
              />
              <p>{selectedProduct.description}</p>
              <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>₹ {selectedProduct.price}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
