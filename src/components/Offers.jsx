import { useState } from "react";
import { useEffect } from "react";

function Offers() {
  const [dynamicStyle, setDynamicStyle] = useState({});
  const specialOffers = [
    {
      id: 1,
      title: "Year End Clearance Sale",
      description:
        "Don't miss out on our biggest sale of the year! Enjoy discounts up to 60% off MSRP on selected models. Limited time only.",
      image:
        "https://img.freepik.com/premium-vector/year-end-clearence-sale-offer-banner-white-background_774115-42.jpg",
    },
    {
      id: 2,
      title: "0% APR Financing",
      description:
        "Qualified buyers can enjoy 0% APR financing for up to 60 months on select vehicles. Drive your dream car home today!",
      image:
        "https://t4.ftcdn.net/jpg/01/00/12/75/360_F_100127563_8v6vUyyLDHggQn88ZNFqo2JhOCMVFGtD.jpg",
    },
    {
      id: 3,
      title: "Lease Specials",
      description:
        "Lease your next vehicle at an unbeatable rate. Exclusive deals starting as low as $199/month for 36 months with $2,999 due at signing.",
      image:
        "https://media.istockphoto.com/id/1140138706/vector/lease-vector-home-rent-blank-document-lease-contract-loan-property-illustration.jpg?s=612x612&w=0&k=20&c=fk94EoZ9Uh0o66eFH9a5FeGUEwwth9V7ONIgWW0WWJ4=",
    },
    {
      id: 4,
      title: "Trade-In Extra Value",
      description:
        "Receive an additional $1,000 towards your trade-in vehicle. Make your switch to a new car smoother and more affordable.",
      image:
        "https://www.pngall.com/wp-content/uploads/2016/04/50-off-PNG-HD.png",
    },
    {
      id: 5,
      title: "Loyalty Reward Discount",
      description:
        "Our way of saying 'Thank You' - exclusive discounts for returning customers. Save up to 10% on your next vehicle purchase.",
      image:
        "https://static.vecteezy.com/system/resources/previews/029/922/954/original/loyalty-program-in-flat-style-discount-coupon-3d-coupon-reward-discount-loyalty-program-promotion-vector.jpg",
    },
    {
      id: 6,
      title: "Online Exclusive Offer",
      description:
        "Shop online and unlock exclusive deals not available in-store. Save an additional 5% on your purchase with code ONLINE5.",
      image:
        "https://static.vecteezy.com/system/resources/previews/002/240/287/non_2x/online-exclusive-sale-tag-poster-design-template-discount-isolated-sticker-vector.jpg",
    },
  ];
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
                  <a
                    href="#learn-more"
                    className="absolute inset-0 flex justify-center items-center transition-opacity text-white text-lg md:text-xl font-semibold">
                    Learn More
                  </a>
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
