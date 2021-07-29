import React from 'react';
import { Link } from 'react-router-dom';
import { GlowLoader } from '../components/GlowLoader';
import './Auth.css';

interface AuthProps {}

export const Auth: React.FC<AuthProps> = ({}) => {
  return (
    <React.Fragment>
      <div className="auth">
        <Link to="/browse">Click here to go to browse</Link> - auth page will be
        deployed July 30, 2021 - This webapp looks best on Google Chrome Browser
        :)
      </div>
    </React.Fragment>
  );
};
