import React from 'react';
import './style.css'; 

const Home = () => {
  return (
    <div className='container m-auto'>
      <img src={require('./img/kshape.png')} className="h-screen fixed z-0 top-0 col-span-1"/>
      <div className='home_right col-span-1'>
        <h3>3D PRODUCT</h3>
        <h2>MODELING</h2>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default Home;