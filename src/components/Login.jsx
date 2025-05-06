import React, { useState } from "react";
import Header from "./Header";
import { MAIN_PAGE_BACKGROUND_IMAGE } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className=" lg:relative   ">
      <Header />
      <div className=" absolute lg:block hidden">
        <img
          src={MAIN_PAGE_BACKGROUND_IMAGE}
          alt=""
          className=" object-cover brightness-50"
        />
      </div>
      <div className=" lg:bg-gray-950/80 bg-black absolute lg:mt-40 mt-0    lg:w-4/12 right-0 left-0 lg:my-40 lg:py-10  py-40 mx-auto lg:p-12 md:p-10 p-5 text-white rounded-lg">
        <form className="">
          <h1 className=" text-3xl font-bold mb-5">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-3  bg-gray-800 mb-5 rounded-lg w-full"
            />
          )}
          <input
            type="text"
            placeholder="Enter your email"
            className="p-3  bg-gray-800 mb-5 rounded-lg w-full"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 bg-gray-800 mb-2 rounded-lg w-full"
          />
          <button className="p-3 rounded-lg w-full font-bold  bg-red-700 mt-5  hover:cursor-pointer hover:bg-red-800  z-50">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <h1 className="  text-center mt-5 font-bold  underline text-gray-50 hover:text-gray-400 hover:cursor-pointer ">
            Forgot Password?
          </h1>

          <div className=" flex mt-5 text-white font-bold items-center ">
            <input type="checkbox" className="mt-1" />
            <label className="ml-2 text-lg"> Remember me</label>
          </div>

          <div className=" mt-5 flex mb-10">
            <h1 className=" text-gray-400 font-bold ">
              {isSignInForm ? "New to Netflix" : "Already a User"}?
            </h1>
            <span
              onClick={() => toggleSignInForm()}
              className=" text-white hover:underline hover:cursor-pointer ml-1 hover:text-gray-300 brightness-200"
            >
              {isSignInForm ? "Sign up now." : "Sign In."}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
