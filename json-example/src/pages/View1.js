import React from 'react';
import { heroes } from '../data';

const View1 = () => {
  return (
    <div className='container'>
      <header>
        <div className='image-header hero1'></div>
      </header>
      <section>
        <div className='content-title'>
          <h1>Json1</h1>
        </div>
        <>
          <div className='heroes-container'>
            {heroes.map((data, key) => {
              return (
                <div key={key}>
                  {data.name + ' , ' + data.role + ' ,' + data.team + ', '}
                </div>
              );
            })}
          </div>
        </>
      </section>
    </div>
  );
};

export default View1;
