import React from "react";

const Btn = ({ type, onClick }) => {
  // Define different styles based on the type prop
  let btnClasses = "py-2 px-4 rounded focus:outline-none";
  let buttonText = ""

  switch (type) {
    case "add":
      btnClasses += " bg-green-500 text-white";
      buttonText += " +"
      break;
    case "delete":
      btnClasses += " bg-gray-400 text-black";
      buttonText += "delete"
      break;
    case "remove":
      btnClasses += " bg-red-500 text-white";
      buttonText += " -"
      break;
    // Add more cases as needed
    default:
      break;
  }

  return <button onClick={onClick} className={btnClasses}>{buttonText}</button>;
};

export default Btn;
