import { Link } from "react-router-dom";
import HiddenMenuBtn from "./HiddenMenuBtn";
import Icons from "../utils/Icons";
import { useEffect, useState } from "react";

function HiddenMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the isOpen state and control body overflow
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Apply overflow hidden or auto based on the menu state
    document.body.style.overflow = !isOpen ? "hidden" : "auto";
  };

  useEffect(() => {
    // Ensure that body overflow is reset when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Handle link click to close menu
  const handleLinkClick = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <HiddenMenuBtn onClick={toggleMenu}>
        <Icons name="HiddenMenu" size="2rem" />
      </HiddenMenuBtn>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50 flex justify-end items-start">
          <div className="bg-transparent mt-10 w-full text-center p-5">
            <nav className="space-y-4">
              <HiddenMenuBtn onClick={toggleMenu}>
                <span className="bg-gray-200/20 rounded-full py-2 px-2.5">
                  ✖
                </span>
              </HiddenMenuBtn>
              <Link
                to="/"
                onClick={handleLinkClick}
                className="block text-white hover:text-[#6faa63] rounded p-2">
                Home
              </Link>
              <Link
                to="/about"
                onClick={handleLinkClick}
                className="block text-white hover:text-[#6faa63] rounded p-2">
                About
              </Link>
              <Link
                to="/contact"
                onClick={handleLinkClick}
                className="block text-white hover:text-[#6faa63] rounded p-2">
                Contact
              </Link>
              <Link
                to="/signin"
                onClick={handleLinkClick}
                className="block text-white bg-green-500 hover:bg-green-700 rounded p-2">
                Sign In
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

export default HiddenMenu;
