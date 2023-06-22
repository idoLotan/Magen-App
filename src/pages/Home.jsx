import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import HeroPicture from "../assets/images/xcc-min.png";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <div>
        <nav className="bg-green-300  mr-6 mt-3 ml-6  rounded-full">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xxl px-4 md:px-6 py-2.5">
            <a href="/" className="flex items-center step-1 max-sm:mb-3">
              <span className="self-center text-xl font-semibold whitespace-nowrap ">
                Dialogue
              </span>
            </a>
            <div className="flex items-center max-sm:w-full pt-2">
              <ul className="flex flex-row flex-wrap   mt-0 mr-6   font-medium nav-step-3">
                <li>
                  <a
                    href="/home"
                    className="text-lg	 transition-all hover:-translate-y-0.5 hover:bg-[#c0f5b7] hover:text-black py-2 px-3 rounded-full hover:shadow-[0_10px_25px_-15px_rgba(0,0,0,0.4)]"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <div class="w-[1.5px] h-8 bg-black ml-1 mr-1"></div>
                <li>
                  <a
                    href="/login"
                    className=" text-lg transition-all hover:-translate-y-0.5 hover:bg-[#c0f5b7] hover:text-black py-2 px-3 rounded-full hover:shadow-[0_10px_25px_-15px_rgba(0,0,0,0.4)]"
                    aria-current="page"
                  >
                    Login
                  </a>
                </li>
                <li>
                  <a
                    href="/signup"
                    className="text-lg transition-all hover:-translate-y-0.5 hover:bg-[#c0f5b7] hover:text-black py-2 px-3 rounded-full hover:shadow-[0_10px_25px_-15px_rgba(0,0,0,0.4)]"
                    aria-current="page"
                  >
                    SignUp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <section className="bg-white h-[100vh]">
        <div className=" p-[5vw]">
          <div className="max-md:w-full">
            <div className="flex justify-between">
              <div className="flex flex-col mt-11 pt-12">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl  text-left">
                  Build connections with Dialogue
                </h1>

                <p className="max-w-2xl mb-6 font-light  lg:mb-8 md:text-lg lg:text-xl text-gray-600 text-left">
                  Connect, communicate, and create lasting conversations with
                  our seamless and intuitive chat platform
                  {/* From checkout to global sales tax compliance, companies around the
            world use Flowbite to simplify their payment stack. */}
                </p>
                <div className="mt-5 flex">
                  <a
                    href="/getStarted"
                    className="inline-flex items-center  px-5 py-3  text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-900 "
                  >
                    Get started
                    <svg
                      className="w-5 h-5 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>

              <img src={HeroPicture} alt="" className="w-[35vw]" />
            </div>
          </div>
          <div className="w-1/2 max-md:w-full  "></div>
        </div>
      </section>
      <section className="">
        <div className="bg-gray-200 h-[50vw] flex justify-around">
          <div className="w-[300px]  h-[90vh] bg-blue-700 relative mt-4">
            <div className="w-[40vw]  h-[75vh]  bg-white  relative top-20  right-10 max-w-2xl">
              <h1 className=" pl-20 pt-[5vh] max-w-2xl  text-7xl font-bold  tracking-tight leading-none  text-gray-400 text-left">
                01
              </h1>
              <h1 className=" pl-20  pt-5 max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-5xl text-green-600 text-left">
                Create an account or sign in to an existing one
              </h1>
              <h3 className=" pl-20  pt-5 max-w-2xl mb-4 text-xl   tracking-tight leading-none  text-black text-left">
                Create an account, choose your username, put in your email and
                password. After signining in you will be able to choose your
                profile picture.
              </h3>
              <div className="w-[150px]  h-[150px]  bg-green-300   relative right-12 rounded-full"></div>
            </div>
          </div>
          <div className="w-[40vw]  h-[75vh]  bg-white  relative top-20 max-w-2xl mt-4">
            <h1 className=" pl-20 pt-[5vh] max-w-2xl  text-7xl font-bold  tracking-tight leading-none  text-gray-400 text-left">
              02
            </h1>
            <h1 className="pl-20  pt-5 max-w-2xl mb-4 text-5xl font-bold  tracking-tight leading-none  text-green-600 text-left">
              Join a chat room or create your own
            </h1>
            <h3 className=" pl-20  pt-5 max-w-2xl mb-4 text-xl   tracking-tight leading-none  text-black text-left">
              Choose a chat room of your liking or create a completly new one.
              Every room is created by the community and the creator can choose
              the name, the room image and the maximum amount of people who can
              join.
            </h3>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default Home;
