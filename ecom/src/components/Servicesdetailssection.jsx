import React, { useState } from 'react';
import axios from 'axios';

const Servicesdetailssection = ({ services }) => {
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
    <section className='container py-5 my-4'>
      <h4 className="text-green text-center reveal">Harness renewable energy for a sustainable tomorrow</h4>
      <h1 className="text-center reveal">A New Energy Paradigm</h1>
      <div className="row g-4 py-4">
        {services.map(s => (
          <div className="col-12 col-md-4 reveal" key={s.id}>
            <img src={s.image} className="img-fluid border card-img" />
            <div className="p-4 border card-text">
              <h3>{s.title}</h3>
              <p className="py-2 service-cards">{s.content}</p>
              <button className='bg-danger' onClick={() => addtocart(s.id, s.title, s.content, s.image)}>ADD to cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Servicesdetailssection;
