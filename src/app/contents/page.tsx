import Link from 'next/link';

function Page() {
  return (
    <div className="flex flex-col items-center pt-8" style={{ backgroundImage: `url('/image.png')`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      <h1 className="text-3xl mb-8 text-blue-500 font-extrabold">Database Contents</h1>
      <div className='flex space-x-64 p-8'>
        <div className="space-y-8 grid">
            <Link  className='text-lg font-semibold  hover:text-green-500 rounded-md' href="/payments">Farmer&apos;s Details</Link>
            <Link  className='text-lg font-semibold  hover:text-green-500 rounded-md' href="/crops">Crops</Link>
            <Link  className='text-lg font-semibold  hover:text-green-500 rounded-md' href="/assessment">Productivity Assessment</Link>
            <Link  className='text-lg font-semibold  hover:text-green-500 rounded-md' href="/inputs">Inputs</Link>
        </div>
        <div className='grid space-y-8'>
            <Link  className='text-lg font-semibold  hover:text-green-500 rounded-md' href="/equipments">Equipments</Link>
            <Link  className='text-lg font-semibold  hover:text-green-500 rounded-md' href="/transactions">Credit Transactions</Link>
            <Link  className='text-lg font-semibold  hover:text-green-500 rounded-md' href="/surplus">Surplus sales</Link>
            <Link  className='text-lg font-semibold  hover:text-green-500 rounded-md' href="farmercrops">Farmer&apos;s Crops</Link>
        </div>
        
      </div>
     
      
    </div>
  );
}

export default Page;
