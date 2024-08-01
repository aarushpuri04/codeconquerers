"use client"
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const StudyMaterials = () => {
  const { college } = useParams();
  const router = useRouter(); // Using useRouter to navigate back

  const [collegeName, setCollegeName] = useState('');

  useEffect(() => {
    if (college) {
      const formattedCollegeName = college.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      setCollegeName(formattedCollegeName);
    }
  }, [college]);

  const subjects = [
    {
      name: 'Mathematics',
      materials: [
        { title: 'Calculus', url: '/path/to/calculus.pdf' },
        { title: 'Algebra', url: '/path/to/algebra.pdf' },
        { title: 'Geometry', url: '/path/to/geometry.pdf' },
        { title: 'Statistics', url: '/path/to/statistics.pdf' },
        { title: 'Probability', url: '/path/to/probability.pdf' },
        // Add more materials as needed
      ],
    },
    {
      name: 'Physics',
      materials: [
        { title: 'Mechanics', url: '/path/to/mechanics.pdf' },
        { title: 'Thermodynamics', url: '/path/to/thermodynamics.pdf' },
        { title: 'Optics', url: '/path/to/optics.pdf' },
        { title: 'Electromagnetism', url: '/path/to/electromagnetism.pdf' },
        { title: 'Quantum Mechanics', url: '/path/to/quantum-mechanics.pdf' },
        // Add more materials as needed
      ],
    },
    // Add more subjects and materials as needed
  ];

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <button
        className="self-start mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        onClick={() => router.push(`/resources/college-materials/${college}`)} // Navigate back to the college page
      >
        Back
      </button>
      <h1 className="text-5xl font-bold mb-12 text-gray-800">{collegeName} Study Materials</h1>
      <div className="w-full max-w-6xl">
        {subjects.map((subject, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-3xl font-bold mb-4">{subject.name}</h2>
            <div className="flex overflow-x-auto space-x-4 hide-scrollbar">
              {subject.materials.map((material, i) => (
                <div key={i} className="flex-shrink-0 w-64 h-64 bg-gray-200 rounded-lg shadow-md flex items-center justify-center">
                  <p className="text-gray-500">{material.title}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyMaterials;
