import React, { useState } from 'react';
import ColorPlate from './ColorPlate';
import './style.css';

const ServiceExplore = () => {
    const [clbodyActive, setClBodyAtive] = useState()
    return (
        <div className='w-full pb-10 pt-12'>
            <div className='container m-auto'>
                <div className='grid grid-cols-6 gap-5'>
                    <div className="col-span-4 flex flex-col justify-center items-center">
                        <div id='imgWrap'>
                            <img src={require("../Product/img/shoe.png")} />
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className='pb-4'>
                            <h3 className='text-white text-sm'>Color body</h3>
                            <div className='pt-4'>
                                <button className='rounded-full bg-white p-6 mr-2 border-shade-color border-2 border-solid'></button>
                                <button className='rounded-full bg-red-700 p-6 mr-2'></button>
                                <button className='rounded-full bg-green-500 p-6 mr-2'></button>
                                <button className='rounded-full bg-indigo-700 p-6 mr-2'></button>
                                <button className='rounded-full bg-rose-800 p-6 mr-2'></button>
                            </div>
                        </div>
                        
                        <div className='pb-4'>
                            <h3 className='text-white text-sm'>Color side logo</h3>
                            <div className='pt-4'>
                                <button className='rounded-full bg-white p-6 mr-2'></button>
                                <button className='rounded-full bg-red-700 p-6 mr-2'></button>
                                <button className='rounded-full bg-green-500 p-6 mr-2'></button>
                                <button className='rounded-full bg-indigo-700 p-6 mr-2'></button>
                                <button className='rounded-full bg-rose-800 p-6 mr-2'></button>
                            </div>
                        </div>

                        <div className='pb-4'>
                            <h3 className='text-white text-sm'>Color sole</h3>
                            <div className='pt-4'>
                                <button className='rounded-full bg-white p-6 mr-2'></button>
                                <button className='rounded-full bg-red-700 p-6 mr-2'></button>
                                <button className='rounded-full bg-green-500 p-6 mr-2'></button>
                                <button className='rounded-full bg-indigo-700 p-6 mr-2'></button>
                                <button className='rounded-full bg-rose-800 p-6 mr-2'></button>
                            </div>
                        </div>
                        
                        <div className='pb-4'>
                            <h3 className='text-white text-sm'>Color laces</h3>
                            <div className='pt-4'>
                                <button className='rounded-full bg-white p-6 mr-2'></button>
                                <button className='rounded-full bg-red-700 p-6 mr-2'></button>
                                <button className='rounded-full bg-green-500 p-6 mr-2'></button>
                                <button className='rounded-full bg-indigo-700 p-6 mr-2'></button>
                                <button className='rounded-full bg-rose-800 p-6 mr-2'></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceExplore;