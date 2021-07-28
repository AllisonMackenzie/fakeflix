import { url } from 'inspector';
import React, { useState, useEffect } from 'react';
import { instance } from '../axios';
import requests from '../requests';
import './Banner.css';

interface BannerProps {}

/** This function sets a random Banner image at the top from Netflix originals.  */
const random = (dataLength: number) => {
  return Math.floor(Math.random() * dataLength - 1);
};

const truncate = (str: string, n: number) => {
  return str?.length > n ? str.substr(0, n - 1) + '...' : str;
};

export const Banner: React.FC<BannerProps> = ({}) => {
  const [movie, setMovie] = useState<any>([]);

  useEffect(() => {
    instance.get(requests.fetchNetflixOriginals).then((response) => {
      setMovie(response.data.results[random(response.data.results.length)]);
    });
  }, []);

  return (
    <React.Fragment>
      <div>
        <header
          className="banner"
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
          }}
        >
          <div className="banner__contents">
            {/* Accounts for edgecases with optional chaining*/}
            <h1 className="banner__title">
              {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className="banner__buttons">
              <button className="banner__button">Play</button>
              <button className="banner__button">My List</button>
            </div>
            <div className="banner__description">
              {truncate(movie?.overview, 150)}
            </div>
          </div>
        </header>
      </div>
    </React.Fragment>
  );
};
