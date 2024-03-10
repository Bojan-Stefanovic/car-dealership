// getCarData.js
import { useEffect, useMemo, useState } from "react";

export function useGetCarData() {
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      // code for uploaded api
      {
        /* useEffect(() => {
        const getData = async () => {
          const urlBase = 'https://myapi.herokuapp.com/'; // Replace with your actual API URL
          let cars = [];
          for (let i = 0; i <= 79; i++) {
            const url = `${urlBase}${i}`;
            try {
              const response = await fetch(url);
              const result = await response.json();
              cars.push(result);
            } catch (error) {
              console.error(error);
            }
          }
          setCarData(cars);
        };
        getData();
      }, []); */
      }

      let cars = [];
      for (let i = 0; i <= 79; i++) {
        const url = `http://localhost:3000/${i}`;
        // const url = `http://localhost:3000/0`;
        try {
          const response = await fetch(url);
          const result = await response.json();
          cars.push(result);
        } catch (error) {
          console.error(error);
        }
      }
      setCarData(cars);
    };
    getData();
  }, []);

  return useMemo(() => carData, [carData]);
}
