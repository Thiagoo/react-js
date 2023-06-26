import React from 'react';

const About = () => {
  return (
    <div className='container'>
      <header>
        <div className='image-header'></div>
      </header>
      <section className='about-page'>
        <div className='content-title'>
          <h1>Your new online graphic shirts its here!</h1>
        </div>
        <article>
          <div className='row'>
            <div className='column'>
              <div className='content-column'>
                <p className='line1'>
                  Help our store to grow, buying a new shirt today :)
                </p>
                <p className='line2'>
                  Our company is a beautiful online clothes store. Our
                  philosophy is based on quality products.
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default About;
