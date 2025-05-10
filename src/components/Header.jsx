import React, { useEffect, useState } from "react";
import { HEADER_LOGO } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../slices/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userDetails = useSelector((state) => state.user);
  const [showProfileModal, setShowProfileModal] = useState(false);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch(() => {});
  };

  useEffect(() => {
    const unSubscibe = onAuthStateChanged(auth, (user) => {
      if (user) {
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
      } else {
        dispatch(removeUser);
        navigate("/");
      }
    });
    return () => unSubscibe();
  }, []);

  return (
    <div className=" fixed p-5 bg-gradient-to-b from-gray-950 w-full z-50 lg:mb-0  flex justify-between pr-10">
      <img
        src={HEADER_LOGO}
        alt=""
        className={`w-40  ${!userDetails && "lg:ml-50"}`}
      />

      {userDetails && (
        <div>
          <img
            src={userDetails?.photoURL}
            alt=""
            className=" w-10 h-10 hover:cursor-pointer"
            onClick={() => setShowProfileModal(!showProfileModal)}
          />

          {showProfileModal && (
            <div className=" bg-black  z-50 absolute top-16 right-5 rounded-lg text-white p-5 shadow-2xl shadow-gray-400">
              <div>
                <h1 className="mb-2">
                  <span className=" mr-2 font-bold  text-gray-400">Name:</span>
                  {userDetails?.displayName}
                </h1>
                <h1 className=" mb-2">
                  <span className=" mr-2 font-bold  text-gray-400">Email:</span>
                  {userDetails?.email}
                </h1>
                <div className=" flex justify-end ">
                  <button
                    onClick={handleSignOut}
                    className=" bg-red-700 hover:bg-red-600 hover:cursor-pointer px-2 py-1 mt-5   rounded-lg"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
