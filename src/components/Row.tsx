import React, { useEffect, useState } from 'react';
import { instance } from '../axios';

interface RowProps {
  title: string;
  fetchURL: string;
}

//For the images for the movie/tv posters
const baseURL = 'https://image.tmdb.org/t/p/original/';

export const Row: React.FC<RowProps> = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState<any>([]);

  useEffect(() => {
    instance.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  return (
    <React.Fragment>
      <div className="rowTitle">{title}</div>
      <div className="rowPosters">
        {movies.map((movie: { poster_path: string; name: string }) => (
          <img
            className="poster"
            src={`${baseURL}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </React.Fragment>
  );
};
