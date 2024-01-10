import React from "react";
import LogoSvg from "../assets/Svg/LogoSvg";
import GlobeSvg from "../assets/Svg/GlobeSvg";

const Navbar = () => {
  return (
    <navbar className="flex w-[97.1%] justify-between p-6">
      <div className="flex items-center gap-2">
      <GlobeSvg />
        <a href="" dir="rtl" className="text-sm font-semibold">
          להציע את הבית ב-Airbnb
        </a>
       
      </div>

      <LogoSvg />
    </navbar>
  );
};

export default Navbar;
