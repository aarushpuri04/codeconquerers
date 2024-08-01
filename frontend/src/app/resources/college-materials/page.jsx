"use client"
import { useState } from 'react';
import Link from 'next/link';

const CollegeMaterials = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const colleges = [
    'College of Engineering Pune',
    'IIT Bombay',
    'BITS Pilani',
    'NIT Trichy',
    'VIT Vellore',
    // Add more colleges as needed
  ];
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const filteredColleges = colleges.filter(college =>
    college.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-56"
        } w-64 z-50 shadow-lg`}
        style={{ transition: "transform 0.4s ease-in-out" }}
      >
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-600 pb-2">Menu</h2>
          <Link href="/resources/college-materials">
            <button
              className="w-full text-left mb-4 p-3 bg-gray-700 rounded-lg transition-transform transform hover:scale-105 hover:bg-gray-600 focus:outline-none"
            >
              College materials
            </button>
          </Link>
          <Link href="/resources/roadmaps">
            <button
              className="w-full text-left mb-4 p-3 bg-gray-700 rounded-lg transition-transform transform hover:scale-105 hover:bg-gray-600 focus:outline-none"
            >
              Roadmaps
            </button>
          </Link>
          <Link href="/resources/webinars">
            <button
              className="w-full text-left mb-4 p-3 bg-gray-700 rounded-lg transition-transform transform hover:scale-105 hover:bg-gray-600 focus:outline-none"
            >
              Webinars & Recordings
            </button>
          </Link>
        </div>
        <button
          onClick={toggleSidebar}
          className="absolute top-1/2 -right-4 transform -translate-y-1/2 p-2 bg-blue-500 text-white rounded-full shadow-md focus:outline-none"
        >
          {isSidebarOpen ? "<" : ">"}
        </button>
      </div>

      {/* Content */}
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-8"}`}></div>
      <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">College Materials</h1>
      <div className="w-full max-w-md">
        <input
          type="text"
          className="p-3 border border-gray-300 rounded w-full mb-6 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search for a college..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ul className="bg-white rounded-lg shadow-lg p-4">
          {filteredColleges.map((college, index) => (
            <li
              key={index}
              className="mb-2 p-3 rounded hover:bg-gray-100 transition duration-200"
            >
              <Link href={`/resources/college-materials/${encodeURIComponent(college.toLowerCase().replace(/ /g, '-'))}`}>
                {college}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
      </div>
      
  );
};

export default CollegeMaterials;
