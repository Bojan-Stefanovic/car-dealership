// RegisterPage.js
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function RegisterPage() {
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userDetails);

    // Store user details in localStorage
    localStorage.setItem("userDetails", JSON.stringify(userDetails));

    // Set registration success to true
    setRegistrationSuccess(true);

    // Wait for 2 seconds before navigating to /inventory
    setTimeout(() => {
      navigate("/inventory");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-md w-full bg-white rounded-lg shadow-noOffset shadow-gray-600/30 p-8">
        <h2 className="text-2xl font-bold text-center mb-8">Register</h2>
        {registrationSuccess ? (
          <div className="text-green-500 text-center mb-4">
            Registration successful! Redirecting...
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#6faa63] rounded transition duration-200 hover:bg-[#8bc77f] text-white p-3 font-semibold">
              Register
            </button>
          </form>
        )}
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-[#6faa63] hover:underline transition duration-200">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
