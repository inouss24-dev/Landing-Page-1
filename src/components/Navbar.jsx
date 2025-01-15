import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

function Navbar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleMenu = () => {
    setMenuIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuIsOpen(false);
  };

  return (
    <>
      <div className="flex justify-between items-center bg-[#ffff]" id="HOME">
        <div>
          <h1 className="text-3xl text-[#28a7e9] font-bold hover:text-[gray]">
            <a href="">Lorem</a>
          </h1>
        </div>
        <div className="flex items-center">
          {/* Menu desktop */}
          <div className="hidden md:block space-x-4">
            <a href="#HOME" className="text-[#28a7e9] font-bold">
              HOME
            </a>
            <a
              href="#FEATURES"
              className="hover:text-[#28a7e9] text-[gray] font-bold"
            >
              FEATURES
            </a>
            <a
              href="#PRICING"
              className="hover:text-[#28a7e9] text-[gray] font-bold"
            >
              PRICING
            </a>
            <a
              href="#DOWNLOAD"
              className="hover:text-[#28a7e9] text-[gray] font-bold"
            >
              DOWNLOAD
            </a>
            <a
              href="#CONTACT"
              className="hover:text-[#28a7e9] text-[gray] font-bold"
            >
              CONTACT
            </a>
          </div>
          {/* Bouton Burger */}
          {!menuIsOpen && (
            <CiMenuBurger
              className="text-3xl md:hidden text-[#28a7e9] cursor-pointer"
              onClick={handleMenu}
            />
          )}
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-hero flex flex-col items-center justify-center space-y-6 py-6 shadow-md transition-transform duration-500 ease-in-out md:hidden ${
          menuIsOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <a
          href="#HOME"
          className="text-[#28a7e9] font-bold text-lg"
          onClick={closeMenu}
        >
          HOME
        </a>
        <a
          href="#FEATURES"
          className="hover:text-[#28a7e9] text-[#ffff] font-bold text-lg"
          onClick={closeMenu}
        >
          FEATURES
        </a>
        <a
          href="#PRICING"
          className="hover:text-[#28a7e9] text-[#ffff] font-bold text-lg"
          onClick={closeMenu}
        >
          PRICING
        </a>
        <a
          href="#DOWNLOAD"
          className="hover:text-[#28a7e9] text-[#ffff] font-bold text-lg"
          onClick={closeMenu}
        >
          DOWNLOAD
        </a>
        <a
          href="#CONTACT"
          className="hover:text-[#28a7e9] text-[#ffff] font-bold text-lg"
          onClick={closeMenu}
        >
          CONTACT
        </a>
        {/* Bouton Close */}
        <span
          className="bg-[#28a7e9] p-2 rounded-full cursor-pointer"
          onClick={handleMenu}
        >
          <IoMdClose className="text-4xl text-white" />
        </span>
      </div>
    </>
  );
}

export default Navbar;
