/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const FeaturedFoodCart = ({ featuredFood }) => {
  const {
    id,
    food_image,
    food_name,
    donator_image,
    donator_name,
    food_quantity,
    pickup_location,
    expired_date,
    additional_notes,
  } = featuredFood;
  return (
    <div className="card bg-base-100 shadow-xl border-4 border-green-300">
      <figure>
        <img src={food_image} alt="Food" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl">{food_name} </h2>
        <p>Number of person can eat: {food_quantity}</p>
        <div className=" flex items-center gap-2">
          <span>Expired Date: </span>
          <div className="badge badge-secondary">{expired_date}</div>
        </div>
        <p className=" text-red-600">{additional_notes}</p>
        <p className=" font-bold">Donar Information</p>
        <div className="card-actions justify-start border-2 rounded-full w-max pr-2">
          <div className=" flex items-center gap-2">
            <img src={ donator_image} />
            <h2 className=" font-bold font-mono">{donator_name}</h2>
          </div>
        </div>
        <p className=" font-bold">Pickup Location: { pickup_location}</p>
        
          <Link to={'/availableFoods'}>
            <button className="btn btn-outline btn-success">View Details</button>
          </Link>
        
      </div>
    </div>
  );
};

export default FeaturedFoodCart;
