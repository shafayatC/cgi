import React from 'react';
import './style.css'; 
import box from './img/box.png'; 
import x from './img/x.png'; 
import o from './img/o.png'; 
import control from './img/control.png'; 

const Services = () => {

    const dataArray = [
        {
            img: box, 
            heading: "3D Views",
            des : "Product images of any Perspective & Lighting"
        },
        {
            img: x, 
            heading: "Textures",
            des : "Easy change of Fabrics & Materials"
        },
        {
            img: o, 
            heading: "Color Adjustments",
            des : "Quick exchange of Colors & Patterns"
        },
        {
            img: control, 
            heading: "Game Assests",
            des : "Avatar Animations & realistic Material Behavior"
        }
    ]

    return (
        <div className='pt-10'>
        <div className='heading_1'>
            <h2>Service</h2>
        </div>
        <div className='container m-auto grid grid-cols-4 pt-[140px]'>
            {dataArray.map(data =>
                <div className='serviceProductWrap'>
                        <img src={data.img}/>
                        <div className='serviceProductDes'>
                            <h5>{data.heading}</h5>
                            <p>{data.des}</p>
                        </div>
                    </div>
                )}

        </div>
        </div>

    );
};

export default Services;