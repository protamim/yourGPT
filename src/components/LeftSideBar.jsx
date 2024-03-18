import Account from "./Account";
import NewChat from "./NewChat";
import UpgradePlan from "./UpgradePlan";

const LeftSideBar = () => {
  return (
    <>
      <aside className="bg-primary flex flex-col h-screen px-3">
        <div className="flex-1">
          <div className="sticky top-3 left-0">
            <NewChat />
          </div>
        </div>
        <div className="space-y-2 pb-3">
          <UpgradePlan />
          <Account />
        </div>
      </aside>
    </>
  );
};

export default LeftSideBar;
