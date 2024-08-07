import React, { useState } from 'react';
import axios from 'axios';

const Productsdetailssection = ({ items }) => {
  const [carts, setCart] = useState([]);

  const addtocart = (id, title, content, image) => {
    const cartItem = { id, title, content, image };
    const itemExists = carts.some(item => item.id === id);

    if (itemExists) {
      alert("Already in cart");
    } else {
      setCart([...carts, cartItem]);

      // Send the item data to the backend
      axios.post('http://localhost:3000/cart', cartItem)
        .then(response => {
          console.log('Item added to backend:', response.data);
        })
        .catch(error => {
          if (error.response && error.response.status === 400) {
            alert(error.response.data);
          } else {
            console.error('There was an error adding the item to the backend!', error);
          }
        });
    }

    console.log(carts);
  };

  return (
    <div className='container'>
      {items.map(i =>
        <div className="row py-5 align-items-center reveal" key={i.id}>
          <h3 className="py-3">{i.title}</h3>
          <div className="col-12 col-md-6">
            <img src={i.image} className="img-fluid rounded" alt={i.title} />
          </div>
          <div className="col-12 col-md-6">
            <p>{i.content}</p>
            <button className='btn btn-success' onClick={() => addtocart(i.id, i.title, i.content, i.image)}>ADD to cart</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Productsdetailssection;
