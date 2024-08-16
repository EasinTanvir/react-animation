import React from "react";
import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className="w-full py-5  sm:px-10 px-5  flex justify-center items-center">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="Logo" width={14} height={18} />
        <div className="flex  flex-1 justify-center max-sm:hidden">
          {navLists.map((list, i) => (
            <div
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
              key={i}
            >
              {list}
            </div>
          ))}
        </div>
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="Search" width={18} height={18} />
          <img src={bagImg} alt="back image" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
