import React from 'react';
import './style.css';
import { Carousel } from 'react-div-carousel'
import 'react-div-carousel/dist/index.css'

const Product = () => {

    const productImages = [
        require('./img/shoe.png'),
        require('./img/1.png'),
        require('./img/2.png')
    ];

    const productArray = [
        {
            img: require('./img/1.png'),
            title: "shoe sample title",
            url: "#"
        },
        {
            img: require('./img/2.png'),
            title: "shoe sample title",
            url: "#"
        },

        {
            img: require('./img/shoe.png'),
            title: "shoe sample title",
            url: "#"
        }
    ]

    return (
        <div id='productWrap'>
            <div className='heading_1'>
                <h2>Service</h2>
            </div>
            <div className='productViewsWrap container m-auto grid grid-cols-12 gap-5 mt-8'>
                <div className='productsSlide col-span-9'>
                    <div className='product bg-white h-[420px] flex'>
                        <img className='m-auto' src={require('./img/shoe.png')} /></div>
                    <div className='prodcutThumb grid grid-cols-4 gap-5 mt-8 justify-center'>
                    <button className='h-[100px] bg-white'><img className='max-h-full m-auto' src={require('./img/1.png')} /></button>
                    <button className='h-[100px] bg-white'><img className='max-h-full m-auto' src={require('./img/2.png')} /></button>
                    <button className='h-[100px] bg-white'><img className='max-h-full m-auto' src={require('./img/1.png')} /></button>
                    <button className='h-[100px] bg-white'><img className='max-h-full m-auto' src={require('./img/2.png')} /></button>
                    </div>
                </div>
                <div className='productListWrap col-span-3'>
                    <div className='productList'>
                        <div>
                            <img src={require('./img/1.png')} />
                        </div>
                        <h5>title sample</h5>
                    </div>
                    <div className='productList'>
                        <div>
                            <img src={require('./img/2.png')} />
                        </div>
                    <h5>title sample</h5>
                    </div>
                    
                    <div className='productList'>
                        <div>
                            <img src={require('./img/1.png')} />
                        </div>
                        <h5>title sample</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;