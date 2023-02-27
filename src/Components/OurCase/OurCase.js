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
    },
    {
      img: p2,
    },
    {
      img: p3,
    },
    {
      img: p4,
    },
    {
      img: p5,
    },
    {
      img: p6,
    },
    {
      img: p7,
    },
    {
      img: p8,
    },
  ];
  return (
    <div className="pt-10 container mx-auto pb-9">
      <div className=" heading_1  ">
        <h2>Our cases</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 mx-20 gap-3 mt-16  justify-items-center">
        {CaseImage.map((data) => (
          <div>
            <div className="img-container">
              <img className="img-bag" src={data.img} alt="" />
              <button className="button">View More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Case;
