/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Error() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center text-center h-screen bg-gray-100">
        <h1 className="text-6xl font-bold text-red-600 mb-4">Oops!</h1>
        <p className="text-5xl mb-8">404 - Page Not Found</p>
        <p className="text-xl mb-8">
          It looks like the page you're looking for doesn't exist.
        </p>
        <p className="mb-8">
          You might have mistyped the address or the page may have moved.
        </p>
        <Link
          to="/"
          className="mt-4 px-6  py-2 text-white bg-[#6faa63] rounded transition  hover:bg-[#8bc77f] duration-200">
          Back to Home
        </Link>
        <p className="mt-8 text-gray-700">
          If you think this is a mistake, please&nbsp;
          <Link
            to="/contact"
            className="text-[#6faa63] transition duration-200 hover:underline">
            contact us
          </Link>
          .
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Error;
