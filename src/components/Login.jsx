import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { MAIN_PAGE_BACKGROUND_IMAGE, USER_AVATAR } from "../utils/constants";
import { validationData } from "../utils/validation";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../slices/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setErrorMessage("");
  }, [isSignInForm]);
  const handleForm = (e) => {
    e.preventDefault();
    const validationResult = validationData(
      email.current.value,
      password.current.value,
      fullName.current === null ? "" : fullName.current.value,
      isSignInForm
    );
    setErrorMessage(validationResult);

    if (validationResult) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredentials) => {
          const user = userCredentials.user;
          updateProfile(user, {
            displayName: fullName.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch(() => {
          setErrorMessage("Something went wrong. Please try again later!");
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredentials) => {
          const user = userCredentials.user;
          const { uid, email, displayName, photoURL } = user;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            })
          );
          navigate("/browse");
        })
        .catch(() => {
          setErrorMessage("Please enter the valid email and password");
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className=" lg:relative   ">
      <Header />
      <div className=" absolute right-0 left-0 lg:block hidden">
        <img
          src={MAIN_PAGE_BACKGROUND_IMAGE}
          alt=""
          className=" object-cover brightness-50 h-screen w-full"
        />
      </div>
      <div className=" lg:bg-gray-950/80 bg-black absolute lg:mt-40 mt-0    lg:w-4/12 right-0 left-0 lg:my-40 lg:py-10  py-40 mx-auto lg:p-12 md:p-10 p-5 text-white rounded-lg">
        <form onSubmit={(e) => handleForm(e)} className="">
          <h1 className=" text-3xl font-bold mb-5">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={fullName}
              type="text"
              placeholder="Full Name"
              className="p-3  bg-gray-800 mb-5 rounded-lg w-full"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Enter your email"
            className="p-3  bg-gray-800 mb-5 rounded-lg w-full"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 bg-gray-800 mb-2 rounded-lg w-full"
          />

          <p className="text-red-500 font-bold ">{errorMessage}</p>
          <button
            type="submit"
            className="p-3 rounded-lg w-full font-bold  bg-red-700 mt-5  hover:cursor-pointer hover:bg-red-800  z-50"
          >
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
