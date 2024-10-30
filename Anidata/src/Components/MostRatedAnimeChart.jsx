/// src/Components/MostRatedAnimeChart.jsx
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from 'recharts';

const MostRatedAnimeChart = ({ data }) => {
  return (
    <div style={{ display: 'flex', padding: '20px', backgroundColor: 'black', color: 'white', borderRadius: '8px', width: '100%', height: '100%' }}>
      
      {/* Table for displaying anime ratings */}
      <div style={{ flex: 1, marginRight: '20px', overflowY: 'auto', maxHeight: '600px' }}>
        <h2>Most Rated Anime</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#4CAF50', color: 'white' }}>
              <th style={{ padding: '8px', textAlign: 'left' }}>Title</th>
              <th style={{ padding: '8px', textAlign: 'left' }}>Score</th>
            </tr>
          </thead>
          <tbody>
            {data.map((anime, index) => (
              <tr key={index}>
                <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>{anime.title}</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>{anime.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Chart for displaying anime ratings */}
      <div style={{ flex: 1,width: '100%', height: '100%' }}>
        <BarChart width={600} height={600} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="title" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="score" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
};

export default MostRatedAnimeChart;
