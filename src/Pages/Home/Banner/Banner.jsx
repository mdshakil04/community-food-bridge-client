/* eslint-disable no-unused-vars */
import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        className="hero lg:h-[700px] lg:relative"
        style={{
          backgroundImage: "url(https://i.ibb.co/qkcz6yJ/banner.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-white">
          <div className="lg:w-1/2 lg:absolute left-56">
            <h1 className="mb-5 lg:text-7xl text-2xl font-bold">
              Help the children <br /> When They Need
            </h1>
            <p className="mb-5">
              With so much to consume and such little time,<br/> coming up with
              relevant title ideas is essential
            </p>
            <button className="btn btn-outline btn-success">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
