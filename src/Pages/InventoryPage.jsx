/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useGetCarData } from "../hooks/useGetCarData";

function InventoryPage() {
  const carData = useGetCarData();
  const [searchParams, setSearchParams] = useState({
    make: "",
    model: "",
    year: "",
    color: "",
    price: "",
    fuelType: "",
    transmission: "",
    engine: "",
    horsepower: "",
  });

  const [models, setModels] = useState([]);
  const [years, setYears] = useState([]);
  const [colors, setColors] = useState([]);
  // Add more state hooks as necessary for other attributes

  useEffect(() => {
    if (searchParams.make) {
      const modelsByMake = carData
        .filter((car) => car.make === searchParams.make)
        .map((car) => car.model);
      setModels([...new Set(modelsByMake)]);
    }
  }, [searchParams.make, carData]);

  useEffect(() => {
    if (searchParams.model) {
      const filteredData = carData.filter(
        (car) => car.model === searchParams.model
      );
      setYears([...new Set(filteredData.map((car) => car.year))]);
      setColors([...new Set(filteredData.map((car) => car.color))]);
      // Update other attributes here
    }
  }, [searchParams.model, carData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search parameters:", searchParams);
    // Integrate your API call for searching here
  };

  return (
    <div className="p-5">
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="make">
            Make
          </label>
          <select
            id="make"
            name="make"
            value={searchParams.make}
            onChange={handleInputChange}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option value="">Select a make</option>
            {[...new Set(carData.map((car) => car.make))].map((make) => (
              <option key={make} value={make}>
                {make}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="model">
            Model
          </label>
          <select
            id="model"
            name="model"
            value={searchParams.model}
            onChange={handleInputChange}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            disabled={!searchParams.make}>
            <option value="">Select a model</option>
            {models.map((model) => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
          </select>
        </div>
        {/* Repeat for other parameters like year, color, etc., using similar patterns */}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default InventoryPage;
