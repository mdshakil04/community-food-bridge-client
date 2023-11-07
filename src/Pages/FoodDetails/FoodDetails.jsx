/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";

const FoodDetails = () => {
  const food = useLoaderData();
  const {
    _id,
    food_name,
    food_image,
    food_quantity,
    donator_image,
    donator_name,
    pickup_location,
    expired_date,
    additional_notes,
  } = food;
//   const handleRequest = () =>{
//     <div className="toast toast-center toast-middle">
//     <div className="alert alert-success">
//       <span>Message sent successfully.</span>
//     </div>
//   </div>
//   }
  return (
    <div className=" mt-24">
      {/*  Donor Info*/}
      <div className=" flex flex-col items-center my-12 ">
        <div className=" border-4 p-4 rounded-xl border-green-400">
          <h2 className="text-3xl text-center mb-12">Donator Information</h2>
          <div className="card bg-base-100 shadow-xl mt-4">
            <figure className="px-10 pt-10">
              <img src={donator_image} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Donator Name: {donator_name}</h2>
              <p>Pickup Location: {pickup_location}</p>
            </div>
          </div>
        </div>
      </div>
      {/* Food Info */}
      <div className=" ">
        <h2 className="text-5xl text-center">Food Info</h2>
        <div className=" container mx-auto  card card-side          bg-base-100 gap-12 flex flex-col md:grid md:grid-cols-2 items-center shadow-xl my-8 ">
          <figure className=" w-full">
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
            <div className="card-actions my-4">
              <button
                className="btn btn-outline btn-success"
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                Request
              </button>
              <dialog
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box flex flex-col items-center">
                    <img className=" rounded-xl w-2/3" src={food_image} alt="" />
                    <input type="text" defaultValue={'Food Name :' +food_name} placeholder="Type here" className="input font-bold text-2xl input-bordered input-accent w-full max-w-xs mt-4" disabled  />
                    <input type="text" defaultValue={'Food ID :' +_id} placeholder="Type here" className="input font-bold text-2xl input-bordered input-accent w-full max-w-xs mt-4" disabled />
                    <input type="text" defaultValue={'Donator Name :' +donator_name} placeholder="Type here" className="input font-bold text-2xl input-bordered input-accent w-full max-w-xs mt-4" disabled />
                    <input type="text" defaultValue={'Request Date :' +expired_date} placeholder="Type here" className="input font-bold text-2xl input-bordered input-accent w-full max-w-xs mt-4" disabled />
                    <input type="text" defaultValue={'Location :' +pickup_location} placeholder="Type here" className="input font-bold text-2xl input-bordered input-accent w-full max-w-xs mt-4" disabled />
                    <input type="text" defaultValue={'Notes :' +additional_notes} placeholder="Type here" className="input font-bold text-2xl input-bordered input-accent w-full max-w-xs mt-4" />
                    <input type="text"  placeholder="Donation Money" className="input font-bold text-2xl input-bordered input-accent w-full max-w-xs mt-4" />
                  
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-outline btn-success">Request</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
