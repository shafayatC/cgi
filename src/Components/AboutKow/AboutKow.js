import React from "react";

const AboutKow = () => {
  return (
    <div
      id="aboutKow"
      className="w-full bg-shade-color py-[60px] relative z-10"
    >
      <div className="container m-auto flex flex-col md:grid md:grid-cols-5 gap-7 md:gap-0">
        <div className="m-auto md:m-0 md:col-span-1 flex flex-row items-center">
          <img
            className="max-w-[200px] md:max-w-full"
            src={require("./img/logo_w.png")}
          />
        </div>
        <div className="md:col-span-4 flex items-center">
          <p className="text-xl text-white text-center md:text-justify md:pl-[100px]">
            We are a specialized company in 3D modeling and CGI, producing
            high-quality 3D models, imagery and animations in collaboration with
            top 3D designers. Along with creating realistic 3D models, we also
            offer high quality product image rendering tailored to retail
            industries, enabling clients to catch the customers attention with
            stunning product rendered outputs. Our commitment to delivering
            exceptional visual experiences not only satisfies our clients but
            also attracts more business opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutKow;
