import LeftSideBar from "./components/LeftSideBar";
import MainArea from "./components/MainArea";


const App = () => {
  return (
    <>
      <div className="flex items-center">
        <LeftSideBar />
        <MainArea />
      </div>
    </>
  );
};

export default App;
