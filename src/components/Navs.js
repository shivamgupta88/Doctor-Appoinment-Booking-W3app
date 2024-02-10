import React from 'react';
import { Link } from 'react-router-dom';

function Navs({ balance }) {
  return (
    <div className="bg-black text-white p-4 shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <span className="text-lg font-bold">Account Balance: {balance}</span>
        <ul className="flex">
          <li className="ml-4 first:ml-0">
            <Link to="/" className="text-white hover:bg-gray-700 transition duration-150 ease-in-out py-2 px-4 rounded-lg no-underline">Home</Link>
          </li>
          <li className="ml-4">
            <Link to="/patientvisited" className="text-white hover:bg-gray-700 transition duration-150 ease-in-out py-2 px-4 rounded-lg no-underline">Patient Visited</Link>
          </li>
          <li className="ml-4">
            <Link to="/getpatientdetail" className="text-white hover:bg-gray-700 transition duration-150 ease-in-out py-2 px-4 rounded-lg no-underline">Get Patient Details</Link>
          </li>
          <li className="ml-4">
            <Link to="/getAllPatients" className="text-white hover:bg-gray-700 transition duration-150 ease-in-out py-2 px-4 rounded-lg no-underline">Get All Patients</Link>
          </li>
          <li className="ml-4">
            <Link to="/refund" className="text-white hover:bg-gray-700 transition duration-150 ease-in-out py-2 px-4 rounded-lg no-underline">Refund</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navs;
