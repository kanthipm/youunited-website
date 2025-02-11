import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Task } from '../types';
import { Upload, ChevronLeft } from 'lucide-react';

interface TaskDetailProps {
  task: Task;
  onComplete: (taskId: string) => void;
}

export default function TaskDetail({ task, onComplete }: TaskDetailProps) {
  const [file, setFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (file) {
      onComplete(task.id);
      setSubmitted(true);
    }
  };

  return (
    <div className="p-6 ml-64">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <Link
            to="/dashboard"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            Back to Dashboard
          </Link>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-2">{task.title}</h1>
        <div className="text-sm text-gray-500 mb-6">{task.points} points</div>

        <div className="prose max-w-none mb-8">
          <h2 className="text-xl font-semibold mb-4">Add Capsule</h2>
          <p className="text-gray-700">{task.instructions}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
            <div className="text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    accept=".pdf,.doc,.docx,.mp4,.mov,.avi"
                    onChange={(e) =>
                      setFile(e.target.files ? e.target.files[0] : null)
                    }
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs leading-5 text-gray-600">
                PDF, DOC, DOCX, MP4, MOV, AVI up to 10MB
              </p>
            </div>
          </div>

          {file && (
            <div className="flex items-center justify-between bg-gray-50 px-4 py-3 rounded-lg">
              <div className="flex items-center">
                <span className="text-sm font-medium text-gray-900">
                  {file.name}
                </span>
                <span className="ml-2 text-sm text-gray-500">
                  ({(file.size / 1024 / 1024).toFixed(2)} MB)
                </span>
              </div>
              <button
                type="button"
                onClick={() => setFile(null)}
                className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                Remove
              </button>
            </div>
          )}

          <button
            type="submit"
            disabled={!file}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Submit for Review
          </button>

          {submitted && (
            <div className="text-center text-sm text-green-600 font-medium">
              Your file has been successfully submitted for review!
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
