import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { TrailerPlayer } from '../components/TrailerPlayer';
import './Watch.css';

interface WatchProps {
  movie: string;
}

export const Watch: React.FC<WatchProps> = ({}) => {
  const { movie } = useParams<WatchProps>();

  if (movie !== '') {
    console.log(`Movie: " + ${movie}`);
    return (
      <React.Fragment>
        <TrailerPlayer movie={movie} />
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <div className="watch">
        <h1>
          This React App was made by{' '}
          <a
            href="https://github.com/DerpPrincess"
            target="_blank"
            rel="noreferrer"
          >
            Allison Mackenzie Johnson
          </a>
          .
        </h1>
        <h3>
          This is where the video would go if you clicked a movie on the{' '}
          <Link to="/browse">browse page</Link> :)
        </h3>
        <img src="../images/DerpPrincessLogo.png" alt="Derp Princess Logo" />
      </div>
    </React.Fragment>
  );
};
