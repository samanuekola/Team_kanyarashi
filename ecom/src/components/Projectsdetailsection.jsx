import React, { useState } from 'react';
import axios from 'axios';

const Projectsdetailsection = ({ items }) => {
  const [carts, setCart] = useState([]);

  const addtocart = (id, title, content, image) => {
    const cartItem = { id, title, content, image };
    const itemExists = carts.some(item => item.id === id);

    if (itemExists) {
      alert("Already in cart");
    } else {
      setCart([...carts, cartItem]);

      
      axios.post('http://localhost:3000/cart', cartItem)
        .then(response => {
          console.log('Item added to backend:', response.data);
          alert("Added to Cart")
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
    <section className="container py-5 my-4">
      <h2 className="text-green">Projects</h2>
      <div className="row g-4 py-4">
        {items.map(i => (
          <div className="col-12 col-md-4 reveal" key={i.id}>
            <img src={i.image} className="img-fluid border card-img" />
            <div className="p-4 border card-text">
              <h3>{i.title}</h3>
              <p className="py-2 project-cards">{i.content}</p>
              <button className='btn btn-success' onClick={() => addtocart(i.id, i.title, i.content, i.image)}>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projectsdetailsection;
