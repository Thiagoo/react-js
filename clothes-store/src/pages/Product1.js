import React from 'react';

const Product1 = () => {
  return (
    <div className='container'>
      <header>
        <div className='image-header'></div>
      </header>
      <section className='product-page'>
        <div className='content-title'>
          <h1>Our Products</h1>
        </div>

        <div class='card'>
          <div className='image-content1'></div>
          <h1>Carrouts vibes</h1>
          <p class='price'>$20.00</p>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
      </section>
    </div>
  );
};
export default Product1;
