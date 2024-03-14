import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import AddItem from "../components/AddItem";
import Items from "../components/Items";



function Home() {
  const [itemName,  setItemName] = useState("")
  const [itemCount,  setItemCount] = useState(0)
  const [items, setItems] = useState([])


  console.log("4455s")


const addItems = () => {
  const id = Date.now()
  const NewItem = {itemName: itemName, itemCount:itemCount, itemId: id } 
  setItems([...items, NewItem]);
};



const deleteItem = (id) => {
  console.log("id", id);
  console.log("task.key", items);
  setItems(
    items.filter((item) => {
      return item.Key !== id;
    })
  );
  
};


  return (
    <div>
      <Header />
      <Navbar />
      <div className="flex w-full justify-center flex-col items-center">
        <SearchBar />
        <AddItem onClick={addItems} setItemName={setItemName} setItemCount={setItemCount}/>
      </div>
  
      <section className="h-[100vh] bg-gray-700 ">
      <Items items={items}  deleteItem={deleteItem}/>
    
      </section>
      <section className=" h-[100vh]"></section>
      <Footer />
    </div>
  );
}

export default Home;
