import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";

function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="flex w-full justify-center">
      SearchSvg
        <SearchBar />
      </div>

      <section className="h-[100vh] bg-gray-700"></section>
      <section className=" h-[100vh]"></section>
      <Footer />
    </div>
  );
}

export default Home;
