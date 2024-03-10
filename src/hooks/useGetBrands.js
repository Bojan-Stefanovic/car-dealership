import { useEffect, useState } from "react";
import { useGetCarData } from "./useGetCarData";
import { useGetCarLogo } from "./useGetCarLogo";

function useGetBrand() {
  const logoData = useGetCarLogo();
  const carData = useGetCarData();
  const [uniqueLogos, setUniqueLogos] = useState([]);

  useEffect(() => {
    // Create a unique set of car makes
    const uniqueMakes = [...new Set(carData.map((car) => car.make))];

    // Find corresponding logo for each unique make and filter out undefined logos
    const logos = uniqueMakes
      .map((make) => {
        const logo = logoData.find((logo) => logo.name === make);
        return logo ? { name: make, image: logo.image } : null;
      })
      .filter((logo) => logo !== null);

    setUniqueLogos(logos);
  }, [carData, logoData]);
  return uniqueLogos;
}
export { useGetBrand };
