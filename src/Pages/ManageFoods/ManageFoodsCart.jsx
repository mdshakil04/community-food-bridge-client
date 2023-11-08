/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const ManageFoodsCart = ({singleFood}) => {
    const {name,
        image,
        quantity, 
        expireDate, 
        status,
        notes, 
        donorName,
        donarImage} = singleFood; 
  return (
    <div>
      <div className="">
        <table className="table">
          <tbody>
            <tr className=" flex justify-between">
              <td className=" text-2xl font-bold">{name}</td>
              <td className="">{status}</td>
              <td>{donorName}</td>
              <td>{notes}</td>
              <td>No of Person can eat: {quantity}</td>
              <button className=" btn btn-outline btn-warning">Delete</button>
              <button className=" btn btn-outline btn-info">Update</button>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageFoodsCart;
