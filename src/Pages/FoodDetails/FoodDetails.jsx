/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";

const FoodDetails = () => {
  const food = useLoaderData();
  const {
    food_name,
    food_image,
    food_quantity,
    donator_image,
    donator_name,
    pickup_location,
    expired_date,
  } = food;
  return (
    <div className=" mt-24">
      {/*  Donor Info*/}
      <div className=" flex flex-col items-center my-12">
        <h2 className="text-5xl text-center mb-8">Donator Informations</h2>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={donator_image}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{donator_name}</h2>
            <p>{pickup_location}</p>
          </div>
        </div>
      </div>
      {/* Food Info */}
      <div>
        <h2 className="text-5xl text-center">Food Info</h2>
        <div className=" container mx-auto card card-side          bg-base-100 gap-12 flex items-center shadow-xl my-8 ">
          <figure className=" w-1/2">
            <img src={food_image} alt="food" />
          </figure>
          <div className=" w-1/2">
            <h2 className="card-title text-5xl mb-8">{food_name}</h2>
            <p className=" font-bold text-xl">
              Number of Person can eat :{" "}
              <span className=" text-green-500">{food_quantity}</span>{" "}
            </p>
            <p className=" font-bold text-red-500">
              Expired Date: {expired_date}
            </p>
            <div className="card-actions mt-4">
              <button className="btn btn-outline btn-success">Request</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
