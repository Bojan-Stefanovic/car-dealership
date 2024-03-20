import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className=" space-x-2">
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
  );
}

export default Navbar;
