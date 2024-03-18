import { Link } from "react-router-dom";
import LocationMap from "./LocationMap";
import { useState } from "react";
import { useAppContext } from "../context/AppContext";

function Contact() {
  const { locations } = useAppContext();
  const [currLocation, setCurrLocation] = useState(locations[0]);

  function handleLocation(location) {
    setCurrLocation(location);
  }

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Our Locations
        </h2>
        <div className="bg-white shadow-noOffset shadow-gray-600/20 rounded-lg overflow-hidden p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {locations.map((location, index) => (
              <div
                key={index}
                className="mb-4 cursor-pointer hover:text-[#6faa63]"
                onClick={() => handleLocation(location)}>
                <h3 className="text-xl font-bold mb-2">{location.name}</h3>
                <p className="text-lg">{location.address}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <LocationMap
        name={currLocation.name}
        address={currLocation.address}
        coords={currLocation.coords}
      />
      <div className="flex justify-center">
        <Link
          to="/contact"
          className="mt-4 px-6  py-2 text-white bg-[#6faa63] rounded hover:bg-[#66b357]/70 transition duration-200">
          Contact Us
        </Link>
      </div>
    </section>
  );
}

export default Contact;
