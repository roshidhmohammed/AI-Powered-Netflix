import React from "react";
import { HEADER_LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div className="absolute  p-5 bg-gradient-to-b from-gray-950 w-full z-50 lg:mb-0 ">
      <img src={HEADER_LOGO} alt="" className="w-40 lg:ml-50"/>
    </div>
  );
};

export default Header;
