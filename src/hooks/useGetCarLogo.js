// getCarData.js
import { useEffect, useState } from "react";

export function useGetCarLogo() {
  const [logoData, setLogoData] = useState([]);

  useEffect(() => {
    const getLogoData = async () => {
      let logos = [];
      for (let i = 0; i <= 382; i++) {
        const url = `http://localhost:3002/${i}`;
        // const url = `http://localhost:3000/0`;
        try {
          const response = await fetch(url);
          const result = await response.json();
          logos.push(result);
        } catch (error) {
          console.error(error);
        }
      }
      setLogoData(logos);
    };
    getLogoData();
  }, []);

  return logoData;
}
