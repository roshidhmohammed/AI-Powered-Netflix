import { supportedLanguages } from "../utils/constants";
import { IoClose } from "react-icons/io5";

const MobileMenu = ({ mobileMenuProps }) => {
  const {
    handleMenuTab,
    showGptSearch,
    showProfileModal,
    setShowProfileModal,
    toggleGptSearch,
    handleLanguageChange,
  } = mobileMenuProps;
  const handleProfile = () => {
    setShowProfileModal(!showProfileModal);
    handleMenuTab();
  };
  return (
    <div className=" text-white fixed left-28 h-screen z-[999999] top-0 right-0 bottom-0 bg-gray-900/90  duration-700 transition-all transition-discrete delay-200 ease-linear ">
      <div>
        <div className=" flex justify-end border-b border-gray-800 py-4 px-3">
          <IoClose className=" text-3xl" onClick={handleMenuTab} />
        </div>

        <div className=" mt-3 px-3 flex flex-col gap-3">
          {showGptSearch && (
            <div className=" ">
              <select
                className="text-white bg-slate-700 focus:outline-none   font-bold  rounded-lg "
                onChange={handleLanguageChange}
              >
                {supportedLanguages?.map((language) => (
                  <option
                    className=""
                    key={language?.identifier}
                    value={language?.identifier}
                  >
                    {language?.name}
                  </option>
                ))}
              </select>
            </div>
          )}
          <div className="pl-1">
            <h1 onClick={toggleGptSearch}>
              {showGptSearch ? "Home" : "GPT Search"}
            </h1>
          </div>
          <div className="pl-1">
            <h1 onClick={() => handleProfile()}>Profile</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
