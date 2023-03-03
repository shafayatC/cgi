import React from 'react';
import AboutKow from '../AboutKow/AboutKow';
import ContactUs from '../ContactUs/ContactUs';
import OurCase from '../OurCase/OurCase';
import ProductVideo from '../ProductVideo/ProductVideo';
import ServiceExplore from '../ServiceExplore/ServiceExplore';
import ServiceFor from '../ServiceFor/ServiceFor';
import Services from '../Services/Services';
import './style.css'; 

const Home = () => {
  return (
    <>
    <div className='homeKWrap container m-auto'>
      <div className="kshapWrap h-[645px] absolute top-0">
        <div className='ballShadowWrap'>
        <div id='ballShadow'></div>
          <img className='ballAnim' src={require('./img/Ball.png')} />
        </div>
          <img src={require('./img/K.png')} className="h-full max-w-none sm:max-w-full" />
      </div>
      <div className='home_right col-span-1'>
        <h3>3D PRODUCT</h3>
        <h2>MODELING</h2>
        <button>Get Started</button>
      </div>
    </div>
        <AboutKow/>
        <Services/>
       <OurCase></OurCase>
       <ServiceExplore/>
       {/* <ServiceFor></ServiceFor>*/}
       <ProductVideo></ProductVideo>
       <ContactUs></ContactUs>
       </>

  );
};

export default Home;