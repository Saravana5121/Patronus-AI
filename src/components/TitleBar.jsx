import logo from "../assets/logo.png";
import avatar from "../assets/avatar.avif";
const TitleBar = () => {
  return (
    <div className="lg:ml-20 lg:my-4 mb-5 lg:mb-10 lg:border border-neutral-300 lg:m-2 bg-neutral-200 lg:rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="h-15 w-20" />
          <h1 className="font-semibold text-neutral-600 text-xl lg:text-2xl text-center">
            Patronus <span className="text-orange-400">AI</span>
          </h1>
        </div>
        <img
          src={avatar}
          alt="avatar"
          className="h-12 w-12 rounded-full ring-2 ring-orange-500 m-6"
        />
      </div>
    </div>
  );
};

export default TitleBar;
