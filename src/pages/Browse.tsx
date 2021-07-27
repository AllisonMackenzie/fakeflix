import React from 'react';
import { Row } from '../components/Row';
import requests from '../requests';
import './Browse.css';

interface BrowseProps {}

export const Browse: React.FC<BrowseProps> = ({}) => {
  return (
    <React.Fragment>
      <div>
        <Row
          title="NETFLIX ORIGINALS"
          fetchURL={requests.fetchNetflixOriginals}
        />
        <Row title="Trending Now" fetchURL={requests.fetchTrendingAll} />
        <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
        <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchURL={requests.fetchDocumentarySeries} />
      </div>
    </React.Fragment>
  );
};
