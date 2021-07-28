import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const [show, handleShow] = useState(false);

  const scrollFunction = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else handleShow(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollFunction);
    return () => {
      window.removeEventListener('scroll', scrollFunction);
    };
  }, []);

  return (
    <React.Fragment>
      <div className={`navbar`}>
        <div className="navbar__logo">
          <NavLink to="/">
            <img src="images/FakeFlix.png" alt="FAKEFLIX" />
          </NavLink>
        </div>
        <div className="list">
          <nav>
            <ul>
              <li></li>
              <li></li>
              <li></li>
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
