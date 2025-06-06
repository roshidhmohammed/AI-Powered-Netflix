import { useEffect, useState } from "react";
import { HEADER_LOGO, supportedLanguages } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../slices/userSlice";
import { toggleGptSearchView } from "../slices/gptSlice";
import { changeLanguage } from "../slices/configSlice";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userDetails = useSelector((state) => state.user);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

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
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unSubscibe();
  }, []);

  const toggleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleMenuTab = () => {
    setShowMenu(!showMenu);
  };

  const mobileMenuProps = {
    handleMenuTab,
    showGptSearch,
    showProfileModal,
    setShowProfileModal,
    toggleGptSearch,
    handleLanguageChange,
  };

  return (
    <div className=" fixed px-5 py-3 bg-gradient-to-b from-gray-950 w-full z-50 lg:mb-0  flex  items-center md:flex-row justify-between md:pr-10">
      <img
        src={HEADER_LOGO}
        alt=""
        className={`w-40  ${!userDetails && "lg:ml-50"}`}
      />

      {userDetails && (
        <>
          <div className="hidden md:flex  md:gap-5 items-center">
            {showGptSearch && (
              <div className="md:m-5">
                <select
                  className="text-white  focus:outline-none  bg-gray-800 font-bold p-2 rounded-lg "
                  onChange={handleLanguageChange}
                >
                  {supportedLanguages?.map((language) => (
                    <option
                      key={language?.identifier}
                      value={language?.identifier}
                    >
                      {language?.name}
                    </option>
                  ))}
                </select>
              </div>
            )}
            <div>
              <button
                className=" p-2 md:px-5  bg-fuchsia-800 hover:bg-fuchsia-700 hover:cursor-pointer font-bold text-white rounded-lg m-5"
                onClick={toggleGptSearch}
              >
                {showGptSearch ? "Home" : "GPT Search"}
              </button>
            </div>
            <img
              src={userDetails?.photoURL}
              alt=""
              className=" w-10 h-10 hover:cursor-pointer"
              onClick={() => setShowProfileModal(!showProfileModal)}
            />
            {showProfileModal && (
              <div className=" bg-black  z-50 absolute top-16 right-5 rounded-lg text-white p-5 shadow-md shadow-gray-900">
                <div>
                  <h1 className="mb-2">
                    <span className=" mr-2 font-bold  text-gray-400">
                      Name:
                    </span>
                    {userDetails?.displayName}
                  </h1>
                  <h1 className=" mb-2">
                    <span className=" mr-2 font-bold  text-gray-400">
                      Email:
                    </span>
                    {userDetails?.email}
                  </h1>
                  <div className=" flex justify-between ">
                    <button
                      onClick={() => setShowProfileModal(false)}
                      className=" bg-slate-700 hover:bg-slate-600 text-white hover:cursor-pointer px-2 py-1 mt-5   rounded-lg"
                    >
                      Close
                    </button>
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
          <div className="block md:hidden">
            <GiHamburgerMenu
              className=" text-white text-xl"
              onClick={() => handleMenuTab()}
            />
            {showProfileModal && (
              <div className=" bg-black  z-50 absolute top-16 right-5 rounded-lg text-white p-5 shadow-md shadow-gray-900">
                <div>
                  <h1 className="mb-2">
                    <span className=" mr-2 font-bold  text-gray-400">
                      Name:
                    </span>
                    {userDetails?.displayName}
                  </h1>
                  <h1 className=" mb-2">
                    <span className=" mr-2 font-bold  text-gray-400">
                      Email:
                    </span>
                    {userDetails?.email}
                  </h1>
                  <div className=" flex justify-between ">
                    <button
                      onClick={() => setShowProfileModal(false)}
                      className=" bg-slate-700 hover:bg-slate-600 text-white hover:cursor-pointer px-2 py-1 mt-5   rounded-lg"
                    >
                      Close
                    </button>
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
            {showMenu && <MobileMenu mobileMenuProps={mobileMenuProps} />}
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
