/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function Navbar({
  navStyle,
  linkStyle,
  linkName,
  showHome = true,
  showAbout = true,
  showContact = true,
  showSignin = true,
}) {
  const commonStyles =
    "text-white p-3 hover:bg-[#4e9662] rounded transition ease-in-out duration-200 transform";

  return (
    <nav className={`${navStyle} space-x-2`}>
      {showHome && (
        <Link to="/" className={`${commonStyles} ${linkStyle}`}>
          {linkName || "Home"}
        </Link>
      )}
      {showAbout && (
        <Link to="/about" className={`${commonStyles} ${linkStyle}`}>
          {linkName || "About"}
        </Link>
      )}
      {showContact && (
        <Link to="/contact" className={`${commonStyles} ${linkStyle}`}>
          {linkName || "Contact"}
        </Link>
      )}
      {showSignin && (
        <Link
          to="/signin"
          className={`${commonStyles} bg-[#4e9662] hover:bg-[#6faa63]/70`}>
          {linkName || "Sign In"}
        </Link>
      )}
    </nav>
  );
}

export default Navbar;
