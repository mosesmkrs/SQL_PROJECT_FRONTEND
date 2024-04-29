"use client"
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Add = () => {
  const [data, setData] = useState({
    TransactionID: null,
    FarmerID: null,
    DateGiven: "",
    Amount: null,
    Purpose: "",
    RepaymentStatus: "",
  });
  const [error, setError] = useState(false);

  const handleChange = (e: any) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/creditTransactions`, data);
      toast.success("Entry added successfully");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="container mx-auto mt-10 px-4 w-fit justify-center items-center border border-solid rounded-lg">
      <h1 className="text-3xl  mb-6 text-blue-500 text-center m-8">Add Transaction Entry</h1>
      <form className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="FarmerID" className="block mb-2 font-semibold">Farmer ID:</label>
          <input
            type="number"
            id="FarmerID"
            name="FarmerID"
            placeholder="Enter Farmer ID"
            className="border border-gray-300 px-3 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="DateGiven" className="block mb-2 font-semibold">Date Given:</label>
          <input
            type="text"
            id="DateGiven"
            name="DateGiven"
            placeholder="Date Given"
            className="border border-gray-300 px-3 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Amount" className="block mb-2 font-semibold">Amount:</label>
          <input
            type="text"
            id="Amount"
            name="Amount"
            placeholder="Amount"
            className="border border-gray-300 px-3 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Purpose" className="block mb-2 font-semibold">Purpose:</label>
          <input
            type="text"
            id="Purpose"
            name="Purpose"
            placeholder="Purpose"
            className="border border-gray-300 px-3 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="RepaymentStatus" className="block mb-2 font-semibold">Repayment Status:</label>
          <select
            id="RepaymentStatus"
            name="RepaymentStatus"
            className="border border-gray-300 px-3 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            onChange={handleChange}
          >
            <option value="paid">Paid</option>
            <option value="unpaid">Unpaid</option>
          </select>
        </div>
        <button
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-md focus:outline-none focus:shadow-outline"
        >
          Add
        </button>
        {error && toast.error("Something went wrong!")}
        <Link href="/transactions" className="block mt-4 text-blue-500 hover:underline">See all Entries</Link>
      </form>
    </div>
  );
};

export default Add;
