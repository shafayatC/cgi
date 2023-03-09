import React, { useState } from "react";
import "./style.css";
import box from "./img/box_2.png";
import x from "./img/x.png";
import o from "./img/o.png";
import control from "./img/control.png";

const Services = () => {
  const dataArray = [
    {
      img: box,
      heading: "3D Modeling/ Views",
      des: "Producing photorealistic 3D model from product images and specs with dynamic lighting.",
    },
    {
      img: x,
      heading: "Textures",
      des: "Easily changeable Fabrics , textures or materials for the 3D model.",
    },
    {
      img: o,
      heading: "Color Adjustments",
      des: "Quick exchange of Colors & Patterns",
    },

    {
      img: control,
      heading: "Game Assests",
      des: "Creating game environment designs, characters, asset modelings & animations.",
    },
  ];

  return (
    <div id="service" className="pt-10 pb-9">
      <div className="heading_1">
        <h2>Services</h2>
      </div>
      <div
        id="serviceWrap"
        className="container m-auto grid grid-cols-1 md:grid-cols-4 pt-[70px] md:pt-[140px] gap-12 md:gap-0"
      >
        {dataArray.map((data, index) => (
          <>
            <div className="serviceProductWrap">
              <div className="srvImage">
                <img src={data.img} />
              </div>
              <div className="serviceProductDes pb-12 md:pb-3 border-r-0 border-b-2 md:border-b-0 md:border-r-2 md:px-[10px] lg:px-[20px] xl:px-[40px] md:min-h-[105px]">
                <h5>{data.heading}</h5>
                <p className="text-center ">{data.des}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Services;
