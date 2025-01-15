import { MdOutlineSmartphone } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import Organisation from "../assets/Beratung-fuer-Organisation.webp";
import meeting from "../assets/meeting.jpg";

function Features() {
  return (
    <>
      <div id="FEATURES" className="bg-[#fff] flex flex-col items-center p-4 gap-y-8 md:flex-row rounded-sm">
        <div className="md:w-1/2 md:flex md:flex-col md:items-start gap-y-6">
          <div>
            <h1 className="text-4xl text-black font-bold text-center md:text-left">
              Our Software Features
            </h1>
          </div>
          <div>
            <p className="text-lg text-center md:text-left text-black">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="flex items-center space-x-4 space-y-4 md:space-x-7">
            <span className="bg-[#28a7e9] rounded-full p-4">
              <MdOutlineSmartphone className="text-[#ffff] text-2xl " />
            </span>
            <p className="text-center md:text-left text-black text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
          </div>

          <div className="flex items-center space-x-4 space-y-4 md:space-x-7">
            <span className="bg-[#28a7e9] rounded-full p-4">
              <FaCode className="text-[#ffff] text-2xl" />
            </span>
            <p className="text-center md:text-left text-black">
              Quis autem velis reprehenderit et quis voluptate velit esse
            </p>
          </div>
        </div>

        <div className="md:w-1/2 md:flex md:justify-center mt-8 md:mt-0">
          <img
            height={450}
            width={450}
            src={Organisation}
            alt="Laptop"
            className="max-w-full h-auto rounded-xl hover:shadow-lg hover:scale-105 duration-300 transition-all"
          />
        </div>
      </div>

      <div className="bg-[#ffff] flex flex-col items-center p-4 gap-y-8 md:flex-row">
        <div className="md:w-1/2 md:flex md:justify-center mt-8 md:mt-0">
          <img
            height={550}
            width={550}
            src={meeting}
            alt="Laptop"
            className="max-w-full h-auto rounded-xl hover:shadow-lg hover:scale-105 duration-300 transition-all"
          />
        </div>
        <div className="md:w-1/2 md:flex md:flex-col md:items-start gap-y-6">
          <div>
            <h1 className="text-4xl text-black font-bold text-center md:text-left">
              Our Software Features
            </h1>
          </div>
          <div>
            <p className="text-lg text-center md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="flex items-center space-x-4 md:space-x-7">
            <span className="bg-[#28a7e9] rounded-full p-4">
              <MdOutlineSmartphone className="text-white text-2xl" />
            </span>
            <p className="text-center md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
          </div>

          <div className="flex items-center space-x-4 md:space-x-7">
            <span className="bg-[#28a7e9] rounded-full p-4">
              <FaCode className="text-white text-2xl" />
            </span>
            <p className="text-center md:text-left">
              Quis autem velis reprehenderit et quis voluptate velit esse
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
