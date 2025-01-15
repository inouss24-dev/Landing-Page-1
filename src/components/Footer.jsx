import { LuCircleFadingArrowUp } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-6 bg-gray-100 text-gray-800">
      {/* Texte de copyright */}
      <span className="text-center md:text-left text-sm md:text-base">
        Copyright © {new Date().getFullYear()} Your Company Name | Design:
        <span className="font-semibold text-[#28a7e9]"> InoussaDev</span>.
      </span>

      {/* Icône de retour en haut */}
      <a
        href="#HOME"
        className="mt-4 md:mt-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#28a7e9] hover:bg-[#1a6f9f] text-white shadow-md transition duration-300 md:hidden"
        title="Back to Top"
      >
        <LuCircleFadingArrowUp className="text-xl" />
      </a>
    </footer>
  );
};

export default Footer;
