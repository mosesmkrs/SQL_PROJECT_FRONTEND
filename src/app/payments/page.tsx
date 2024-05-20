"use client"
import React, { useEffect, useState } from "react";
import { columns, Payment } from "./columns";
import { DataTable } from "./data-table";
import Link from 'next/link';

function DemoPage() {
  const [data, setData] = useState([] as Payment[]); 
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/data/`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData: any[] = await response.json();
        
        const transformedData: Payment[] = jsonData.map((item: any) => ({
         id: item[0],            // FarmerID
         FirstName: item[1],     // FirstName
         LastName: item[2],      // Surname
         HouseholdSize: item[3], // HouseholdSize
         Contact: item[4],       // ContactInfo
         County: item[5],        // County
         FarmSize: item[6]       // FarmSizeAcres
        }));

        setData(transformedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchData();

    return () => {
      setData([]); // Reset data when component unmounts
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      {loading ? (
        <p className="text-3xl justify-center text-center text-red-500 my-4">Loading...</p>
      ) : (
        <div className="container mx-auto p-10">
          <p className="text-3xl justify-center text-center text-blue-500 my-4">Farmer&apos;s Details</p>
          <Link href={'/addfarmersdetails'} className=" mb-3 py-3 px-5 rounded-lg  text-blue-600 justify-center items-center text-center hover:font-bold hover:bg-blue-300 hover:text-blue-800 hover:shadow-lg hover:shadow-blue-700">Add Entry</Link>
          <DataTable columns={columns} data={data} />
        </div>
      )}
    </div>
  );
}

export default DemoPage;
