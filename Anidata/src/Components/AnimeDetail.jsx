import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AnimeDetail = ({ match }) => {
  const { id } = match.params; // Extract ID from route params
  const [anime, setAnime] = useState(null);

  useEffect(() => {
    const fetchAnimeDetail = async () => {
      try {
        const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
        setAnime(response.data.data);
      } catch (error) {
        console.error('Error fetching anime detail:', error);
      }
    };

    fetchAnimeDetail();
  }, [id]);

  if (!anime) return <p>Loading...</p>;

  return (
    <div>
      <h1>{anime.title}</h1>
      <img src={anime.images.jpg.image_url} alt={anime.title} />
      <p>Rating: {anime.score}</p>
      <p>Genres: {anime.genres.map((g) => g.name).join(', ')}</p>
      <p>{anime.synopsis}</p> {/* Display more details */}
    </div>
  );
};

export default AnimeDetail;
