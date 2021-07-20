import React from 'react';
import { Link } from 'react-router-dom';
import { GlowLoader } from '../components/GlowLoader';
import './Auth.css';

interface AuthProps {}

export const Auth: React.FC<AuthProps> = ({}) => {
  return (
    <React.Fragment>
      <div>Auth Page</div>
      <div>
        <Link to="/browse">Click me to go to browse!</Link>
      </div>
      <div>
        <GlowLoader />
      </div>
    </React.Fragment>
  );
};
