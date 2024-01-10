import React from "react";
import SearchSvg from "../assets/Svg/SearchSvg";

const SearchBar = () => {
  return (
    <div
      dir="rtl"
      className="  mb-6 flex h-[65px] w-[850px] justify-between rounded-full border"
    >
      <div className="hover:bg-[#ebebeb] p-2 pr-10 rounded-full">
        <div className="text-xs font-semibold">איפה</div>
        <input
          type="text"
          placeholder="חיפוש יעדים"
          className="text-sm font-normal"
        />
      </div>
      <div className="hover:bg-[#ebebeb] p-2 pr-10 rounded-full">
        <div className="text-xs font-semibold">צ'ק-אין</div>
        <input
          type="text"
          placeholder="הוספת תאריכים"
          className="text-sm font-normal"
        />
      </div>
      <div className="hover:bg-[#ebebeb] p-2 pr-10 rounded-full">
        <div className="text-xs font-semibold">צ'ק אאוט</div>
        <input
          type="text"
          placeholder="הוספת תאריכים"
          className="text-sm font-normal"
        />
      </div>
      <div className="hover:bg-[#ebebeb] p-2 pr-10 rounded-full">
        <div className="text-xs font-semibold">מי</div>
        <input
          type="text"
          placeholder="הוספת אורחים"
          className="text-sm font-normal"
        />
      </div>
     <SearchSvg/>
    </div>
  );
};

export default SearchBar;
