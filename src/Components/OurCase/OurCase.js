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
    <div className=" pt-10 pb-10">
      <div>
        <p className="text-white  text-center border-b-2 border-b-shade-color text-4xl">
          Our cases
        </p>
      </div>
      <div className="grid lg:grid-cols-4 mx-20 gap-3 mt-16  justify-items-center">
        <div className="relative block bg-gray-900 w-64 group">
          <div className="">
            <img
              src={p1}
              alt="logo"
              className="h-60 w-64 absolute inset-0  group-hover:opacity-80 hover:border-r-4 hover:border-t-4  hover:border-shade-color hover:scale-110 transition duration-300 ease-in-out"
            />
          </div>
          <div className="relative top-28 left-20">
            <div className="transition-all transform translate-y-4  opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
              <p className="text-white text-xl mb-2">Ladies Bag</p>
              <button className="px-4 py-2 text-sm text-white  bg-shade-color">
                View More
              </button>
            </div>
          </div>
        </div>

        <div>
          <img
            className="h-60 w-64 hover:border-r-4 hover:border-t-4 hover:border-shade-color hover:scale-110 transition duration-300 ease-in-out"
            src={p2}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-60 w-64 hover:border-r-4 hover:border-t-4 hover:border-shade-color hover:scale-110 transition duration-300 ease-in-out"
            src={p3}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-60 w-64 hover:border-r-4 hover:border-t-4 hover:border-shade-color hover:scale-110 transition duration-300 ease-in-out"
            src={p4}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-60 w-64 hover:border-r-4 hover:border-t-4 hover:border-shade-color hover:scale-110 transition duration-300 ease-in-out"
            src={p5}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-60 w-64 hover:border-r-4 hover:border-t-4 hover:border-shade-color hover:scale-110 transition duration-300 ease-in-out"
            src={p6}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-60 w-64 hover:border-r-4 hover:border-t-4 hover:border-shade-color hover:scale-110 transition duration-300 ease-in-out"
            src={p7}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-60 w-64 hover:border-r-4 hover:border-t-4 hover:border-shade-color hover:scale-110 transition duration-300 ease-in-out"
            src={p8}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default OurCase;
