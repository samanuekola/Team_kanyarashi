import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items from the backend
    axios.get('http://localhost:3000/cart')
      .then(response => {
        setCartItems(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the cart items!', error);
      });
  }, []);

  const removeFromCart = (id) => {
    // Remove the item from the backend
    axios.delete(`http://localhost:3000/cart/${id}`)
      .then(response => {
        console.log('Item removed from backend:', response.data);
        setCartItems(cartItems.filter(item => item._id !== id));
      })
      .catch(error => {
        console.error('There was an error removing the item from the backend!', error);
      });
  };

  return (
    <section className="container py-5 card-cart">
      <h2 className="text-center mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <div className="text-center">
          <p>Your cart is empty.</p>
          <Link to="/projects" className="btn btn-primary">Continue Shopping</Link>
        </div>
      ) : (
        <>
          <div className="row gy-4">
            {cartItems.map(item => (
              <div key={item._id} className="col-12 col-md-6 col-lg-4 cart-size">
                <div className="card">
                  <img src={item.imageUrl} className="card-img-top" alt={item.name} />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.content}</p>
                    <button className="btn btn-danger" onClick={() => removeFromCart(item._id)}>Remove from cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-center mt-4">
            <Link to="/captcha" className="btn btn-success">Proceed to Payment</Link>
          </div>
        </>
      )}
    </section>
  );
}

export default Cart;
