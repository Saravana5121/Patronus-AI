import SideBar from "./components/SideBar";
import TitleBar from "./components/TitleBar";

const App = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/4">
        <SideBar />
      </div>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <TitleBar />
      </div>
    </div>
  );
};

export default App;
