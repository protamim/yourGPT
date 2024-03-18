import { useState } from "react";
import LeftSideBar from "./components/LeftSideBar";
import MainArea from "./components/MainArea";
import Navbar from "./components/Navbar";
import { MdClose } from "react-icons/md";

const App = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(toggle ? false : true);
  };

  return (
    <>
      <div className="h-full md:flex items-center relative">
        {/* Navbar */}
        <div className="absolute top-0 left-0 w-full">
          <Navbar handleToggle={handleToggle} />
        </div>

        {/* Left side bar */}
        <div
          className={`absolute top-0 z-[999] transition-all duration-300 ease-in-out md:static ${
            toggle ? "left-0" : "-left-[110%]"
          }`}
        >
          {/* Overlay */}
          <div
            onClick={handleToggle}
            className={`fixed w-[calc(100%-235px)] h-full bg-black opacity-70 transition-all duration-300 ease-in-out ${
              toggle ? "right-0" : "-left-[110%]"
            }`}
          >
            <button className="mt-3 ml-3 p-2 border border-white">
              <MdClose className="text-2xl text-white" />
            </button>
          </div>

          <LeftSideBar />
        </div>

        {/* Main Area */}
        <div className="h-screen w-full">
          <MainArea />
        </div>
      </div>
    </>
  );
};

export default App;
