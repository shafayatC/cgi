import React from 'react';

const AboutKow = () => {
    return (
        <div className='w-full bg-shade-color py-[60px] relative z-10'>
            <div className='container m-auto flex flex-col md:grid md:grid-cols-5 gap-7 md:gap-0'>
                <div className='m-auto md:m-0 md:col-span-1 flex flex-row items-center'><img className='max-w-[200px] md:max-w-full' src={require('./img/logo_w.png')}/></div>
                <div className='md:col-span-4 flex items-center'>
                    <p className="text-xl text-white text-center md:text-end md:pl-[100px]">
                    WE are Architectural Visualization Studio, co-authoring
                     architectural imagery & animations with top architects & 
                     real estate developers.WE are Architectural Visualization 
                     Studio, co-authoring architectural imagery & animations 
                     with top architects & real estate developers.  
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutKow;