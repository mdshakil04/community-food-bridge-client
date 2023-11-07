/* eslint-disable no-unused-vars */
import React from 'react';

const AddFood = () => {
    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const ratting = form.ratting.value;
        const descriptions = form.descriptions.value;
        const image = form.image.value;
        const newProduct = {name, brand, type, price, ratting, descriptions, image}
        console.log(newProduct);}
    return (
        <div >
        <div className=" container bg-[#F3FCF8] mx-auto p-8 mt-12 rounded-xl">
              <h2 className="text-4xl text-center font-mono">Add a Food</h2>
             
          <form onSubmit={handleAddProduct}>
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
                  name='brand'
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
                  name='type'
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
                  name='price'
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
                  name='ratting'
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
                  name="descriptions"
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
                  name="descriptions"
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
                  name="descriptions"
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