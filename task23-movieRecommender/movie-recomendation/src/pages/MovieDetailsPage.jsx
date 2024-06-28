import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../api';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      const data = await fetchMovieDetails(id);
      setMovie(data);
    };

    getMovieDetails();
  }, [id]);

  return movie ? (
    <div className="p-4">
      <h1 className="text-2xl mb-4">{movie.title}</h1>
      <p className="mb-4">{movie.overview}</p>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="mb-4" />
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default MovieDetailsPage;
