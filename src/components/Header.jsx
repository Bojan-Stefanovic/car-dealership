/* eslint-disable react/no-unknown-property */
import Icons from "../utils/Icons";
function Header() {
  return (
    <header className="bg-gradient-to-r from-[#7ef29d] to-[#264653] to-80%  text-white p-6">
      <div className="mx-auto flex justify-between items-center">
        <div className="py-4 mt-[0.80rem] blur-sm drop-shadow-sm top-[15px] rounded-2xl px-32 bg-gradient-to-r from absolute z-1"></div>
        <div className="relative flex w-64 items-center">
          <h1 className="text-2xl bg-gradient-to-l from-30%  from-[#C10000] to-[#856b26] inline-block text-transparent bg-clip-text italic ml-8 font-extrabold absolute tracking-widest z-10 items-center left-[1px] bottom-[-25px]">
            The Wheel Deal
          </h1>
          <Icons
            fillColor="#C10000"
            name="Title"
            size="3.5rem"
            className="absolute left-[-0.5rem] top-[-2.05rem]"
          />
        </div>

        <nav>
          <a href="/" className="text-white p-3 hover:bg-green-700 rounded">
            Home
          </a>
          <a
            href="/about"
            className="text-white p-3 hover:bg-green-700 rounded">
            About
          </a>
          <a
            href="/contact"
            className="text-white p-3 hover:bg-green-700 rounded">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
export default Header;
