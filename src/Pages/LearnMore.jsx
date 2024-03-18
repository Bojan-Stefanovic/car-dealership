import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

function LearnMore() {
  const { specialOffers } = useAppContext();
  return (
    <section className="mt-16 py-12 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Explore Our Detailed Special Offers & Promotions
        </h1>
        <div className="space-y-10">
          {specialOffers.map((specialOffer) => (
            <div key={specialOffer.id} className="my-20">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">
                {specialOffer.title}
              </h2>
              <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left md:items-center">
                {specialOffer.image && (
                  <img
                    src={specialOffer.image}
                    alt={specialOffer.title}
                    className="md:w-1/4 w-1/2 h-auto md:mr-4 mb-4 md:mb-0"
                  />
                )}
                <div className="flex items-center justify-center md:w-3/4">
                  <p className="text-lg px-5">
                    {specialOffer.fullDescription || specialOffer.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center flex justify-around mt-8">
          <Link
            to="/"
            className="mt-4 px-6  py-2 text-white bg-[#6faa63] rounded   hover:bg-[#8bc77f] transition duration-200">
            Back to Home
          </Link>
          <Link
            to="/contact"
            className="mt-4 px-6  py-2 text-white bg-[#6faa63] rounded  duration-200 hover:bg-[#8bc77f] transition ">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default LearnMore;
