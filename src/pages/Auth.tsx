import React from 'react';
import { Link } from 'react-router-dom';
import { GlowLoader } from '../components/GlowLoader';
import './Auth.css';

interface AuthProps {}

export const Auth: React.FC<AuthProps> = ({}) => {
  return (
    <React.Fragment>
      <div className="auth"></div>
    </React.Fragment>
  );
};
