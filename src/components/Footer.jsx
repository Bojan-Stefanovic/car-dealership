import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gradient-to-l w-full from-[#7ef29d] to-[#264653] text-white mb-0 px-5 py-10">
      <div className="container mx-auto flex flex-wrap justify-around text-center md:text-left">
        <div className="w-full md:w-auto mb-8 md:mb-0">
          <h3 className="font-semibold text-lg uppercase mb-5">Contact Us</h3>
          <ul>
            <li>
              <Link className="hover:text-[#2e312d]" to="/contact">
                +1 (234) 567-890
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#2e312d]" to="/contact">
                support@thewheeldeal.com
              </Link>
            </li>
            <li>1234 Dealership Ave, Motor City</li>
          </ul>
        </div>
        <div className="w-full md:w-auto mb-8 md:mb-0">
          <h3 className="font-semibold text-lg uppercase mb-5">Account</h3>
          <ul>
            <li>
              <Link className="hover:text-[#2e312d]" to="/signin">
                Sign In
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#2e312d]" to="/register">
                Register
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#2e312d]" to="/account">
                Your Account
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-auto mb-8 md:mb-0">
          <h3 className="font-semibold text-lg uppercase mb-5">Company</h3>
          <ul>
            <li>
              <Link className="hover:text-[#2e312d]" to="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#2e312d]" to="/careers">
                Careers
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-auto mb-8 md:mb-0">
          <h3 className="font-semibold text-lg uppercase mb-5">Resources</h3>
          <ul>
            <li>
              <Link className="hover:text-[#2e312d]" to="/contact">
                Customer Support
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#2e312d]" to="/learn-more">
                Financing Options
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full mt-8 md:mt-0 md:flex md:justify-center md:items-center">
          <div className="text-center flex flex-col justify-center items-center md:mt-[5%] mt-[3%]">
            <div className="relative flex w-64 justify-c items-center">
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

            <div className="font-normal text-sm md:text-base tracking-wider mt-8">
              &copy; {new Date().getFullYear()} The Wheel Deal. All rights
              reserved. Crafted with care for car enthusiasts.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
