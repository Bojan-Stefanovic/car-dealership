import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

function Offers() {
  const [dynamicStyle, setDynamicStyle] = useState({});
  const { specialOffers } = useAppContext();
  useEffect(() => {
    const applyDynamicStyle = () => {
      if (window.innerWidth > 768) {
        setDynamicStyle({
          transform: "scale(0.70)",
          transformOrigin: "top center",
          marginBottom: "-30%",
        });
      } else {
        setDynamicStyle({});
      }
    };

    applyDynamicStyle();

    window.addEventListener("resize", applyDynamicStyle);

    return () => window.removeEventListener("resize", applyDynamicStyle);
  }, []);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-16">
          Special Offers/Promotions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {specialOffers.map((offer) => (
            <div
              style={dynamicStyle}
              key={offer.id}
              className="flex flex-col bg-white rounded-lg shadow-noOffset shadow-gray-600/40 overflow-hidden xl:h-[36rem] h-auto">
              {/* Responsive aspect ratio for images */}
              <div className="relative w-full xl:mb-12 h-64 sm:h-72 md:h-80">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto h-auto max-w-full max-h-full"
                />
                {/* Overlay with Learn More link */}
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 hover:opacity-100 flex transition-opacity lg:h-[36rem] md:h-[31rem] smallest:h-[27rem] sm:h-[30rem] h-[26rem] duration-300">
                  <Link
                    to="/learn-more"
                    className="absolute inset-0 flex justify-center items-center transition-opacity text-white text-lg md:text-xl font-semibold">
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg text-center md:text-xl font-semibold mb-2">
                  {offer.title}
                </h3>
                <p className="text-md md:text-md lg:text-lg text-gray-600">
                  {offer.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Offers;
