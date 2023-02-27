import React from "react";

const ServiceFor = () => {

  const imgData = [
    {
      url: "https://apps.shopify.com/cutoutwiz", 
      img: require('./images/sopify.png')
    },
    {
      url: "https://sellercentral.amazon.com/gspn/provider-details/Imaging/284b7303-cec9-403e-b763-375399824520?ref_=sc_gspn_ilst_idt-284b7303&localeSelection=en_US&sellFrom=US&sellIn=US", 
      img: require('./images/Amazon.png')
    },
    {
      url: "https://app.cutoutwiz.com/", 
      img: require('./images/Cutoutwiz.png')
    },
    {
      url: "https://www.shotflow.com/", 
      img: require('./images/shotflow.png')
    },
    {
      url: "https://www.bigcommerce.com/apps/cutoutwiz/", 
      img: require('./images/glowcommerz.png')
    },
  ]

  return (
    <div>
      <div className="mt-20 heading_2 ">
        <h2>Who we work for</h2>
      </div>
      <div className="container m-auto grid md:grid-cols-5 text-3xl  pb-16 mt-24 gap-4 md:gap-0 ">
        {imgData.map(data=> 
        <a target="_blank" href={data.url} className="h-[100px] flex flex-col md:flex-row items-center">
          <img className="h-full md:h-auto hover:p-5 duration-100 ease-in" src={data.img}/>
        </a>
          )}
      </div>
    </div>
  );
};

export default ServiceFor;
