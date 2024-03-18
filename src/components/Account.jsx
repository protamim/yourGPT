const Account = () => {
  return (
    <>
      <div className="flex items-center gap-x-2 cursor-pointer transition-all duration-300 ease-in-out px-2 py-1 rounded-md hover:bg-secondary">
        <div className="bg-slate-400 p-1 rounded-full w-8 h-8 flex flex-col items-center justify-center">
          <span className="text-sm text-white">S1</span>
        </div>
        <div className="text-base">
          <h4 className="text-sm">Tamim Talukdar</h4>
        </div>
      </div>
    </>
  );
};

export default Account;
