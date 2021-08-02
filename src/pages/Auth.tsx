import React from 'react';
import { Link } from 'react-router-dom';
import { GlowLoader } from '../components/GlowLoader';
import './Auth.css';

interface AuthProps {}

export const Auth: React.FC<AuthProps> = ({}) => {
  return (
    <React.Fragment>
      <div className="auth"></div>
      <div className="auth">
        Note: WebApp largely finished but some pages WIP. This webapp looks best
        with Google Chrome, please use this to view!
        {'--> '}
        <Link to="/browse">Click here to go to browse</Link>
      </div>
    </React.Fragment>
  );
};
