import { Link } from "react-router-dom";
import Icons from "../utils/Icons";

function Footer() {
  return (
    <footer className="bg-gradient-to-l w-full from-[#7ef29d] to-[#264653] text-white mb-0 p-10 h-full">
      <div className="container flex mx-auto justify-between text-center">
        <ul>
          <h3 className="font-semibold text-lg uppercase mb-5">Contact Us</h3>
          <li>
            <Link className="hover:text-[#2e312d] " to="/contact">
              +1 (234) 567-890
            </Link>
          </li>
          <li>
            <Link className="hover:text-[#2e312d] " to="/contact">
              support@thewheeldeal.com
            </Link>
          </li>
          <li>1234 Dealership Ave, Motor City</li>
        </ul>
        <ul>
          <h3 className="font-semibold text-lg uppercase mb-5">Account</h3>
          <li>
            <Link className="hover:text-[#2e312d] " to="/signin">
              Sign In
            </Link>
          </li>
          <li>
            <Link className="hover:text-[#2e312d] " to="/register">
              Register
            </Link>
          </li>
          <li>
            <Link className="hover:text-[#2e312d] " to="/account">
              Your Account
            </Link>
          </li>
        </ul>
        <ul>
          <h3 className="font-semibold text-lg uppercase mb-5">Company</h3>
          <li>
            <Link className="hover:text-[#2e312d] " to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link className="hover:text-[#2e312d] " to="/careers">
              Careers
            </Link>
          </li>
          <li>
            <Link className="hover:text-[#2e312d] " to="/news">
              News & Events
            </Link>
          </li>
        </ul>
        <ul>
          <h3 className="font-semibold text-lg uppercase mb-5">Resources</h3>

          <li>
            <Link className="hover:text-[#2e312d] " to="/contact">
              Customer Support
            </Link>
          </li>
          <li>
            <Link className="hover:text-[#2e312d] " to="/learn-more">
              Financing Options
            </Link>
          </li>
        </ul>
        <div className="flex justify-between items-center flex-col">
          <div className="relative flex w-64 items-center">
            <h1 className="text-2xl bg-gradient-to-l from-30% from-[#C10000] to-[#856b26] inline-block text-transparent bg-clip-text italic ml-8 font-extrabold absolute tracking-widest z-10 items-center left-[1px] bottom-[-25px]">
              The Wheel Deal
            </h1>
            <Icons
              fillColor="#C10000"
              name="Title"
              size="3.5rem"
              className="absolute left-[-0.5rem] top-[-2.05rem]"
            />
          </div>
          <p className="font-normal w-[20rem] tracking-wider text-sm md:text-base">
            &copy; {new Date().getFullYear()} The Wheel Deal. All rights
            reserved. Crafted with care for car enthusiasts.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
