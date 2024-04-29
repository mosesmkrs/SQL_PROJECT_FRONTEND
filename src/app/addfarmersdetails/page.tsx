"use client"
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Add = () => {
  const [data, setData] = useState({
    FarmerID: null,
    FirstName: "",
    Surname: "",
    HouseholdSize: null,
    ContactInfo: "",
    County: "",
    FarmSizeAcres: null,
  });
  const [error, setError] = useState(false);

  const handleChange = (e: any) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/data`, data);
      toast.success("Entry added successfully");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="container mx-auto mt-10 px-4 border border-solid w-fit rounded-lg">
      <h1 className="text-3xl  mb-8 text-blue-500 m-8 text-center">Add New Entry</h1>
      <form className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="FirstName" className="block mb-2 font-semibold">First Name:</label>
          <input
            type="text"
            id="FirstName"
            name="FirstName"
            placeholder="First Name"
            className="border border-gray-300 px-3 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Surname" className="block mb-2 font-semibold">Surname:</label>
          <input
            type="text"
            id="Surname"
            name="Surname"
            placeholder="Surname"
            className="border border-gray-300 px-3 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="HouseholdSize" className="block mb-2 font-semibold">Household Size:</label>
          <input
            type="number"
            id="HouseholdSize"
            name="HouseholdSize"
            placeholder="Household Size"
            className="border border-gray-300 px-3 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="ContactInfo" className="block mb-2 font-semibold">Contact Info:</label>
          <input
            type="text"
            id="ContactInfo"
            name="ContactInfo"
            placeholder="Contact Info"
            className="border border-gray-300 px-3 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="County" className="block mb-2 font-semibold">County:</label>
          <input
            type="text"
            id="County"
            name="County"
            placeholder="County"
            className="border border-gray-300 px-3 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="FarmSizeAcres" className="block mb-2 font-semibold">Farm Size (Acres):</label>
          <input
            type="number"
            id="FarmSizeAcres"
            name="FarmSizeAcres"
            placeholder="Farm Size (Acres)"
            className="border border-gray-300 px-3 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            onChange={handleChange}
          />
        </div>
        <button
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-md focus:outline-none focus:shadow-outline"
        >
          Add
        </button>
        {error && toast.error("Something went wrong!")}
        <Link href="/payments" className="block mt-4 text-blue-500 hover:underline">See all Entries</Link>
      </form>
    </div>
  );
};

export default Add;
