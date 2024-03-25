import { useMemo, forwardRef } from "react";
import { useGetCarData } from "../hooks/useGetCarData";
import Car from "./Car";
import Carousel from "./Carousel";
import { Link } from "react-router-dom";

const FeaturedCars = forwardRef((props, ref) => {
  const featuredCars = useGetCarData();
  const filteredCars = featuredCars.filter((car) =>
    [26, 3, 80, 7, 8, 9, 20, 27, 56].includes(car.id)
  );
  FeaturedCars.displayName = "FeaturedCars";
  return (
    <section ref={ref} className="py-12 container bg-white">
      <div className="mx-auto relative px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
          Featured Cars
        </h2>
        <Carousel>
          <div>
            {useMemo(
              () => filteredCars.map((car) => <Car key={car.id} {...car} />),
              [filteredCars]
            )}
          </div>
        </Carousel>
      </div>
      <div className="flex justify-center">
        <Link
          to="/inventory"
          className="bg-[#6faa63] rounded hover:bg-[#8bc77f] hover:text-gray-700 text-white font-bold py-2 sm:py-3 px-4 sm:px-6  inline-block transition duration-300">
          Browse Our Inventory
        </Link>
      </div>
    </section>
  );
});

export default FeaturedCars;
