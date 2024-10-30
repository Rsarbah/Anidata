import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const AnimeDetail = () => {
  const { id } = useParams(); 
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

  if (!anime) return <div>Loading...</div>;

  return (
    <div>
      <h1>{anime.title}</h1>
      <img src={anime.images.jpg.image_url} alt={anime.title} />
      <p>Rating: {anime.score}</p>
      <p>Genres: {anime.genres.map((g) => g.name).join(', ')}</p>
      <p>Episodes: {anime.episodes}</p>
      <div>
         <div>Synopsis: {anime.synopsis}</div>
      </div>
     
      {}
    </div>
  );
};

export default AnimeDetail;
