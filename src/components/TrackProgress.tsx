import React from 'react';
import { Link } from 'react-router-dom';
import { Track } from '../types';
import { CheckCircle, Circle } from 'lucide-react';
import clsx from 'clsx';

interface TrackProgressProps {
  track: Track;
}

export default function TrackProgress({ track }: TrackProgressProps) {
  const progressPercentage = (track.progress / 100) * 100;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex flex-col mb-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-900">{track.name}</h3>
        </div>
        <div className="mt-2 mb-2">
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-2 bg-indigo-600 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
        <div className="text-sm text-gray-600">
          Level {track.currentLevel} • {track.progress}% Complete
        </div>
      </div>

      <div className="flex items-center justify-between mt-6">
        {track.levels.map((level, index) => (
          <div key={level.id} className="flex items-center">
            <Link
              to={level.isUnlocked ? `/track/${track.id}/level/${level.id}` : '#'}
              className={clsx(
                'relative group',
                !level.isUnlocked && 'cursor-not-allowed'
              )}
            >
              {level.isUnlocked ? (
                <CheckCircle
                  className={clsx(
                    'w-8 h-8',
                    level.id <= track.currentLevel
                      ? 'text-indigo-600'
                      : 'text-gray-400'
                  )}
                />
              ) : (
                <Circle className="w-8 h-8 text-gray-400" />
              )}
              <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs">
                Level {level.id}
              </span>
            </Link>
            {index < track.levels.length - 1 && (
              <div className="w-12 h-px border-t-2 border-dashed border-gray-300 mx-2" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}