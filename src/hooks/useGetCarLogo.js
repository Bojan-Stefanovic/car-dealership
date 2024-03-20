import { useEffect, useState } from "react";
import { useGetCarData } from "./useGetCarData"; // Adjust the import path as needed

export function useGetCarLogo() {
  const carData = useGetCarData();
  const [logoData, setLogoData] = useState([]);
  const [uniqueLogos, setUniqueLogos] = useState([]);

  useEffect(() => {
    const getLogoData = async () => {
      const urls = Array.from(
        { length: 383 },
        (_, i) => `http://localhost:3002/${i}`
      );
      try {
        const promises = urls.map((url) =>
          fetch(url).then((res) => res.json())
        );
        const logos = await Promise.all(promises);
        setLogoData(logos);
      } catch (error) {
        console.error("Error fetching logos:", error);
      }
    };
    getLogoData();
  }, []);

  useEffect(() => {
    if (carData.length > 0 && logoData.length > 0) {
      const seen = new Set();
      const filteredAndUniqueLogos = logoData
        .filter((logo) => {
          const matchesCarMake = carData.some((car) => car.make === logo.name);
          const isUnique = !seen.has(logo.name);
          if (matchesCarMake && isUnique) {
            seen.add(logo.name);
            return true;
          }
          return false;
        })
        .map((logo) => logo.image);

      setUniqueLogos(filteredAndUniqueLogos);
    }
  }, [carData, logoData]);

  return uniqueLogos;
}
