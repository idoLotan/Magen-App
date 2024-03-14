import React from "react";
import LogoSvg from "../assets/Svg/LogoSvg";
import GlobeSvg from "../assets/Svg/GlobeSvg";
import LOGO from "../assets/img/LOGO.jpg";

const Navbar = () => {
  return (
    <navbar className="flex w-[97.1%] justify-between p-6">
      <div className="flex items-center gap-2">
      <GlobeSvg />
        <a href="" dir="rtl" className="text-sm font-semibold">
    ניהול מחסן חכם
        </a>
       
      </div>

     <img  className="w-60" src={LOGO} alt="" />
    </navbar>
  );
};

export default Navbar;
