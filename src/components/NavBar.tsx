import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="logo">
          <NavLink to="/">
            <img src="images/FakeFlix.png" alt="FAKEFLIX" />
          </NavLink>
        </div>
        <div className="list">
          <nav>
            <ul>
              <li>Movies</li>
              <li>Series</li>
              <li>New/Popular</li>
            </ul>
          </nav>
        </div>
        <div className="userinfo">
          <ul>
            <li>Log Out</li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};
