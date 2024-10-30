import React from 'react';
import './Sidebar.css'; 
const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      {}
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/anime/top">Top Anime</a></li>
        <li><a href="/anime/favorites">Favorite Anime</a></li>
        {}
      </ul>
    </div>
  );
};

export default Sidebar;
