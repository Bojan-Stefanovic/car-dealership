import { useMemo } from "react";
import { useGetCarData } from "../hooks/useGetCarData";
import Car from "./Car";
import Carousel from "./Carousel";

function FeaturedCars() {
  const featuredCars = useGetCarData();
  const filteredCars = featuredCars.filter((car) =>
    [26, 3, 80, 7, 8, 9, 20, 27, 56].includes(car.id)
  );

  return (
    <section className="py-12 container bg-white">
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
    </section>
  );
}

export default FeaturedCars;
