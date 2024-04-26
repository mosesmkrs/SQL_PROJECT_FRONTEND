"use client"
import React, { useEffect, useState } from "react";
import { columns, Payment } from "./columns";
import { DataTable } from "./data-table";

function DemoPage() {
  const [data, setData] = useState([] as Payment[]); 
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:8081/data');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData: any[] = await response.json();
        
        const transformedData: Payment[] = jsonData.map((item: any) => ({
          id: item.FarmerID,
          FirstName: item.FirstName,
          LastName: item.Surname,
          HouseholdSize: item.HouseholdSize,
          Contact: item.ContactInfo,
          County: item.County,
          FarmSize: item.FarmSizeAcres
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
          <DataTable columns={columns} data={data} />
        </div>
      )}
    </div>
  );
}

export default DemoPage;