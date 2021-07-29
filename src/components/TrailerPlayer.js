import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import './TrailerPlayer.css';

const opts = {
  height: `1000`,
  width: `100%`,
  playerVars: {
    autoplay: 1,
  },
};

export const TrailerPlayer = (props) => {
  const [trailerURL, setTrailerURL] = useState('42');

  useEffect(() => {
    movieTrailer(
      props.movie?.name ||
        props.movie?.title ||
        props.movie?.original_name ||
        ''
    )
      .then((url) => {
        const URLParams = new URLSearchParams(new URL(url.search));
        setTrailerURL(URLParams.get('v'));
      })
      .catch((error) => console.log(error));
  }, []);

  console.log('URL:' + trailerURL);

  return (
    <React.Fragment>
      <div className="player">
        <YouTube videoId={trailerURL} opts={opts} />
      </div>
    </React.Fragment>
  );
};
