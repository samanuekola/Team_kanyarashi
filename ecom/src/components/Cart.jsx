import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom';
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
    <div className="container">
      <h2>Cart</h2>
      {cartItems.map(item => (
        <div key={item._id} className="row py-2 align-items-center">
          <div className="col-12 col-md-6">
            <img src={item.imageUrl} className="img-fluid rounded" alt={item.name} />
          </div>
          <div className="col-12 col-md-6">
            <h3>{item.name}</h3>
            <p>{item.content}</p>
            <button className='bg-danger' onClick={() => removeFromCart(item._id)}>Remove from cart</button>
          </div>
        </div>
      ))}
      <Link to="/captcha" class="nav-link p-2  hover-underline-animation nav-font">Proceed to payment</Link>
    </div>
  );
}

export default Cart;
