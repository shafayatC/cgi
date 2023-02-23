import React from 'react';

const AboutKow = () => {
    return (
        <div className='w-full bg-shade-color py-[60px]'>
            <div className='container mr-auto grid grid-cols-5'>
                <div className='col-span-1'><img src={require('./img/logo_w.png')}/></div>
                <div className='col-span-4 flex items-center'>
                    <p className="text-xl text-white text-end pl-[100px]">
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