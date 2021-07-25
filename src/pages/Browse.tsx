import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Browse.css';

interface BrowseProps {}

export const Browse: React.FC<BrowseProps> = ({}) => {
  const [movies, setMovies] = useState(0);

  const baseurl = `https://api.themoviedb.org/3`;
  const genre = `/genre/`;
  const tv = `/tv/`;
  const movie = `/movie/`;

  useEffect(() => {
    axios
      .get(baseurl + `/movie/76341?api_key=${process.env.REACT_APP_API_KEY}`)
      .then((response) => {});
  }, []);

  return (
    <React.Fragment>
      <div>Browse Page</div>
    </React.Fragment>
  );
};
