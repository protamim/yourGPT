import { PiNotePencil } from "react-icons/pi";

const NewChat = () => {
  return (
    <>
      <div className="flex items-center justify-between cursor-pointer transition-all duration-300 ease-in-out px-2 py-1 rounded-md hover:bg-secondary">
        <div className="flex items-center gap-x-1">
          <img
            src="yourGPT.png"
            className="w-8 h-8 object-contain bg-white p-1 rounded-full border border-stone-200"
          />
          <span className="text-black font-medium text-sm">New Chat</span>
        </div>
        <span className="text-xl">
          <PiNotePencil />
        </span>
      </div>
    </>
  );
};

export default NewChat;
