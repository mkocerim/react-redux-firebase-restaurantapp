import React from "react";
import { motion } from "framer-motion";
import Logo from "./img/logo.png";
import Avatar from "./img/avatar.png";
import { MdShoppingBasket } from "react-icons/md";

const Header = () => {
  return (
    <div className="fixed z-50 w-screen p-6 px-16">
      {/* dekstop & tablet */}
      <div className="hidden md:flex w-full h-full justify-between">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="logo" className="w-8 object-cover " />
          <p className="text-headingColor text-xl font-bold">City</p>
        </div>

        <div className="flex">
          <ul className="flex items-center gap-8">
            <li className="text-base text-headingColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out">
              Home
            </li>
            <li className="text-base text-headingColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out">
              Menu
            </li>
            <li className="text-base text-headingColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out">
              About Us
            </li>
            <li className="text-base text-headingColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out">
              Service
            </li>
          </ul>
          <div className="relative flex items-center">
            <MdShoppingBasket className="text-textColor text-2xl ml-8 cursor-pointer" />
            <div className="absolute -top-0 -right-3 w-5 h-5 rounded-full bg-cartNumBg">
              <p className="text-xs text-white font-semibold flex justify-center items-center">
                100
              </p>
            </div>
          </div>

          <motion.img
            whileTap={{ scale: 0.4 }}
            src={Avatar}
            alt="userProfile"
            className="w-10 min-w-[40px] h-10 min-h-[40px] ml-8 drop-shadow-xl cursor-pointer"
          />
        </div>
      </div>
      {/* mobile */}
      <div className="flex md:hidden w-full h-full"></div>
    </div>
  );
};

export default Header;
