import React from 'react';
import { heroes } from '../data3';

const View3 = () => {
  return (
    <div className='container'>
      <section>
        <header>
          <div className='image-header hero3'></div>
        </header>
        <div className='content-title'>
          <h1>Json3</h1>
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

export default View3;
