import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdArrowUp } from "react-icons/io";

const MainArea = () => {

    const handleHeight = (e)=> {
        console.dir(e.target);
        e.target.style.height = '';
        e.target.style.height = `${e.target.scrollHeight}px`
    }
  return (
    <>
      <main className="bg-white max-w-full w-full h-screen pl-2 flex flex-col items-start justify-between">
        {/* Version */}
        <div className="flex items-center gap-x-1 mt-3 cursor-pointer transition-all duration-300 ease-in-out px-2 py-1 rounded-md hover:bg-secondary">
          <span className="text-xl font-semibold">
            YourGPT <span className="text-slate-500">3.5</span>
          </span>
          <span>
            <MdKeyboardArrowDown />
          </span>
        </div>

        {/* Help */}
        <div className="flex flex-col gap-y-2 items-center w-full">
          <img
            src="yourGPT.png"
            className="w-12 h-12 object-contain bg-white p-1 rounded-full border border-stone-200"
          />
          <h4 className="text-3xl font-semibold text-black">
            How can I help you today?
          </h4>
        </div>

        <div className="max-w-screen-lg mx-auto">
          {/* Demo Prompt */}
          <div className="grid grid-cols-2 gap-y-2 gap-x-4">
            {/* Prompt 1 */}
            <div className="group border border-stone-300 p-3 rounded-lg flex items-center gap-x-6 justify-between cursor-pointer transition-all duration-300 ease-in-out hover:bg-stone-100">
              <div>
                <p className="text-black text-sm font-medium">
                  Suggest fun activities
                </p>
                <span className="text-stone-500 text-sm">
                  to help me make friends in a new city
                </span>
              </div>
              {/* Icon */}
              <span className="bg-white p-1 rounded-lg transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                <IoMdArrowUp />
              </span>
            </div>

            {/* Prompt 2 */}
            <div className="group border border-stone-300 p-3 rounded-lg flex items-center gap-x-6 justify-between cursor-pointer transition-all duration-300 ease-in-out hover:bg-stone-100">
              <div>
                <p className="text-black text-sm font-medium">
                  Recommend a dish
                </p>
                <span className="text-stone-500 text-sm">
                  to bring to a potluck
                </span>
              </div>
              {/* Icon */}
              <span className="bg-white p-1 rounded-lg transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                <IoMdArrowUp />
              </span>
            </div>

            {/* Prompt 3 */}
            <div className="group border border-stone-300 p-3 rounded-lg flex items-center gap-x-6 justify-between cursor-pointer transition-all duration-300 ease-in-out hover:bg-stone-100">
              <div>
                <p className="text-black text-sm font-medium">
                  Show me a code snippet
                </p>
                <span className="text-stone-500 text-sm">
                  of a website&apos;s sticky header
                </span>
              </div>
              {/* Icon */}
              <span className="bg-white p-1 rounded-lg transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                <IoMdArrowUp />
              </span>
            </div>

            {/* Prompt 4 */}
            <div className="group border border-stone-300 p-3 rounded-lg flex items-center gap-x-6 justify-between cursor-pointer transition-all duration-300 ease-in-out hover:bg-stone-100">
              <div>
                <p className="text-black text-sm font-medium">
                  Write a thank-you note
                </p>
                <span className="text-stone-500 text-sm">
                  to my interviewer
                </span>
              </div>
              {/* Icon */}
              <span className="bg-white p-1 rounded-lg transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                <IoMdArrowUp />
              </span>
            </div>
          </div>

          {/* User Input Area */}
          <div className="mt-8">
            <form className="w-full">
              <div className="w-full relative">
                <textarea 
                onInput={handleHeight}
                  name="userInput"
                  placeholder="Message YourGPT..."
                  className="w-full rounded-lg border border-stone-300 outline-none resize-none text-left p-2 h-12"
                />
                <button type="submit" className="absolute top-1/2 right-0 -translate-y-1/2">
                  <IoMdArrowUp />
                </button>
              </div>
            </form>
          </div>

          {/* condition */}
          <div className="text-center my-2">
            <p className="text-sm text-stone-400">
              YourGPT can make mistakes. Consider checking important
              information.
            </p>
          </div>

        </div>
      </main>
    </>
  );
};

export default MainArea;
