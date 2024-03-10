/* eslint-disable no-unused-vars */
// import { useGetCarData } from "../hooks/useGetCarData";

import React from "react";

/* eslint-disable react/prop-types */
const Car = React.memo(function Car({
  image,
  make,
  model,
  year,
  price,
  mileage,
  fuelType,
  transmission,
  engine,
  horsepower,
  features,
  color,
}) {
  // const carData = useGetCarData();

  return (
    <div className="lg:w-[20rem] h-full w-[20rem] sm:w-[70rem] flex flex-col text-sm rounded-md  shadow-gray-400/60 mt-2 shadow-noOffset bg-white p-1 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
      <div className="flex justify-center">
        <img
          className="lg:w-60 w-52 md:w-56 xl:w-72"
          src={image}
          alt={`${make} ${model}`}
        />
      </div>
      <div className="px-4 py-2">
        <div className="font-bold mb-2">
          {make} {model}
        </div>
        <ul className="text-gray-700 mb-1">
          <li className="flex justify-between mb-1">
            Year: <span>{year}</span>
          </li>
          <li className="flex justify-between mb-1">
            Price: <span>${price}</span>
          </li>
          <li className="flex justify-between mb-1">
            Mileage: <span>{mileage} miles</span>
          </li>
          <li className="flex justify-between mb-1">
            Fuel Type: <span>{fuelType}</span>
          </li>
          <li className="flex justify-between mb-1">
            Transmission: <span>{transmission}</span>
          </li>
          <li className="flex justify-between mb-1">
            Engine: <span>{engine}</span>
          </li>
          <li className="flex justify-between mb-1">
            Horsepower: <span>{horsepower} HP</span>
          </li>
          <li className="flex justify-between mb-1">
            Color: <span>{color}</span>
          </li>
        </ul>
        <div className="flex flex-col px-0 ">
          <span className="pb-2 font-semibold">Features:</span>
          {features.map((feature, index) => (
            <span
              key={index}
              className="flex w-full bg-[#7ef29d]/40 rounded-full px-2 py-1  font-semibold text-gray-700 mr-2 mb-2">
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
});
export default Car;
