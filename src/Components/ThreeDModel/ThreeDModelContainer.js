import React from 'react';
import { Suspense } from 'react';
import ViewModel from './ViewModel';
import ThreeDModel from './ThreeDModel';
import AdidasShoe from './AdidasShoe';
import shoeImg_1 from './img/shoe_1.jpg';
import shoeImg_2 from './img/shoe.jpg';
import shoeImg_3 from './img/car/1.jpg';
import CarModel from './CarModel';
import ChairModel from './ChairModel';
import CameraModel from './CameraModel';

const ThreeDModelContainer = () => {

    const carImageList =[
        require('./img/car/15.jpg'),
        require('./img/car/14.jpg'),
        require('./img/car/13.jpg'),
        require('./img/car/12.jpg'),
        require('./img/car/11.jpg'),
        require('./img/car/10.jpg'),
        require('./img/car/9.jpg'),
        require('./img/car/8.jpg'),
        require('./img/car/7.jpg'),
        require('./img/car/6.jpg'),
        require('./img/car/5.jpg'),
        require('./img/car/4.jpg'),
        require('./img/car/3.jpg'),
        require('./img/car/2.jpg'),
        require('./img/car/1.jpg'),
    ]

    const chairImageList =[
        require('./img/chair/15.jpg'),
        require('./img/chair/14.jpg'),
        require('./img/chair/13.jpg'),
        require('./img/chair/12.jpg'),
        require('./img/chair/11.jpg'),
        require('./img/chair/10.jpg'),
        require('./img/chair/9.jpg'),
        require('./img/chair/8.jpg'),
        require('./img/chair/7.jpg'),
        require('./img/chair/6.jpg'),
        require('./img/chair/5.jpg'),
        require('./img/chair/4.jpg'),
        require('./img/chair/3.jpg'),
        require('./img/chair/2.jpg'),
        require('./img/chair/1.jpg')
    ]
    
    const sofaImageList =[
        require('./img/sofa/15.jpg'),
        require('./img/sofa/14.jpg'),
        require('./img/sofa/13.jpg'),
        require('./img/sofa/12.jpg'),
        require('./img/sofa/11.jpg'),
        require('./img/sofa/10.jpg'),
        require('./img/sofa/9.jpg'),
        require('./img/sofa/8.jpg'),
        require('./img/sofa/7.jpg'),
        require('./img/sofa/6.jpg'),
        require('./img/sofa/5.jpg'),
        require('./img/sofa/4.jpg'),
        require('./img/sofa/3.jpg'),
        require('./img/sofa/2.jpg'),
        require('./img/sofa/1.jpg')
    ]
    return (
        <>
            <div className='container mx-auto'>
                <div className="heading_2 pb-10">
                    <h2>3D Model</h2>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 from-gray-950 gap-5'>
                    <div className='h-[400px]'>
                        <ViewModel imgSample={shoeImg_1}><ThreeDModel /></ViewModel>
                    </div>
                    <div className='h-[400px]'>
                        <ViewModel imgSample={shoeImg_2}><AdidasShoe /></ViewModel>
                    </div>
                    
                    <div className='h-[400px]'>
                        <ViewModel imgSample={require('./img/chair/1.jpg')} imageList={chairImageList}><ChairModel /></ViewModel>
                    </div>
                    
                    <div className='h-[400px]'>
                        <ViewModel imgSample={require('./img/sofa/1.jpg')} imageList={sofaImageList}><CameraModel /></ViewModel>
                    </div>
                    {/* <div className='h-[400px]'>
                        <ViewModel imgSample={shoeImg_3} imageList={carImageList}><CarModel /></ViewModel>
                    </div> */}
                    {/* <div className='h-[300px] bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900'> <ThreeDModel /></div>
            <div className='h-[300px] bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900'> <ThreeDModel /></div>
            <div className='h-[300px] bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900'> <ThreeDModel /></div> */}
                </div>
            </div>

        </>
    );
};

export default ThreeDModelContainer;