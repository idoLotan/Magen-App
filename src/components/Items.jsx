import React from "react";
import Card from "./Card";

const Items = ({ items, deleteItem }) => {

    console.log(items);
    
  return (
    <div>
      {items.map((item) => (
        <Card item={item}  key={item.itemId} deleteItem={deleteItem}/>
      ))}
    </div>
  );
};

export default Items;
