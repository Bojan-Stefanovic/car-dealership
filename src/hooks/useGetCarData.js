import { useEffect, useState } from "react";

export function useGetCarData() {
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const urls = Array.from(
        { length: 80 },
        (_, i) => `http://localhost:3000/${i}`
      );
      try {
        const promises = urls.map((url) =>
          fetch(url).then((res) => res.json())
        );
        const cars = await Promise.all(promises);
        setCarData(cars);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return carData;
}
