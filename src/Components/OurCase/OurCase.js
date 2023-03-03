import React, { useState } from "react";
import "./style.css";
import p1 from "../OurCase/images/1.png";
import p2 from "../OurCase/images/2.png";
import p3 from "../OurCase/images/3.png";
import p4 from "../OurCase/images/4.png";
import p5 from "../OurCase/images/5.png";
import p6 from "../OurCase/images/6.png";
import p7 from "../OurCase/images/7.png";
import p8 from "../OurCase/images/8.png";
import { CloseCircleOutlined } from "@ant-design/icons";

const Case = () => {
  const CaseImage = [
    {
      img: p1,
      title: "3D Model Bowler Bag",
      cat: "Fashion Accessories",
    },
    {
      img: p2,
      title: "3D Model Tub Chair",
      cat: "Furniture & Movables",
    },
    {
      img: p3,
      title: "3D Model Drill",
      cat: "Home Equipment",
    },
    {
      img: p4,
      title: "3D Model DSLR Camera",
      cat: "Photography Equipment",
    },
    {
      img: p5,
      title: "3D Model Lipstick",
      cat: " Cosmetics ",
    },
    {
      img: p6,
      title: "3D Model VR Headset",
      cat: "Virtual Reality Equipment",
    },
    {
      img: p7,
      title: "3D Model Cleaning Bottles",
      cat: "Cleaning Products ",
    },
    {
      img: p8,
      title: "3D Model Water Bottles",
      cat: " Products",
    },
  ];

  const [getImage, setImage] = useState();
  const [getClose, setClose] = useState("hidden");
  const HandleImage = (img) => {
    setImage(img);
    setClose("block");
    console.log("bfhsdg");
  };

  const HandleClose = () => {
    setClose("hidden");
  };

  return (
    <div className="pt-10 container mx-auto pb-9">
      <div className="heading_2 ">
        <h2>industries we work for</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 mx-16 gap-5 mt-16  justify-items-center">
        {CaseImage.map((data) => (
          <div onClick={() => HandleImage(data.img)}>
            <div className="img-container  hover:scale-110 transition duration-300 ease-in-out">
              <img className="img-bag" src={data.img} alt="" />
              <div className="view-content ">
                <p className="text-white  mb-2">{data.title}</p>
                <p className="text-white   mb-2">{data.cat}</p>
                {/*<button className="view-button text-sm">View More</button> */}
              </div>
              <div className="blank "></div>
            </div>
          </div>
        ))}
      </div>
      <div
        id="imgPopupWrap"
        className={"fixed top-0 z-10 left-0 w-full h-full  " + getClose}
      >
        <img src={getImage} className="product-img" />
        <span onClick={HandleClose} className="closeBtn cursor-pointer">
          X
        </span>
      </div>
    </div>
  );
};

export default Case;
