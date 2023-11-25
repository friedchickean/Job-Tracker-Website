import './index.css';
import Navbar from './components/navbar';
import JobTable from './components/JobTable';

function App() {
  return (

    <div className='flex'>
      <Navbar />

      <div className='w-full bg-slate-100 m-10 rounded-xl'>
        <h1 className='text-left mx-20 my-10 text-5xl text-gray-900'>My Jobs</h1>
        <JobTable />
      </div>
    </div>


  );
}

export default App;

// {/* <tr>
//     <td className='border p-3 text-gray-00'>Company Name</td>
//     <td className='border p-3 text-gray-800'>Developer</td>
//     <td className='border p-3 text-gray-800'>Entry Level</td>
//     <td className='border p-3 text-gray-800'>Calgary - Remote</td>
//     <td className='border p-3 text-gray-800'>11/24/2023</td>
//     <td className='border p-3 text-gray-800'><span className="p-1.5 uppercase text-xs font-medium tracking-wider text-yellow-800 bg-yellow-300 bg-opacity-50 rounded-md">In Progress</span></td>
// </tr>
// <tr>
//     <td className='border p-3 text-gray-00'>Company Name</td>
//     <td className='border p-3 text-gray-800'>Developer</td>
//     <td className='border p-3 text-gray-800'>Entry Level</td>
//     <td className='border p-3 text-gray-800'>Calgary - Remote</td>
//     <td className='border p-3 text-gray-800'>11/24/2023</td>
//     <td className='border p-3 text-gray-800'><span className="p-1.5 uppercase text-xs font-medium tracking-wider text-red-800 bg-red-300 bg-opacity-50 rounded-md">Rejected</span></td>
// </tr>
// <tr>
//     <td className='border p-3 text-gray-00'>Company Name</td>
//     <td className='border p-3 text-gray-800'>Developer</td>
//     <td className='border p-3 text-gray-800'>Entry Level</td>
//     <td className='border p-3 text-gray-800'>Calgary - Remote</td>
//     <td className='border p-3 text-gray-800'>11/24/2023</td>
//     <td className='border p-3 text-gray-800'><span className="p-1.5 uppercase text-xs font-medium tracking-wider text-green-800 bg-green-300 bg-opacity-50 rounded-md">Interview - 1</span></td>
// </tr> */}