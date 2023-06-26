import React from 'react';

const Home = () => {
  return (
    <div className='container'>
      <header>
        <div className='image-header'></div>
      </header>
      <section className='home-page'>
        <div className='content-title'>
          <h1>Our Arts</h1>
        </div>

        <div className='imageContainer'>
          <div className='column'>
            <div className='image-content1'></div>
            <a href='/product1' id='link1'>
              Buy
            </a>
          </div>
          <div className='column'>
            <div className='image-content2'></div>
            <a href='/product2' id='link2'>
              Buy
            </a>
          </div>
          <div className='column'>
            <div className='image-content3'></div>
            <a href='/product3' id='link3'>
              Buy
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
