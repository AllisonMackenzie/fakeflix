import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const [show, setShow] = useState(false);

  const scrollFunction = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else setShow(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollFunction);
    return () => {
      window.removeEventListener('scroll', scrollFunction);
    };
  }, []);

  return (
    <React.Fragment>
      <div className={`navbar ${show && 'nav__black'}`}>
        <div className="navbar__logo">
          <NavLink to="/">
            <img src="../images/FakeFlix.png" alt="FAKEFLIX" />
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
            <li></li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};
