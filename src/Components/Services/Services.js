import React, { useState } from "react";
import "./style.css";
import box from "./img/box.png";
import x from "./img/x.png";
import o from "./img/o.png";
import control from "./img/control.png";

const Services = () => {
  const dataArray = [
    {
      img: box,
      heading: "3D Views",
      des: "Product images of any Perspective & Lighting",
    },
    {
      img: x,
      heading: "Textures",
      des: "Easy change of Fabrics & Materials",
    },
    {
      img: o,
      heading: "Color Adjustments",
      des: "Quick exchange of Colors & Patterns",
    },
    {
      img: control,
      heading: "Game Assests",
      des: "Avatar Animations & realistic Material Behavior",
    },
  ];

  return (
    <div className="pt-10 pb-9">
      <div className="heading_1">
        <h2>Service</h2>
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
              <div className="serviceProductDes pb-12 md:pb-3 border-r-0 border-b-2 md:border-b-0 md:border-r-2 md:px-[10px] lg:px-[50px] xl:px-[85px] md:min-h-[105px]">
                <h5>{data.heading}</h5>
                <p>{data.des}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Services;
