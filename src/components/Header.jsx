/* eslint-disable react/no-unknown-property */
// import Icons from "../utils/Icons";
import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import HiddenMenu from "./HiddenMenu";

function Header() {
  const { isHeaderFixed } = useAppContext();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fixedHeaderStyle = {
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 99999,
    animation: "slideDown 300ms ease-in-out",
  };
  return (
    <header
      style={isHeaderFixed ? fixedHeaderStyle : {}}
      className="bg-gradient-to-r from-[#7ef29d] to-[#264653] text-white p-6">
      <div className="mx-auto flex justify-between items-center">
        {isMobile || (
          <div className="py-4 mt-[0.80rem] blur-sm drop-shadow-sm top-[15px] rounded-2xl px-32 bg-gradient-to-r from absolute z-1"></div>
        )}
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
