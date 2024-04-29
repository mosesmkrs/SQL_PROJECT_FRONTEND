"use client"
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Add = () => {
  const [data, setData] = useState({
    EquipmentID: null,
    EquipmentName: "",
    ConditionGiven: "",
    ConditionReturned: "",
    FarmerAssigned: null,
    DateAssigned: "",
  });
  const [error, setError] = useState(false);

  const handleChange = (e: any) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/equipments`, data);
      toast.success("Entry added successfully");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="container mx-auto mt-10 px-4 border border-solid w-fit rounded-lg">
      <h1 className="text-3xl  mb-8 text-blue-500 text-center m-6">Add Equipment Entry</h1>
      <form className="max-w-lg mx-auto ">
        <div className="mb-4">
          <label htmlFor="EquipmentName" className="block mb-2 font-semibold">Equipment Name:</label>
          <input
            type="text"
            id="EquipmentName"
            name="EquipmentName"
            placeholder="Equipment Name"
            className="border border-gray-300 px-3 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="ConditionGiven" className="block mb-2 font-semibold">Condition Given:</label>
          <input
            type="text"
            id="ConditionGiven"
            name="ConditionGiven"
            placeholder="Condition Given"
            className="border border-gray-300 px-3 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="ConditionReturned" className="block mb-2 font-semibold">Condition Returned:</label>
          <input
            type="text"
            id="ConditionReturned"
            name="ConditionReturned"
            placeholder="Condition Returned"
            className="border border-gray-300 px-3 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="FarmerAssigned" className="block mb-2 font-semibold">Farmer Assigned:</label>
          <input
            type="number"
            id="FarmerAssigned"
            name="FarmerAssigned"
            placeholder="Farmer Assigned"
            className="border border-gray-300 px-3 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="DateAssigned" className="block mb-2 font-semibold">Date Assigned:</label>
          <input
            type="text"
            id="DateAssigned"
            name="DateAssigned"
            placeholder="Date Assigned (dd/mm/yy)"
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
        <Link href="/equipments" className="block mt-4 text-blue-500 hover:underline">See all Entries</Link>
      </form>
    </div>
  );
};

export default Add;
