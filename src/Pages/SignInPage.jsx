/* eslint-disable react/no-unescaped-entities */
// SignInPage.js
import { useState } from "react";
import { Link } from "react-router-dom";

function SignInPage() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
    console.log(credentials);
  };

  return (
    <div className="min-h-screen my-20 flex items-center justify-center bg-white">
      <div className="max-w-md w-full bg-white rounded-lg shadow-noOffset shadow-gray-600/30 p-8">
        <h2 className="text-2xl font-bold text-center mb-8">Sign In</h2>
        <form>
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
              className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#6faa63] rounded transition duration-200 hover:bg-[#8bc77f] text-white p-3  font-semibold ">
            Sign In
          </button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-[#6faa63] hover:underline transition duration-200">
            Register now
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignInPage;
