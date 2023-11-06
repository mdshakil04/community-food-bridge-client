/* eslint-disable no-unused-vars */
import React from "react";

const LatestActivities = () => {
  return (
    <div className=" flex flex-col items-center">
      <div className="  mb-4">
        <h2 className="md:text-4xl font-mono rounded-full md:p-4 mt-12 text-center md:bg-[#a3f1d2]">
          Our Latest Activities
        </h2>
      </div>
      <div className=" bg-[#F3FCF8]">
        <div className="">
          <div className=" lg:flex gap-12">
            <div className=" lg:w-1/2 ">
              <iframe
                className=" w-full h-[240px] md:h-[400px] lg:h-[520px] rounded-xl"
                src="https://www.youtube.com/embed/0AkeDupcTYc?si=UC-0NTCPGtA0q2Z7"
                title="YouTube video player"
                // eslint-disable-next-line react/no-unknown-property
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className=" lg:w-1/2 text-start lg:mt-24 p-12">
              <h1 className="text-5xl font-bold">
                Watch Our Latest Activities
              </h1>
              <p className="py-6">
                Food donation is a meaningful act of generosity where
                individuals, organizations, and communities contribute surplus
                or unused food to help alleviate hunger and support those in
                need. This practice not only helps to combat food insecurity but
                also fosters a sense of social responsibility and compassion
                within society. Food donation initiatives often involve the
                collection and distribution of non-perishable items, fresh
                produce, and prepared meals to various charitable organizations.
              </p>
              <button className="btn btn-outline btn-success font-bold">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestActivities;
