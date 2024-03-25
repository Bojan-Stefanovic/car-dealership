/* eslint-disable react/no-unknown-property */
// import Icons from "../utils/Icons";
import { useEffect } from "react";
import { useAppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import HiddenMenu from "./HiddenMenu";

function Header() {
  const {
    isHomePage,
    isHeaderFixed,
    fixedHeaderStyle,
    isMobile,
    setIsHeaderFixed,
    setIsMobile,
    setHeaderStyle,
    unfixedHeaderStyle,
  } = useAppContext();

  useEffect(() => {
    if (isMobile && !isHomePage) {
      setIsHeaderFixed(false);
    } else if (!isHomePage) {
      setIsHeaderFixed(true);
    }
  }, [isMobile, isHomePage, setIsHeaderFixed]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [fixedHeaderStyle, isHomePage, setHeaderStyle, setIsMobile]);

  return (
    <header
      style={isHeaderFixed ? fixedHeaderStyle : unfixedHeaderStyle}
      className=" w-full text-white p-6">
      <div className="mx-auto flex justify-between items-center">
        <div className="relative flex w-64 items-center">
          <h1 className="text-2xl bg-gradient-to-r from-30% from-[#be1e1e] to-[#856b26] inline-block text-transparent bg-clip-text italic ml-8 font-extrabold absolute tracking-widest z-10 items-center left-[1px] bottom-[-25px]">
            <Link to="/" className="cursor-pointer">
              The Wheel Deal
            </Link>
          </h1>
          <img
            src="../../public/Icon/xxObg501.svg"
            alt=""
            className="absolute left-[-0.5rem] h-[3.5rem] top-[-2.05rem]"
          />
        </div>
        {isMobile ? <HiddenMenu /> : <Navbar />}
      </div>
    </header>
  );
}

export default Header;
