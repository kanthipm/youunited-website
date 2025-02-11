import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthForm from './components/AuthForm';
import Dashboard from './pages/Dashboard';
import TrackLevel from './pages/TrackLevel';
import Homepage from './pages/Homepage';
import Capsules from './pages/Capsules';
import CapsuleView from './pages/CapsuleView';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/auth"
            element={
              <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <AuthForm />
              </div>
            }
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/capsules" element={<Capsules />} />
          <Route path="/capsules/:trackId" element={<CapsuleView />} />
          <Route
            path="/track/:trackId/level/:levelId"
            element={<TrackLevel />}
          />
          <Route
            path="/track/:trackId/level/:levelId/task/:taskId"
            element={<TrackLevel />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;