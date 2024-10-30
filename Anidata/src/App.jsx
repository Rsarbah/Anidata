import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnimeDashboard from './Components/AnimeDashboard';
import AnimeDetail from './Components/AnimeDetail';
import Sidebar from './Components/Sidebar'; // Import the Sidebar component
import './App.css';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar /> {/* Include the Sidebar */}
        <div style={{ marginLeft: '250px', padding: '20px', flexGrow: 1 }}> {/* Adjust margin and padding for main content */}
          <Routes>
            <Route path="/" element={<AnimeDashboard />} />
            <Route path="/anime/:id" element={<AnimeDetail />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
