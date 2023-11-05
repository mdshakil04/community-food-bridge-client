/* eslint-disable no-unused-vars */
import React from "react";
// https://i.ibb.co/qkcz6yJ/banner.png
const Banner = () => {
  return (
    <div>
      <div
        className="hero lg:h-[750px]"
        style={{
          backgroundImage: "url(https://i.ibb.co/j8KKJrf/final-banner.jpg)",
        }}
      >
        <div className="hero-overlay bg-[#3CC78F] bg-opacity-40"></div>
        <div className="hero-content text-start text-white">
          <div className="lg:w-1/2 lg:absolute left-48">
            <h1 className="mb-5 lg:text-7xl text-2xl font-bold">
              Help them <br /> When They Need
            </h1>
            <p className="mb-5">
              With so much to consume and such little time,<br/> coming up with
              relevant title ideas is essential
            </p>
            <button className="btn btn-outline btn-success bg-white">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
