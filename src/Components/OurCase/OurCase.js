import React from "react";
import p1 from "./images/1.png";
import p2 from "./images/2.png";
import p3 from "./images/3.png";
import p4 from "./images/4.png";
import p5 from "./images/5.png";
import p6 from "./images/6.png";
import p7 from "./images/7.png";
import p8 from "./images/8.png";

const OurCase = () => {
  return (
    <div className="bg-black pt-10 pb-10">
      <div>
        <p className="text-white  text-center border-b-2 border-b-shade-color text-4xl">
          Our cases
        </p>
      </div>
      <div className="grid lg:grid-cols-4 mx-20 gap-4 mt-10  justify-center">
        <div>
          <img className="h-60 w-64" src={p1} alt="" />
        </div>
        <div>
          <img className="h-60 w-64" src={p2} alt="" />
        </div>
        <div>
          <img className="h-60 w-64" src={p3} alt="" />
        </div>
        <div>
          <img className="h-60 w-64" src={p4} alt="" />
        </div>
        <div>
          <img className="h-60 w-64" src={p5} alt="" />
        </div>
        <div>
          <img className="h-60 w-64" src={p6} alt="" />
        </div>
        <div>
          <img className="h-60 w-64" src={p7} alt="" />
        </div>
        <div>
          <img className="h-60 w-64" src={p8} alt="" />
        </div>
      </div>
    </div>
  );
};

export default OurCase;
