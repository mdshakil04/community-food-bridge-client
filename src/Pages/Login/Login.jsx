/* eslint-disable no-unused-vars */
import React from "react";
import login from '../../assets/image/banner/login.jpg'

const Login = () => {
  return (
    <div className="hero my-24 ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-1/2 ">
         <img className=" rounded-xl" src={login} alt="" />
        </div>
        <div className="card shadow-2xl w-1/2 bg-base-100">
            <h2 className="text-4xl text-center mt-4">Please! Login</h2>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
