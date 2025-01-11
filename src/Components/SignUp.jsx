import React, { useState } from "react";
import Cricketer from "../images/cricketer.png";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Account created successfully!");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-blue-50 p-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-blue-950 rounded-lg shadow-md">
        <h2 className="flex flex-row items-center justify-center text-2xl font-bold text-center text-white">
          Sign Up{" "}
          <img
            src={Cricketer}
            alt="logo"
            className="h-16 sm:h-20 pb-3 ml-2 animate-bounce"
          />
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-l font-medium text-white">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none"
              required
              placeholder="Enter Your First Name"
            />
          </div>
          <div>
            <label className="block text-l font-medium text-white">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none"
              required
              placeholder="Enter Your Last Name"
            />
          </div>
          <div>
            <label className="block text-l font-medium text-white">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none"
              required
              placeholder="Enter Your Email"
            />
          </div>
          <div>
            <label className="block text-l font-medium text-white">
              Contact No
            </label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none"
              required
              placeholder="Enter Your Contact No"
            />
          </div>
          <div>
            <label className="block text-l font-medium text-white">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none"
              required
              placeholder="Enter Your Password"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-md transform transition-transform hover:scale-105 hover:bg-blue-600"
          >
            <FontAwesomeIcon
                icon={faSignInAlt}
                className="mr-2 animate-pulse"
              />
            Sign Up
          </button>
        </form>
        <p className="text-m text-center text-white">
          Already have an account?{" "}
          <a href="/login" className="text-orange-500 hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
