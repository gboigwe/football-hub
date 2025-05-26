import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import ClubDetails from './pages/ClubDetails';
import PlayerDetails from './pages/PlayerDetails';
import CoachDetails from './pages/CoachDetails';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="club/:id" element={<ClubDetails />} />
          <Route path="player/:id" element={<PlayerDetails />} />
          <Route path="coach/:id" element={<CoachDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;