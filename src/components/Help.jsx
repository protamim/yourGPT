const Help = () => {
  return (
    <>
      <div className="flex flex-col gap-y-2 items-center justify-center">
        <img
          src="yourGPT.png"
          className="w-12 h-12 object-contain bg-white p-1 rounded-full border border-stone-200"
        />
        <h4 className="text-3xl font-semibold text-black text-center">
          How can I help you today?
        </h4>
      </div>
    </>
  );
};

export default Help;
