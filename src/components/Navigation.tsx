import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layout, Archive } from 'lucide-react';
import clsx from 'clsx';

export default function Navigation() {
  const location = useLocation();
  
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/dashboard" className="flex items-center">
              <span className="text-xl font-bold text-indigo-600">YouUnited</span>
            </Link>
            <div className="ml-10 flex items-center space-x-4">
              <Link
                to="/dashboard"
                className={clsx(
                  'inline-flex items-center px-3 py-2 rounded-md text-sm font-medium',
                  location.pathname === '/dashboard'
                    ? 'text-indigo-600 bg-indigo-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                )}
              >
                <Layout className="w-4 h-4 mr-2" />
                Dashboard
              </Link>
              <Link
                to="/capsules"
                className={clsx(
                  'inline-flex items-center px-3 py-2 rounded-md text-sm font-medium',
                  location.pathname.startsWith('/capsules')
                    ? 'text-indigo-600 bg-indigo-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                )}
              >
                <Archive className="w-4 h-4 mr-2" />
                Capsules
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}