import React from "react";
import "./style.css";
import p1 from "../OurCase/images/1.png";
import p2 from "../OurCase/images/2.png";
import p3 from "../OurCase/images/3.png";
import p4 from "../OurCase/images/4.png";
import p5 from "../OurCase/images/5.png";
import p6 from "../OurCase/images/6.png";
import p7 from "../OurCase/images/7.png";
import p8 from "../OurCase/images/8.png";

const Case = () => {
  const CaseImage = [
    {
      img: p1,
      title: "Product Title",
      cat: "Clothing & Shoes"
    },
    {
      img: p2,
      title: "Product Title",
      cat: "Clothing & Shoes"
    },
    {
      img: p3,
      title: "Product Title",
      cat: "Clothing & Shoes"
    },
    {
      img: p4,
      title: "Product Title",
      cat: "Clothing & Shoes"
    },
    {
      img: p5,
      title: "Product Title",
      cat: "Clothing & Shoes"
    },
    {
      img: p6,
      title: "Product Title",
      cat: "Clothing & Shoes"
    },
    {
      img: p7,
      title: "Product Title",
      cat: "Clothing & Shoes"
    },
    {
      img: p8,
      title: "Product Title",
      cat: "Clothing & Shoes"
    },
  ];
  return (
    <div className="pt-10 container mx-auto pb-9">
      <div className="heading_2 ">
        <h2>industries we work for</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 mx-16 gap-5 mt-16  justify-items-center">
        {CaseImage.map((data) => (
          <div>
            <div className="img-container  hover:scale-110 transition duration-300 ease-in-out">
              <img className="img-bag" src={data.img} alt="" />
              <div className="view-content ">
              <p className="text-white  mb-2">{data.title}</p>
              <p className="text-white  mb-2">{data.cat}</p>
               {/*<button className="view-button text-sm">View More</button> */} 
              </div>
              <div className="blank "></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Case;
