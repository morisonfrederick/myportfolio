import { IoMenu } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";

import { useState } from "react";
import Navlinks from "./Navlinks";

function Nav() {
  const [buttonClicked, setButtonClicked] = useState(false);
  const togleMenu = () => {
    setButtonClicked((prev) => !prev);
    console.log("button clicked ");
  };
  const closeMenu = () => {
    setButtonClicked(false);
    console.log("close button clicked");
  };
  return (
    <>
      {/* desktop navbar view */}
      <div className="sm:flex hidden">
        <Navlinks closeButton={closeMenu} />
      </div>

      {/* mobile navbar view */}
      <div className="sm:hidden block">
        <IoMenu size={45} onClick={togleMenu} />
      </div>
      <div
        className={`fixed  inset-0 bg-amber-600 transition-transform duration-300 ${
          buttonClicked ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex  sm:flex-col items-center gap-10 pt-5">
          <IoMdCloseCircle size={45} onClick={togleMenu} />
          <Navlinks closeButton={closeMenu} />
        </div>
      </div>
    </>
  );
}

export default Nav;
