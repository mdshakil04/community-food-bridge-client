/* eslint-disable no-unused-vars */
import Swal from 'sweetalert2'
import React from 'react';
import {Helmet} from "react-helmet";
const AddFood = () => {
    const handleAddFood = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const quantity = form.quantity.value;
        const expireDate = form.expireDate.value;
        const status = form.status.value;
        const notes = form.notes.value;
        const donorName = form.donorName.value;
        const donarImage = form.donarImage.value;
        const newFood = {
                        name,
                        image,
                        quantity, 
                        expireDate, 
                        status,
                        notes, 
                        donorName,
                        donarImage
                      };
        console.log(newFood);
        // send data to the server
        
        fetch('https://community-food-bridge-server-by1dafbpu.vercel.app/food', {
          mode: 'no-cors',
          method:'POST',
          headers: {
            'content-type':'application/json'
          },
          body: JSON.stringify(newFood)
        })
        .then(res => res.json())
        .then(data =>{
          console.log(data)
          if(data.insertedId){
            Swal.fire(
              'Food Added to Database!',
              'Add another Food?',
              'success'
            )
          }
        })
      }
    return (
        <div >
          <Helmet>
                   <title>Available Foods</title>
           </Helmet>
        <div className=" container bg-[#F3FCF8] mx-auto p-8 mt-12 rounded-xl">
              <h2 className="text-4xl text-center font-mono">Add a Food</h2>
          <form onSubmit={handleAddFood}>
            <div className=" grid md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Food Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter Food Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Food Image</span>
                </label>
                <input
                  name='image'
                  type="text"
                  placeholder="Enter image url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Food Quantity</span>
                </label>
                <input
                  name='quantity'
                  type="text"
                  placeholder="Number of person can eat"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Expire Date</span>
                </label>
                <input
                  name='expireDate'
                   type="date"
                  placeholder="Enter Price"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Food Status</span>
                </label>
                <input
                  name='status'
                  type="text"
                  defaultValue={'Available'}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Additional Notes</span>
                </label>
                <input
                  name="notes"
                  type="text"
                  placeholder="Type a short notes here"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Donator Name</span>
                </label>
                <input
                  name="donorName"
                  type="text"
                  placeholder="Enter Donator Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Donator Image</span>
                </label>
                <input
                  name="donarImage"
                  type="text"
                  placeholder="Enter Donator Image url"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div>
                  <input className="btn font-mono mt-8 btn-outline btn-success w-full text-xl" type="submit" value="Add Food" />
            </div>
          </form>
        </div>
      </div>

    );
};

export default AddFood;