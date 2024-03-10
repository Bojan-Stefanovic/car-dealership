import Car from "../components/Car";
import { useGetCarData } from "../hooks/useGetCarData";

function ChooseCar() {
  const carData = useGetCarData();

  return (
    <main className="flex-grow container mx-auto p-8">
      <section>
        <h2 className="text-2xl text-center font-semibold mb-6">
          Featured Car
        </h2>
        <div className="flex flex-wrap justify-center">
          {carData &&
            carData.map((car, index) => (
              <Car
                key={index}
                color={car.color}
                image={car.image}
                make={car.make}
                model={car.model}
                year={car.year}
                price={car.price}
                mileage={car.mileage}
                fuelType={car.fuelType}
                transmission={car.transmission}
                engine={car.engine}
                horsepower={car.horsepower}
                features={car.features || []}
              />
            ))}
        </div>
      </section>
    </main>
  );
}

export default ChooseCar;
