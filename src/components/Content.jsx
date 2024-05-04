import { ImageIcon, LucideHotel, Mic, Mic2, Mic2Icon } from "lucide-react";

const Content = () => {
  return (
    <div className="lg:w-3/4 mx-5 lg:mx-40">
      <div className="flex flex-col justify-between px-3 gap-y-5">
        <div>
          <h1 className="text-2xl lg:text-4xl font-medium bg-gradient-to-l from-blue-300  to-orange-400 bg-clip-text text-transparent">
            Hello, Dev.
          </h1>
          <h2 className="text-xl lg:text-2xl font-light text-neutral-600 tracking-tight">
            How can i help you today?
          </h2>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="bg-neutral-100 p-6 rounded-md">
            <div className="flex flex-col gap-6">
              <h2 className="font-light text-md lg:leading-7">
                find me some hotels in the Recoleta area of Buenos Aires and
                suggest things to see while there?
              </h2>
              <div className="flex justify-end">
                <LucideHotel className="text-orange-400" />
              </div>
            </div>
          </div>
          <div className="bg-neutral-100 p-6 rounded-md">
            <div className="flex flex-col gap-6">
              <h2 className="font-light text-md lg:leading-7">
                find me some hotels in the Recoleta area of Buenos Aires and
                suggest things to see while there?
              </h2>
              <div className="flex justify-end">
                <LucideHotel className="text-orange-400" />
              </div>
            </div>
          </div>
          <div className="bg-neutral-100 p-6 rounded-md">
            <div className="flex flex-col gap-6">
              <h2 className="font-light text-md lg:leading-7">
                find me some hotels in the Recoleta area of Buenos Aires and
                suggest things to see while there?
              </h2>
              <div className="flex justify-end">
                <LucideHotel className="text-orange-400" />
              </div>
            </div>
          </div>
          <div className="bg-neutral-100 p-6 rounded-md">
            <div className="flex flex-col gap-6">
              <h2 className="font-light text-md lg:leading-7">
                find me some hotels in the Recoleta area of Buenos Aires and
                suggest things to see while there?
              </h2>
              <div className="flex justify-end">
                <LucideHotel className="text-orange-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-3 p-5 fixed bottom-0 z-50 mb-2 bg-neutral-200 rounded-full">
          <input
            type="text"
            placeholder="Enter you prompt"
            className="bg-neutral-200 focus:outline-none focus:border-black"
          />

          <ImageIcon className="text-orange-400" />
          <Mic className="text-orange-400" />
        </div>
      </div>
    </div>
  );
};

export default Content;
