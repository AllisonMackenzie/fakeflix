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
              <li>Hello</li>
              <li>Hello</li>
              <li>Hello</li>
              <li>Hello</li>
            </ul>
          </nav>
        </div>
        <div className="userinfo">
          <ul>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};
