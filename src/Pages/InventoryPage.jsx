import Navbar from "../components/Navbar";
import { useGetCarData } from "../hooks/useGetCarData";
function InventoryPage() {
  const carData = useGetCarData();

  return (
    <div className="flex flex-col bg-gray-600 mt-0">
      <div
        className="bg-gray-300 p-4 h-screen "
        style={{
          position: "fixed",
          top: "0",
        }}>
        <div className=" flex py-5 bg-red-500 z-50 ">
          <Navbar
            navStyle="z-541 flex justify-between w-full px-4 py-2 bg-red-500"
            linkStyle="bg-yellow-500"
            showAbout={false}
            showContact={false}
            showSignin={false}
            linkName="&larr; Back to Home"
          />
        </div>
        <h2 className="text-2xl mt-10 font-bold">Choose a Car</h2>
        <div className="mb-4">
          <label htmlFor="make">Make:</label>
          <select id="make" className="w-full">
            {/* Add options for car makes */}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="model">Model:</label>
          <select id="model" className="w-full">
            {/* Add options for car models */}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="year">Year:</label>
          <select id="year" className="w-full">
            {/* Add options for car years */}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="fuelType">Fuel Type:</label>
          <select id="fuelType" className="w-full">
            {/* Add options for fuel types */}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="priceRange">Price Range:</label>
          <input
            type="range"
            id="priceRange"
            min="0"
            max="100"
            className="w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="engine">Engine:</label>
          <select id="engine" className="w-full">
            {/* Add options for car engines */}
          </select>
        </div>
      </div>
      <div className="flex-1 bg-white">
        {/* Add car listing component here */}
      </div>
    </div>
  );
}

export default InventoryPage;
