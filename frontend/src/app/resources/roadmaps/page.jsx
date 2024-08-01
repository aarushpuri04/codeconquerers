"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Roadmaps = () => {
  const router = useRouter();

  const [roadmaps] = useState([
    {
      name: 'Frontend Development',
      description: 'A roadmap for learning frontend development technologies and skills.',
      steps: [
        'HTML & CSS',
        'JavaScript',
        'React.js',
        'State Management (Redux, Context API)',
        'Responsive Design',
        'Testing (Jest, React Testing Library)',
        'Performance Optimization',
        'Deployment (Netlify, Vercel)',
      ],
    },
    {
      name: 'Backend Development',
      description: 'A roadmap for learning backend development technologies and skills.',
      steps: [
        'Programming Languages (Node.js, Python, Java)',
        'API Design (REST, GraphQL)',
        'Database Management (SQL, NoSQL)',
        'Authentication & Authorization',
        'Server Deployment (AWS, Heroku)',
        'Microservices Architecture',
        'Testing (Mocha, Chai)',
        'Performance Optimization',
      ],
    },
    // Add more roadmaps as needed
  ]);

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <button
        className="self-start mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        onClick={() => router.push('/resources')} // Navigate back to the resources page
      >
        Back
      </button>
      <h1 className="text-5xl font-bold mb-12 text-gray-800">Roadmaps</h1>
      <div className="w-full max-w-6xl space-y-12">
        {roadmaps.map((roadmap, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">{roadmap.name}</h2>
            <p className="text-xl mb-6 text-gray-600">{roadmap.description}</p>
            <ul className="list-disc pl-6 space-y-2">
              {roadmap.steps.map((step, i) => (
                <li key={i} className="text-lg text-gray-700">{step}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmaps;
