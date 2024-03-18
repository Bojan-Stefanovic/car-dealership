/* eslint-disable react/no-unknown-property */
import Icons from "../utils/Icons";
import { useAppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

function Header() {
  const { isHeaderFixed } = useAppContext();

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
        <div className="py-4 mt-[0.80rem] blur-sm drop-shadow-sm top-[15px] rounded-2xl px-32 bg-gradient-to-r from absolute z-1"></div>
        <div className="relative flex w-64 items-center">
          <h1 className="text-2xl bg-gradient-to-l from-30%  from-[#C10000] to-[#856b26] inline-block text-transparent bg-clip-text italic ml-8 font-extrabold absolute tracking-widest z-10 items-center left-[1px] bottom-[-25px]">
            <Link to="/" className="cursor-pointer">
              The Wheel Deal
            </Link>
          </h1>
          <Icons
            fillColor="#C10000"
            name="Title"
            size="3.5rem"
            className="absolute left-[-0.5rem] top-[-2.05rem]"
          />
        </div>

        <nav>
          <Link
            to="/"
            className="text-white p-3 hover:bg-[#4e9662] rounded transition ease-in-out duration-200 transform">
            Home
          </Link>
          <Link
            to="/about"
            className="text-white p-3 hover:bg-[#4e9662] rounded transition ease-in-out duration-200 transform">
            About
          </Link>
          <Link
            to="/contact"
            className="text-white p-3 hover:bg-[#4e9662] rounded transition ease-in-out duration-200 transform">
            Contact
          </Link>
          <Link
            to="/signin"
            className="text-white p-3 bg-[#6faa63] hover:bg-[#2fb914]/70 rounded transition ease-in-out duration-200 transform ">
            Sign in
          </Link>
        </nav>
      </div>
    </header>
  );
}
export default Header;
