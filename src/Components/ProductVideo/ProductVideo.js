import React from "react";
import video from "./video/production.mp4";

const ProductVideo = () => {
  return (
    <div className="flex justify-center">
      <video className="mt-20 mb-20" width="600" height="450" controls>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default ProductVideo;
