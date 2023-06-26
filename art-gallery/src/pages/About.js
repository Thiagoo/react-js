import React from 'react';

const About = () => {
  return (
    <div className='container'>
      <header>
        <div className='image-header'></div>
      </header>
      <section>
        <div className='content-title'>
          <h1>About Us</h1>
        </div>
        <article>
          <div className='row'>
            <div className='column'>
              <div className='content-column'>
                <p className='line1'>What is an Art Gallery?</p>
                <p className='line2'>
                  An art gallery is an exhibition space to display and sell
                  artworks. As a result, the art gallery is a commercial
                  enterprise working with a portfolio of artists. The gallery
                  acts as the dealer representing, supporting, and distributing
                  the artworks by the artists in question.
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
