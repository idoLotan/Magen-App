import React from "react";

const AddItem = ({
  setItemName,
  setItemCount,

  onClick,
}) => {
  const handleNameChange = (e) => {
    setItemName(e.target.value);
  };

  const handleCountChange = (e) => {
    setItemCount(e.target.value);
  };

  return (
    <div className="mb-5 flex flex-col items-center gap-3">
      <div>
        <input
          onChange={handleNameChange}
          type="text"
          className="h-10 w-40 border"
          placeholder="name.."
        />
        <input
          onChange={handleCountChange}
          type="text"
          className="h-10 w-40 border"
          placeholder="count.."
        />
      </div>

      <button
        onClick={onClick}
        className="h-10 w-40 rounded-lg bg-slate-400 font-semibold"
      >
        Add
      </button>
    </div>
  );
};

export default AddItem;
