import React, { useState } from "react";

const NavBar = () => {
  const [navStats, setNavStats] = useState(false);

  const menuClicked = () => {
    setNavStats(!navStats);
  };
  return (
    // whole nav-bar
    <div className="text-white flex items-center justify-between max-w-[1280px] h-24 mx-auto p-6 border-b border-gray-600">
      {/* Logo name */}
      <h1 className="text-3xl font-bold w-full">M. Solutions</h1>

      <ul className="flex hidden md:flex">
        <li className="p-5 ">Home</li>
        <li className="p-5 ">Projects</li>
        <li className="p-5 ">About</li>
        <li className="p-5">Contact</li>
      </ul>

      <div
        className="text-4xl  flex items-center cursor-pointer md:hidden"
        onClick={menuClicked}
      >
        {!navStats ? (
          <ion-icon name="close-circle-outline"></ion-icon>
        ) : (
          <ion-icon name="menu-outline"></ion-icon>
        )}
      </div>

      {/* Mobile Nav items */}
      <ul
        className={
          !navStats
            ? "fixed top-0 left-0 pt-24 p-10 w-[60%] border-r border-gray-600 bg-gray-900 h-full text-2xl ease-in-out duration-500 "
            : "fixed ml-[-100%]"
        }
      >
        <li className="p-5 border-b border-gray-600">Home</li>
        <li className="p-5 border-b border-gray-600">Projects</li>
        <li className="p-5 border-b border-gray-600">About</li>
        <li className="p-5">Contact</li>
      </ul>
    </div>
  );
};

export default NavBar;
