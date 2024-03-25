import { Link } from "react-router-dom";
import HiddenMenuBtn from "./HiddenMenuBtn";
import Icons from "../utils/Icons";
import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";

function HiddenMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { isHeaderFixed, setIsHeaderFixed, isHomePage } = useAppContext();
  const toggleMenu = () => {
    if (isHomePage && isHeaderFixed) {
      setIsHeaderFixed(false);
    }
    setIsOpen(!isOpen);

    document.body.style.overflow = !isOpen ? "hidden" : "auto";
  };
  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
    if (!isHomePage) {
      setIsHeaderFixed(true);
    }
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <HiddenMenuBtn onClick={toggleMenu}>
        <Icons name="HiddenMenu" size="2rem" />
      </HiddenMenuBtn>

      {isOpen && (
        <div className="top-0 inset-0 fixed bg-black/60 backdrop-blur-[5px] justify-end items-start">
          <div className="bg-transparent mt-10 w-full text-center p-5">
            <nav className="space-y-4 flex flex-col">
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
