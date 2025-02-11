import React from 'react';
import TrackProgress from '../components/TrackProgress';
import Navigation from '../components/Navigation';
import { Track } from '../types';

const tracks: Track[] = [
  {
    id: 'academics',
    name: 'Academics',
    description: 'Academic preparation and achievements',
    currentLevel: 1,
    progress: 30,
    levels: Array.from({ length: 4 }, (_, i) => ({
      id: i + 1,
      name: `Level ${i + 1}`,
      tasks: [],
      isUnlocked: i === 0,
      requiredPoints: 100,
      earnedPoints: i === 0 ? 30 : 0,
    })),
  },
  {
    id: 'extracurriculars',
    name: 'Extracurriculars',
    description: 'Activities outside of academics',
    currentLevel: 1,
    progress: 20,
    levels: Array.from({ length: 4 }, (_, i) => ({
      id: i + 1,
      name: `Level ${i + 1}`,
      tasks: [],
      isUnlocked: i === 0,
      requiredPoints: 100,
      earnedPoints: i === 0 ? 20 : 0,
    })),
  },
  {
    id: 'community-service',
    name: 'Community Service',
    description: 'Giving back to the community',
    currentLevel: 1,
    progress: 15,
    levels: Array.from({ length: 4 }, (_, i) => ({
      id: i + 1,
      name: `Level ${i + 1}`,
      tasks: [],
      isUnlocked: i === 0,
      requiredPoints: 100,
      earnedPoints: i === 0 ? 15 : 0,
    })),
  },
  {
    id: 'personal-development',
    name: 'Personal Development',
    description: 'Growth and self-improvement',
    currentLevel: 1,
    progress: 25,
    levels: Array.from({ length: 4 }, (_, i) => ({
      id: i + 1,
      name: `Level ${i + 1}`,
      tasks: [],
      isUnlocked: i === 0,
      requiredPoints: 100,
      earnedPoints: i === 0 ? 25 : 0,
    })),
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Progress</h1>
        <div className="space-y-6">
          {tracks.map((track) => (
            <TrackProgress key={track.id} track={track} />
          ))}
        </div>
      </div>
    </div>
  );
}