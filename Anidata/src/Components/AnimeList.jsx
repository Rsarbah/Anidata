import React from 'react';

const AnimeList = ({ anime }) => {
  return (
    <div className="anime-list">
      {anime.map((item) => (
        <div key={item.mal_id} className="anime-item">
          <img src={item.images.jpg.image_url} alt={item.title} style={{ width: '200px', height: '300px' }} />
          <h3>{item.title}</h3>
          <p>Rating: {item.score}</p>
          <p>Genres: {item.genres.map((g) => g.name).join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default AnimeList;
