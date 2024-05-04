import Content from "./components/Content";
import SideBar from "./components/SideBar";
import TitleBar from "./components/TitleBar";

const App = () => {
  return (
    <div className="flex h-screen">
      <div className="">
        <SideBar />
      </div>
      <div className="flex flex-col w-full lg:max-w-8xl">
        <TitleBar />
        <Content />
      </div>
    </div>
  );
};

export default App;
