import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, Heart, Trophy } from 'lucide-react';

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="py-6 flex justify-end space-x-4">
          <Link
            to="/auth"
            className="text-gray-600 hover:text-gray-900 font-medium"
          >
            Sign In
          </Link>
          <Link
            to="/auth"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500 transition-colors"
          >
            Sign Up
          </Link>
        </nav>

        <main className="pt-16 pb-24">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-gray-900 mb-6">
              You<span className="text-indigo-600">United</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your personalized journey to college success. Track your progress,
              build your profile, and prepare for your future, one achievement at a
              time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Academics</h3>
              <p className="text-gray-600">
                Track your academic achievements, test scores, and course planning to
                build a strong educational foundation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Extracurriculars
              </h3>
              <p className="text-gray-600">
                Showcase your leadership, talents, and interests through
                extracurricular activities and achievements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Community Service
              </h3>
              <p className="text-gray-600">
                Document your volunteer work and community impact to demonstrate your
                commitment to helping others.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Trophy className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Personal Development
              </h3>
              <p className="text-gray-600">
                Build essential life skills and showcase your personal growth journey
                through various achievements.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link
              to="/auth"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Start Your Journey
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}