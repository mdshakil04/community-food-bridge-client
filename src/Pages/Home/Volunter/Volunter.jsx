/* eslint-disable no-unused-vars */
import React from "react";
import vol1 from "../../../assets/image/volenteer/1.png";
import vol2 from "../../../assets/image/volenteer/2.png";
import vol3 from "../../../assets/image/volenteer/3.png";

const Volunter = () => {
  return (
    <div className=" my-16 container mx-auto flex flex-col items-center ">
      <h2 className="md:text-4xl font-mono rounded-full md:p-4 mt-12 text-center md:bg-[#a3f1d2]">Our Volunters</h2>
      <div className=" md:grid lg:grid-cols-3 md:grid-cols-2 gap-12 py-4">
        <div className="relative">
          <div className=" ">
            <img className=" rounded-xl" src={vol1} alt="volentiar" />
          </div>
          <div className=" absolute -mt-8 ml-12 border-4 border-white bg-green-300 w-[200px] text-center rounded-xl">
            <h2 className="text-2xl">Zahid Hasan</h2>
            <p className="">CEO</p>
          </div>
        </div>
        <div className="relative">
          <div className=" ">
            <img className=" rounded-xl" src={vol2} alt="volentiar" />
          </div>
          <div className=" absolute -mt-8 ml-12 border-4 border-white bg-green-300 w-[200px] text-center rounded-xl">
            <h2 className="text-2xl ">Shakil Ahmad</h2>
            <p className=" ">Founder</p>
          </div>
        </div>
        <div className="relative">
          <div className=" ">
            <img className=" rounded-xl" src={vol3} alt="volentiar" />
          </div>
          <div className=" absolute -mt-8 ml-12 border-4 border-white bg-green-300 w-[200px] text-center rounded-xl">
            <h2 className="text-2xl ">Shofiqul Islam</h2>
            <p className=" ">Volunter</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunter;
