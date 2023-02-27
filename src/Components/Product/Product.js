import React from 'react';
import './style.css';
import { Carousel } from 'react-div-carousel'
import 'react-div-carousel/dist/index.css'
import { Link } from 'react-router-dom';

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
        <div id='productWrap' className='pt-8 pb-28'>
            <div className='heading_1'>
                <h2>Shoes CGI</h2>
            </div>
            <div className='productViewsWrap container m-auto grid grid-cols-12 gap-24 mt-14'>
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
                <div className='productListWrap col-span-4 flex flex-col gap-8'>

                    {productArray.map(data => 
                        <Link to="#" className='productList grid grid-cols-5 gap-5'>
                            <div className='col-span-2 bg-white flex items-center h-[100px]'>
                                <img className='max-h-full m-auto' src={data.img} />
                            </div>
                            <h5 className='col-span-3 self-center text-white text-left'>{data.title}</h5>
                        </Link>
                        )}
                </div>
            </div>
        </div>
    );
};

export default Product;