import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import Navigation from '../components/Navigation';

// Mock data - in a real app, this would come from your backend
const mockFiles = {
  academics: {
    'Level 1': {
      'Submit SAT/ACT Scores': [
        {
          name: 'SAT_Score_Report.pdf',
          url: 'https://example.com/sat.pdf',
          type: 'application/pdf',
          uploadedAt: '2024-03-15',
        },
      ],
      'Academic Transcript': [
        {
          name: 'Transcript_2024.pdf',
          url: 'https://example.com/transcript.pdf',
          type: 'application/pdf',
          uploadedAt: '2024-03-10',
        },
      ],
    },
  },
  // Add mock data for other tracks as needed
};

export default function CapsuleView() {
  const { trackId } = useParams();
  const trackName = trackId?.charAt(0).toUpperCase() + trackId?.slice(1);
  const files = mockFiles[trackId as keyof typeof mockFiles] || {};

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link
            to="/capsules"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            Back to Capsules
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-8">{trackName} Capsules</h1>
        
        <div className="space-y-8">
          {Object.entries(files).map(([level, tasks]) => (
            <div key={level} className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">{level}</h2>
              <div className="space-y-6">
                {Object.entries(tasks).map(([task, files]) => (
                  <div key={task} className="border-t pt-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-3">{task}</h3>
                    <div className="space-y-3">
                      {files.map((file, index) => (
                        <div
                          key={index}
                          className="bg-gray-50 rounded-lg p-4 flex items-start justify-between"
                        >
                          <div>
                            <p className="font-medium text-gray-900">{file.name}</p>
                            <p className="text-sm text-gray-500">
                              Uploaded on {new Date(file.uploadedAt).toLocaleDateString()}
                            </p>
                          </div>
                          <a
                            href={file.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-600 hover:text-indigo-500 text-sm font-medium"
                          >
                            View File
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}