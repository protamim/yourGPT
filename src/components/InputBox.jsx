import { useState } from "react";
import { IoMdArrowUp } from "react-icons/io";

const InputBox = () => {
  const [hasText, setHasText] = useState(false);
  const handleHeight = (e) => {
    if (e.target.value) {
      setHasText(true);
    } else {
      setHasText(false);
    }

    e.target.style.height = "";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  
  return (
    <>
      <form className="w-full">
        <div className="w-full relative flex items-center">
          <textarea
            onInput={handleHeight}
            name="userInput"
            placeholder="Message YourGPT..."
            className="w-full rounded-lg border border-stone-300 outline-none resize-none text-left pl-3 pr-12 py-3 h-12 max-h-52 overflow-y-hidden"
          />
          <button
            type="submit"
            disabled={!hasText}
            className="absolute bottom-[6px] right-3 bg-black text-white disabled:bg-stone-300 rounded-md p-2 disabled:opacity-30"
          >
            <IoMdArrowUp className="text-xl" />
          </button>
        </div>
      </form>
    </>
  );
};

export default InputBox;
