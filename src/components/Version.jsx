import { MdKeyboardArrowDown } from "react-icons/md";

const Version = () => {
  return (
    <>
      <div className="flex items-center gap-x-1 mt-3 cursor-pointer transition-all duration-300 ease-in-out px-2 py-1 rounded-md hover:bg-secondary">
        <span className="text-xl font-semibold">
          YourGPT <span className="text-slate-500">3.5</span>
        </span>
        <span>
          <MdKeyboardArrowDown />
        </span>
      </div>
    </>
  );
};

export default Version;
