import React from "react";
import banner from "../assets/banner.jpg";
const BannerImg = () => {
  return (
    <div className="p-4 border-2 rounded-xl  left-[14%] top-[75%] w-3/4">
      <figure className=" rounded-xl border-2 ">
        <img src={banner} alt="" className="w-full rounded-xl" />
      </figure>
    </div>
  );
};

export default BannerImg;
