import { TbScanPosition } from "react-icons/tb";
import { IoIosPhonePortrait } from "react-icons/io";
import { SiGmail } from "react-icons/si";

function Contact() {
  return (
    <div className="bg-[#28a7e9] text-white py-10 px-4 md:px-20">
      <div className="flex justify-between flex-col md:flex-row gap-10">
        {/* Section gauche : Informations de contact */}
        <div className="flex flex-col gap-y-6">
          <h1 className="text-4xl font-bold">CONTACT US</h1>
          <p className="text-md leading-7">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          {/* Localisation */}
          <div className="flex items-center space-x-4">
            <TbScanPosition className="text-4xl text-white" />
            <span>1234 Street Name, City Name, United States</span>
          </div>
          {/* Téléphone */}
          <div className="flex items-center space-x-4">
            <IoIosPhonePortrait className="text-4xl text-white" />
            <span>0992 234234 / 0234 234234</span>
          </div>
          {/* Email */}
          <div className="flex items-center space-x-4">
            <SiGmail className="text-4xl text-white" />
            <span>hello@yoursite.com</span>
          </div>
        </div>

        {/* Section droite : Formulaire de contact */}
        <div className="flex flex-col gap-y-5">
          <input
            type="text"
            placeholder="Name"
            className="w-full md:w-96 h-14 px-4 bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#146ba8]"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full md:w-96 h-14 px-4 bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#146ba8]"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full md:w-96 h-14 px-4 bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#146ba8]"
          />
          <textarea
            placeholder="Message"
            className="w-full md:w-96 h-28 px-4 bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#146ba8] resize-none"
          ></textarea>
          <button className="w-full md:w-96 h-14 bg-[#146ba8] text-white font-semibold rounded-lg hover:bg-[#0e4d7a] transition duration-300">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
