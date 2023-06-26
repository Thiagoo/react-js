import React from 'react';
import { heroes } from '../data2';

const View2 = () => {
  return (
    <div className='container'>
      <section>
        <header>
          <div className='image-header hero2'></div>
        </header>
        <div className='content-title'>
          <h1>Json2</h1>
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

export default View2;
