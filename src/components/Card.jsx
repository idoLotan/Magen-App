import React, { useState } from "react";
import Btn from "./Btn";

const Card = ({ item, deleteItem }) => {
  const [count, setCount] = useState(0);

  console.log(item)
  
  return (
    <div className="flex h-20 w-full items-center  rounded-lg border bg-white p-5  justify-between">
      <div className="">
        <Btn type={"delete"}  onClick={() => deleteItem(item.Key)}></Btn>
        <Btn type={"remove"} onClick={() => setCount(count - 1)}></Btn>
        <Btn type={"add"} onClick={() => setCount(count + 1)}></Btn>
      </div>
      <div>{item.itemName}</div>
      <div>{count}</div>
    </div>
  );
};

export default Card;

// primary
// secondary
// danger
