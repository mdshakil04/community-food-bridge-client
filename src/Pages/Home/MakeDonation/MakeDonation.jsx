import React from "react";

const MakeDonation = () => {
  return (
    <div className="container mx-auto items-center justify-center mb-12 border-2 border-green-300 rounded-xl p-8">
      <h2 className="text-4xl font-bold font-mono mb-8 text-center">
        Make a Donation
      </h2>
      <div className=" flex lg:ml-80">
        <div className=" border-2 border-green-300 p-4 rounded-xl">
          <p className=" text-2xl">
            <span>Total Amount: $</span> 4250
          </p>
        </div>
        <div className="flex items-center gap-2 border-2 mx-auto justify-center border-green-300 p-4 rounded-xl ">
          <p className=" text-2xl">Select Amount:</p>
          <div className=" flex gap-2">
            <input
              type="radio"
              name="radio-4"
              className="radio radio-accent"
              checked
            />
            20
            <input type="radio" name="radio-4" className="radio radio-accent" />30
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeDonation;
