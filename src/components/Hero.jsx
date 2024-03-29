import { Link } from "react-router-dom";
import LandingImg from "./LandingImg";

function Hero() {
  return (
    <section className="pt-20 h-screen z-1 flex flex-col justify-center items-center top-0 static overflow-hidden">
      {/* Background Image/Video */}
      <div className="absolute inset-0 flex items-center justify-center">
        <LandingImg className="absolute w-full h-full object-cover " />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/50 to-transparent/30"></div>
      </div>

      {/* Content Container */}
      <div className="container flex flex-col justify-center items-center mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28 md:pb-36 mt-20 sm:mt-24 md:mt-32 lg:mt-36 xl:mt-40 text-center relative z-10">
        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8 md:mb-10 lg:mb-12 font-bold text-white leading-tight">
          Discover Your Dream Car
        </h1>

        {/* Subheadline/Additional Text (Optional) */}
        <p className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white mb-4 sm:mb-5 md:mb-6">
          Find unbeatable deals on quality cars at The Wheel Deal
        </p>

        {/* CTA Button */}
        <Link
          to="/inventory"
          className="bg-[#6faa63] rounded hover:bg-[#8bc77f] hover:text-gray-700 text-white font-bold py-2 sm:py-3 px-4 sm:px-6  inline-block transition duration-300">
          Browse Inventory
        </Link>
      </div>
    </section>
  );
}

export default Hero;
