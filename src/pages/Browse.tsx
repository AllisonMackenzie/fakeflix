import React from 'react';
import { Row } from '../components/Row';
import requests from '../requests';
import './Browse.css';

interface BrowseProps {}

export const Browse: React.FC<BrowseProps> = ({}) => {
  return (
    <React.Fragment>
      <div>Browse Page</div>
      <div>
        <Row title="Hello" fetchURL={requests.fetchActionAdventureSeries} />
      </div>
    </React.Fragment>
  );
};
