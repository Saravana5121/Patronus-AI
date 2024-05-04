import { CarFrontIcon, CoffeeIcon, LucideHotel, UserCheck } from "lucide-react";
import Footer from "./Footer";

const Content = () => {
  return (
    <div className="lg:w-3/4 lg:mx-40">
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
              <div>
                <h2 className="font-light text-md lg:leading-7">
                  find me some hotels in the Recoleta area of Buenos Aires and
                  suggest things to see while there?
                </h2>
              </div>
              <div className="flex justify-end">
                <LucideHotel className="text-green-400" />
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
                <UserCheck className="text-purple-400" />
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
                <CarFrontIcon className="text-blue-400" />
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
                <CoffeeIcon className="text-yellow-400" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Content;
