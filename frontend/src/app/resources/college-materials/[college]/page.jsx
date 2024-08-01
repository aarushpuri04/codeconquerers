"use client"
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const CollegePage = () => {
  const { college } = useParams();

  const [collegeName, setCollegeName] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  useEffect(() => {
    if (college) {
      const formattedCollegeName = college.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      setCollegeName(formattedCollegeName);
    }
  }, [college]);

  return (
    <div className="flex">
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
    <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-8"}`}>
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-5xl font-bold mb-12 text-gray-800">{collegeName} Resources</h1>
      <div className="flex flex-wrap justify-center space-x-6">
        <Link href={`/resources/college-materials/${college}/exam-papers`}>
          <button className="p-6 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300 transform hover:scale-105 text-2xl">
            Exam Papers
          </button>
        </Link>
        <Link href={`/resources/college-materials/${college}/study-materials`}>
          <button className="p-6 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300 transform hover:scale-105 text-2xl">
            Study Materials
          </button>
        </Link>
      </div>
        </div>
        </div>
    </div>

  );
};

export default CollegePage;
