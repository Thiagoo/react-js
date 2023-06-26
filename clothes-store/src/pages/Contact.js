import React from 'react';

const Contact = () => {
  return (
    <div className='container'>
      <header>
        <div className='image-header'></div>
      </header>
      <section className='contact-page'>
        <div className='content-title'>
          <h1>Contact Us</h1>
        </div>
        <article>
          <div className='row'>
            <div className='column'>
              <div className='content-column'>
                <div className='email'>
                  Talk with us here artgallery@gmail.com
                </div>
              </div>
            </div>
            <div className='column'>
              <div className='image-column'>
                <div className='image-content'></div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Contact;
