import React from 'react';
import AboutKow from '../AboutKow/AboutKow';
import ContactUs from '../ContactUs/ContactUs';
import OurCase from '../OurCase/OurCase';
import ProductVideo from '../ProductVideo/ProductVideo';
import ServiceFor from '../ServiceFor/ServiceFor';
import './style.css'; 

const Home = () => {
  return (
    <>
    <div className='homeKWrap container m-auto'>
      <img src={require('./img/kshape.png')} className="h-screen absolute h-screen top-0"/>
      <div className='home_right col-span-1'>
        <h3>3D PRODUCT</h3>
        <h2>MODELING</h2>
        <button>Get Started</button>
      </div>
    </div>
        <AboutKow/>
       <OurCase></OurCase>
       <ServiceFor></ServiceFor>
       <ProductVideo></ProductVideo>
       <ContactUs></ContactUs>
       </>

  );
};

export default Home;