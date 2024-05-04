import {
  HelpCircleIcon,
  HistoryIcon,
  MenuIcon,
  PlusIcon,
  Settings2Icon,
} from "lucide-react";
import { useState } from "react";
const SideBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <aside className="fixed top-0 left-0 flex flex-col items-center justify-between h-screen p-4 bg-neutral-800">
        <div>
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="mb-10 text-neutral-300 ml-2"
          >
            <MenuIcon />
          </button>
          <div className="bg-neutral-100 rounded-full px-2 py-2">
            <div className="flex align-baseline justify-between items-center gap-1">
              <PlusIcon className="text-neutral-800" />
              {openMenu ? (
                <span className="text-sm tracking-tight font-medium px-2">
                  New Chat
                </span>
              ) : null}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-5">
            <HelpCircleIcon className="text-neutral-300 h-6 w-6" />
            {openMenu ? (
              <span className="text-md tracking-tight font-medium text-neutral-300">
                Help
              </span>
            ) : null}
          </div>
          <div className="flex items-center gap-5">
            <HistoryIcon className="text-neutral-300 h-6 w-6" />
            {openMenu ? (
              <span className="text-md tracking-tight font-medium text-neutral-300">
                Activity
              </span>
            ) : null}
          </div>
          <div className="flex items-center gap-5">
            <Settings2Icon className="text-neutral-300 h-6 w-6" />
            {openMenu ? (
              <span className="text-md tracking-tight font-medium text-neutral-300">
                Setting
              </span>
            ) : null}
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
