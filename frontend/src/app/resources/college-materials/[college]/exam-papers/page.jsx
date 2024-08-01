"use client"
import { useParams,useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const ExamPapers = () => {
  const { college } = useParams();
  const router = useRouter(); // Using useRouter to navigate back
  const [collegeName, setCollegeName] = useState('');

  useEffect(() => {
    if (college) {
      const formattedCollegeName = college.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      setCollegeName(formattedCollegeName);
    }
  }, [college]);
  const papers = [
    { year: 2023, url: '/path/to/2023.pdf' },
    { year: 2022, url: '/path/to/2022.pdf' },
    { year: 2021, url: '/path/to/2021.pdf' },
  ];
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
    <button
      className="self-start mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      onClick={() => router.push(`/resources/college-materials/${college}`)} // Navigate back to the college page
    >
      Back
    </button>
    <h1 className="text-5xl font-bold mb-12 text-gray-800">{collegeName} Exam Papers</h1>
    <div className="w-full max-w-6xl">
      {papers.map((paper, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-3xl font-bold mb-4">{paper.year}</h2>
          <div className="flex justify-between space-x-4">
            {Array(3).fill().map((_, i) => (
              <div key={i} className="flex flex-col items-center justify-center w-full max-w-xs h-64 bg-gray-200 rounded-lg shadow-md animate-pulse">
                <p className="text-gray-500">{paper.year} Paper {i + 1}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default ExamPapers;
