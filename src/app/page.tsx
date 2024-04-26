import { useEffect, useState } from "react";
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ backgroundImage: `url('/image1.png')`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }} className="items-center text-center">
      <p className="text-5xl justify-center text-center text-blue-500 font-bold py-12 mb-8">Farmstead Fellowship<br/> Database</p>

      <Link href="/contents" className="py-3 px-5 rounded-lg bg-lime-200 text-green-600 justify-center items-center text-center hover:font-bold hover:bg-green-300 hover:text-green-800 hover:shadow-lg hover:shadow-green-700">
          Get Started
        </Link>
    </div>
  );
}
