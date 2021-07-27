import React, { useEffect, useState } from 'react';
import { instance } from '../axios';
import './Row.css';

interface RowProps {
  title: string;
  fetchURL: string;
  isLargeRow?: boolean; //Optional
}

//For the images for the movie/tv posters
const baseURL = 'https://image.tmdb.org/t/p/original/';

export const Row: React.FC<RowProps> = ({ title, fetchURL, isLargeRow }) => {
  const [movies, setMovies] = useState<any>([]);

  useEffect(() => {
    instance.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  return (
    <React.Fragment>
      <div className="row__title">{title}</div>
      <div className="row__posters">
        {movies.map(
          (movie: {
            poster_path: string;
            backdrop_path: string;
            name: string;
            id: any;
          }) => (
            <img
              key={movie.id}
              className={`poster ${isLargeRow && 'posterlarge'}`}
              src={`${baseURL}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              loading="lazy"
            />
          )
        )}
      </div>
    </React.Fragment>
  );
};
