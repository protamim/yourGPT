import { HiBars3CenterLeft } from "react-icons/hi2";
import { MdKeyboardArrowDown } from "react-icons/md";
import { PiNotePencil } from "react-icons/pi";


const Navbar = ({handleToggle}) => {
  return (
    <>
      <nav className="relative z-30 w-full bg-white px-3 py-1 border-b border-stone-400 md:hidden">
        <div className="flex items-center justify-between">
          <span onClick={handleToggle} className="text-2xl font-semibold cursor-pointer">
            <HiBars3CenterLeft />
          </span>
          {/* Version */}
          <div className="flex items-center flex-nowrap gap-x-1 cursor-pointer transition-all duration-300 ease-in-out px-2 py-1 rounded-md hover:bg-secondary">
            <span className="text-xl font-semibold">
              YourGPT <span className="text-slate-500">3.5</span>
            </span>
            <span>
              <MdKeyboardArrowDown />
            </span>
          </div>
          <span className="text-2xl font-semibold">
            <PiNotePencil />
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
