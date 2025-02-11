import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, Heart, Trophy } from 'lucide-react';
import Navigation from '../components/Navigation';

const tracks = [
  {
    id: 'academics',
    name: 'Academics',
    icon: GraduationCap,
    description: 'View your academic achievements and uploaded documents',
  },
  {
    id: 'extracurriculars',
    name: 'Extracurriculars',
    icon: Users,
    description: 'Access your extracurricular activities and certificates',
  },
  {
    id: 'community-service',
    name: 'Community Service',
    icon: Heart,
    description: 'Browse your community service records and impact evidence',
  },
  {
    id: 'personal-development',
    name: 'Personal Development',
    icon: Trophy,
    description: 'Review your personal growth journey and achievements',
  },
];

export default function Capsules() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Capsules</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {tracks.map((track) => (
            <Link
              key={track.id}
              to={`/capsules/${track.id}`}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <track.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {track.name}
                  </h2>
                  <p className="text-gray-600">{track.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}