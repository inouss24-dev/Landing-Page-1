import laptop from "../assets/Laptop.webp";

import { FaArrowAltCircleDown } from "react-icons/fa";

function Download() {
  return (
    <>
      <div  id="DOWNLOAD" className="bg-[#fff] flex flex-col items-center p-4 gap-y-8 md:flex-row rounded-sm">
        {/* Texte et description */}
        <div className="md:w-1/2 md:flex md:flex-col md:items-start gap-y-6">
          <div>
            <h1 className="text-4xl text-black font-bold text-center md:text-left">
              Download Our Software
            </h1>
          </div>
          <div>
            <p className="text-lg text-center md:text-left text-black">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>

          {/* Bouton de téléchargement */}
          <div className="flex justify-center mt-4 md:mt-6">
            <a
              href="#"
              className="flex items-center text-[#f8f8f8] bg-[#28a7e9] p-4 rounded-md text-xl shadow-md hover:shadow-lg transition-all"
            >
              <FaArrowAltCircleDown className="mr-2" />
              Download
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2 md:flex md:justify-center mt-8 md:mt-0">
          <img
            height={420}
            width={420}
            src={laptop}
            alt="Laptop"
            className="max-w-full h-auto rounded-xl hover:shadow-lg hover:scale-105 duration-300 transition-all"
          />
        </div>
      </div>
    </>
  );
}

export default Download;
