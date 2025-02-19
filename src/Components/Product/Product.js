import React from 'react';
import './style.css';
import { Carousel } from 'react-div-carousel'
import 'react-div-carousel/dist/index.css'
import { Link } from 'react-router-dom';
import { SimpleCarouselSlider } from 'react-simple-carousel-image-slider'
import 'react-simple-carousel-image-slider/dist/index.css'
import { CaretDownOutlined } from '@ant-design/icons';

const Product = () => {

    const productImages = [
        require('./img/1.jpg'),
        require('./img/2.jpg'),
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
            img: require('./img/2.png'),
            title: "shoe sample title",
            url: "#"
        }
    ]

    return (
        <div id='productWrap' className='pt-8 pb-28'>
            <div className='heading_1'>
                <h2>Shoes CGI</h2>
            </div>
            <div className='productViewsWrap container m-auto grid grid-cols-12 gap-24 mt-14'>
            <div className='productsSlideImg col-span-8'>
            <SimpleCarouselSlider
                images={productImages} 
                autoplay={false}
                thumb={true}
                width= "100%"
                height="550px"
                />
            </div>
                {/*
                <div className='productsSlide col-span-8'>
                    <div className='product bg-white h-[420px] flex'>
                    <img className='m-auto' src={require('./img/shoe.png')} /></div>
                    <div className='prodcutThumb grid grid-cols-4 gap-5 mt-8 justify-center'>
                    <button className='h-[100px] bg-white'><img className='max-h-full m-auto' src={require('./img/1.png')} /></button>
                    <button className='h-[100px] bg-white'><img className='max-h-full m-auto' src={require('./img/2.png')} /></button>
                    <button className='h-[100px] bg-white'><img className='max-h-full m-auto' src={require('./img/1.png')} /></button>
                    <button className='h-[100px] bg-white'><img className='max-h-full m-auto' src={require('./img/2.png')} /></button>
                    </div>
                </div>
                */}

                <div className='productListWrap col-span-4 flex flex-col gap-8'>

                    {productArray.map(data => 
                        <Link to="#" className='productList grid grid-cols-5 gap-5  border-gray-500 border-solid border'>
                            <div className='col-span-2 bg-white flex items-center h-[100px]'>
                                <img className='max-h-full m-auto' src={data.img} />
                            </div>
                            <h5 className='col-span-3 self-center text-white text-left'>{data.title}</h5>
                        </Link>
                        )}
                        <Link to="#" className='text-white flex flex-row items-center gap-3 text-xl	hover:text-shade-color duration-300'>
                                See More Product <CaretDownOutlined />
                        </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;