import { Link } from "react-router-dom";
import LocationMap from "../components/LocationMap";
import { useState } from "react";

function Contact() {
  const locations = [
    {
      name: "New York Office",
      address: "123 Main Street, New York, NY, 10001",
      coords: [40.7128, -74.006], // New York
    },
    {
      name: "Los Angeles Branch",
      address: "456 Elm Street, Los Angeles, CA, 90001",
      coords: [34.0522, -118.2437], // Los Angeles
    },
    {
      name: "London Office",
      address: "789 Piccadilly, London, W1J 9HU",
      coords: [51.5074, -0.1278], // London
    },
    {
      name: "Paris Branch",
      address: "101 Rue de Rivoli, 75001 Paris, France",
      coords: [48.8566, 2.3522], // Paris
    },
    {
      name: "Beijing Office",
      address: "102 Chaoyang, Beijing, China",
      coords: [39.9042, 116.4074], // Beijing
    },
    {
      name: "Dubai Branch",
      address: "103 Sheikh Zayed Road, Dubai, UAE",
      coords: [25.2048, 55.2708], // Dubai
    },
  ];
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
                className="mb-4 cursor-pointer"
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
          className="mt-4 px-6  py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition duration-200">
          Contact Us
        </Link>
      </div>
    </section>
  );
}

export default Contact;
